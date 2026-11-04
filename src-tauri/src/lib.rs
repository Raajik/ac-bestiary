// The Rust side of the AC wiki app (spec wiki-app.md, "Shell"): it opens the
// snapshot's SQLite file read-only, serves byte ranges of the AC install's
// client_portal.dat to the TypeScript DAT reader, keeps the install folder
// setting, and serves the snapshot's images on the `snap` protocol.

use std::fs::{self, File};
use std::io::{Read, Seek, SeekFrom};
use std::path::{Component, Path, PathBuf};
use std::sync::Mutex;

use rusqlite::{Connection, OpenFlags, limits::Limit, types::ValueRef};
use serde_json::{Map, Value};
use tauri::{AppHandle, Manager, State, http};
use tauri_plugin_dialog::DialogExt;

const PORTAL_DAT: &str = "client_portal.dat";
/** The largest DAT range one call serves; RangedDat asks for far less. */
const MAX_RANGE: u32 = 64 * 1024 * 1024;

struct AppState {
    snapshot_dir: PathBuf,
    db: Mutex<Option<Connection>>,
    settings_file: PathBuf,
    portal: Mutex<Option<(PathBuf, File)>>,
}

/// The snapshot folder: AC_SNAPSHOT_DIR, else the bundled copy, else the repo's (a dev build).
fn find_snapshot_dir(app: &tauri::App) -> PathBuf {
    if let Ok(dir) = std::env::var("AC_SNAPSHOT_DIR") {
        if !dir.is_empty() {
            return PathBuf::from(dir);
        }
    }
    if let Ok(resources) = app.path().resource_dir() {
        let bundled = resources.join("snapshot");
        if bundled.join("wiki.sqlite").is_file() {
            return bundled;
        }
    }
    Path::new(env!("CARGO_MANIFEST_DIR")).join("../data/snapshot")
}

fn read_settings(file: &Path) -> Map<String, Value> {
    fs::read_to_string(file)
        .ok()
        .and_then(|text| serde_json::from_str::<Value>(&text).ok())
        .and_then(|value| value.as_object().cloned())
        .unwrap_or_default()
}

fn saved_install(state: &AppState) -> Option<PathBuf> {
    read_settings(&state.settings_file)
        .get("installFolder")
        .and_then(Value::as_str)
        .map(PathBuf::from)
}

/// The AC install folder saved on first run, if it still holds client_portal.dat.
#[tauri::command]
fn install_folder(state: State<AppState>) -> Option<String> {
    saved_install(&state)
        .filter(|dir| dir.join(PORTAL_DAT).is_file())
        .map(|dir| dir.to_string_lossy().into_owned())
}

/// Check the folder holds client_portal.dat, then remember it.
#[tauri::command]
fn set_install_folder(state: State<AppState>, folder: String) -> Result<String, String> {
    let dir = PathBuf::from(folder.trim());
    if !dir.join(PORTAL_DAT).is_file() {
        return Err(format!("{} has no {PORTAL_DAT}", dir.display()));
    }
    let mut settings = read_settings(&state.settings_file);
    settings.insert("installFolder".into(), Value::String(dir.to_string_lossy().into_owned()));
    if let Some(parent) = state.settings_file.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    fs::write(&state.settings_file, Value::Object(settings).to_string()).map_err(|e| e.to_string())?;
    *state.portal.lock().unwrap() = None;
    Ok(dir.to_string_lossy().into_owned())
}

/// Ask for the install folder with the system's folder dialog. `None` when the dialog is closed without a choice.
/// An async command, so the dialog does not block the thread that draws the window.
#[tauri::command]
async fn pick_install_folder(app: AppHandle, start: Option<String>) -> Result<Option<String>, String> {
    let mut dialog = app.dialog().file().set_title("Choose the Asheron's Call folder (the one with client_portal.dat)");
    if let Some(dir) = start.map(PathBuf::from).filter(|dir| dir.is_dir()) {
        dialog = dialog.set_directory(dir);
    }
    let picked = dialog.blocking_pick_folder();
    match picked {
        None => Ok(None),
        Some(path) => path
            .into_path()
            .map(|dir| Some(dir.to_string_lossy().into_owned()))
            .map_err(|e| e.to_string()),
    }
}

/// `length` bytes of client_portal.dat from `offset` (fewer only at the end of the file).
#[tauri::command]
fn read_dat_range(state: State<AppState>, offset: u64, length: u32) -> Result<tauri::ipc::Response, String> {
    if length > MAX_RANGE {
        return Err(format!("range of {length} bytes is too large"));
    }
    let dir = saved_install(&state).ok_or("no AC install folder is set")?;
    let path = dir.join(PORTAL_DAT);

    let mut portal = state.portal.lock().unwrap();
    if portal.as_ref().map(|(open, _)| open != &path).unwrap_or(true) {
        let file = File::open(&path).map_err(|e| format!("{}: {e}", path.display()))?;
        *portal = Some((path, file));
    }
    let (_, file) = portal.as_mut().unwrap();

    file.seek(SeekFrom::Start(offset)).map_err(|e| e.to_string())?;
    let mut bytes = Vec::with_capacity(length as usize);
    file.take(length as u64).read_to_end(&mut bytes).map_err(|e| e.to_string())?;
    Ok(tauri::ipc::Response::new(bytes))
}

fn json_of(value: ValueRef) -> Value {
    match value {
        ValueRef::Null => Value::Null,
        ValueRef::Integer(i) => Value::from(i),
        ValueRef::Real(f) => Value::from(f),
        ValueRef::Text(t) => Value::String(String::from_utf8_lossy(t).into_owned()),
        ValueRef::Blob(_) => Value::Null,
    }
}

/// The snapshot, read-only. SQLite calls ATTACH read-only too, so no other database may be attached.
fn open_snapshot(path: &Path) -> Result<Connection, String> {
    let conn = Connection::open_with_flags(path, OpenFlags::SQLITE_OPEN_READ_ONLY | OpenFlags::SQLITE_OPEN_NO_MUTEX)
        .map_err(|e| format!("the snapshot {} did not open: {e}", path.display()))?;
    conn.set_limit(Limit::SQLITE_LIMIT_ATTACHED, 0).map_err(|e| e.to_string())?;
    Ok(conn)
}

/// Run one read-only statement on the snapshot and give its rows as objects.
#[tauri::command]
fn snapshot_query(state: State<AppState>, sql: String, params: Vec<Value>) -> Result<Vec<Map<String, Value>>, String> {
    let mut db = state.db.lock().unwrap();
    if db.is_none() {
        let path = state.snapshot_dir.join("wiki.sqlite");
        *db = Some(open_snapshot(&path)?);
    }
    let conn = db.as_ref().unwrap();

    let mut stmt = conn.prepare(&sql).map_err(|e| e.to_string())?;
    if !stmt.readonly() {
        return Err("the snapshot is read-only".into());
    }
    let names: Vec<String> = stmt.column_names().iter().map(|n| n.to_string()).collect();
    let values: Vec<rusqlite::types::Value> = params
        .iter()
        .map(|p| match p {
            Value::Null => rusqlite::types::Value::Null,
            Value::Bool(b) => rusqlite::types::Value::Integer(*b as i64),
            Value::Number(n) => n
                .as_i64()
                .map(rusqlite::types::Value::Integer)
                .unwrap_or_else(|| rusqlite::types::Value::Real(n.as_f64().unwrap_or(0.0))),
            Value::String(s) => rusqlite::types::Value::Text(s.clone()),
            other => rusqlite::types::Value::Text(other.to_string()),
        })
        .collect();

    let mut rows = stmt.query(rusqlite::params_from_iter(values)).map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    while let Some(row) = rows.next().map_err(|e| e.to_string())? {
        let mut object = Map::new();
        for (i, name) in names.iter().enumerate() {
            object.insert(name.clone(), json_of(row.get_ref(i).map_err(|e| e.to_string())?));
        }
        out.push(object);
    }
    Ok(out)
}

fn content_type(name: &str) -> &'static str {
    match name.rsplit('.').next().map(|ext| ext.to_ascii_lowercase()).as_deref() {
        Some("png") => "image/png",
        Some("jpg") | Some("jpeg") => "image/jpeg",
        Some("gif") => "image/gif",
        Some("svg") => "image/svg+xml",
        Some("webp") => "image/webp",
        _ => "application/octet-stream",
    }
}

/// A snapshot image by its file name: `snap://localhost/<name>`.
fn serve_image(images: &Path, request: &http::Request<Vec<u8>>) -> http::Response<Vec<u8>> {
    let raw = request.uri().path().trim_start_matches('/');
    let name = percent_encoding::percent_decode_str(raw).decode_utf8_lossy().into_owned();
    let missing = || http::Response::builder().status(404).body(Vec::new()).unwrap();
    // Only a plain file name: no folder, no drive (`C:x` on Windows), no way out of the images folder.
    let mut parts = Path::new(&name).components();
    let plain = matches!((parts.next(), parts.next()), (Some(Component::Normal(_)), None));
    if !plain || name.contains(['/', '\\', ':']) || name.starts_with('.') {
        return missing();
    }
    match fs::read(images.join(&name)) {
        Ok(bytes) => http::Response::builder()
            .header("Content-Type", content_type(&name))
            .body(bytes)
            .unwrap(),
        Err(_) => missing(),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            let snapshot_dir = find_snapshot_dir(app);
            let settings_file = app.path().app_config_dir()?.join("settings.json");
            app.manage(AppState {
                snapshot_dir,
                db: Mutex::new(None),
                settings_file,
                portal: Mutex::new(None),
            });
            Ok(())
        })
        .register_uri_scheme_protocol("snap", |ctx, request| {
            let state = ctx.app_handle().state::<AppState>();
            serve_image(&state.snapshot_dir.join("images"), &request)
        })
        .invoke_handler(tauri::generate_handler![install_folder, set_install_folder, pick_install_folder, read_dat_range, snapshot_query])
        .run(tauri::generate_context!())
        .expect("error while running the AC wiki app");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bundled_sqlite_has_fts5_and_json_each() {
        let db = Connection::open_in_memory().unwrap();
        db.execute_batch("create virtual table search using fts5(title, body); insert into search values ('Bow', 'pulsating energy');")
            .unwrap();
        let hits: i64 = db.query_row("select count(*) from search where search match '\"puls\"*'", [], |r| r.get(0)).unwrap();
        assert_eq!(hits, 1);
        let items: i64 = db.query_row("select count(*) from json_each('[\"a\",\"b\"]')", [], |r| r.get(0)).unwrap();
        assert_eq!(items, 2);
    }

    #[test]
    fn the_snapshot_refuses_to_attach_another_database() {
        let dir = std::env::temp_dir().join(format!("ac-wiki-attach-{}", std::process::id()));
        fs::create_dir_all(&dir).unwrap();
        let path = dir.join("wiki.sqlite");
        Connection::open(&path).unwrap().execute_batch("create table pages (title text);").unwrap();
        let other = dir.join("other.sqlite");
        Connection::open(&other).unwrap().execute_batch("create table secret (x text);").unwrap();

        let conn = open_snapshot(&path).unwrap();
        let attach = conn.execute("attach database ?1 as other", [other.to_string_lossy()]);
        assert!(attach.is_err(), "attach should fail");
        // Windows does not delete a file SQLite holds open.
        drop(conn);
        fs::remove_dir_all(&dir).unwrap();
    }

    #[test]
    fn serve_image_gives_only_files_of_the_images_folder() {
        let dir = std::env::temp_dir().join(format!("ac-wiki-images-{}", std::process::id()));
        fs::create_dir_all(dir.join("images")).unwrap();
        fs::write(dir.join("images").join("A b.png"), b"png").unwrap();
        fs::write(dir.join("secret.txt"), b"no").unwrap();
        // On Windows `images.join("C:secret.txt")` leaves the images folder; on Linux it is a file name, so make it.
        #[cfg(not(windows))]
        fs::write(dir.join("images").join("C:secret.txt"), b"no").unwrap();
        let get = |path: &str| {
            let request = http::Request::builder().uri(format!("snap://localhost/{path}")).body(Vec::new()).unwrap();
            serve_image(&dir.join("images"), &request)
        };
        let ok = get("A%20b.png");
        assert_eq!(ok.status(), 200);
        assert_eq!(ok.headers()["Content-Type"], "image/png");
        for bad in ["..%2Fsecret.txt", "%2E%2E%5Csecret.txt", "C%3Asecret.txt", ".hidden", "", "missing.png"] {
            assert_eq!(get(bad).status(), 404, "{bad}");
        }
        fs::remove_dir_all(&dir).unwrap();
    }
}
