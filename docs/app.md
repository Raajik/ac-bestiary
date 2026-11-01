# The desktop app

Facts about the AC wiki app's shell (spec: `specs/wiki-app.md`).

- The shell is Tauri 2 (CLI 2.12.4, crate `tauri` 2.12), in `src-tauri/`. **Observed:** `npx tauri --version`.
- On Linux the webview is the system WebKitGTK 4.1; zahir has 2.54.2. **Observed:** `pkg-config --modversion
  webkit2gtk-4.1`, 2026-10-31.
- A debug build of the shell on zahir takes about 1 minute from clean (12 cores). **Observed:** `npx tauri build
  --debug --no-bundle`, 2026-10-31.
- `tauri build` embeds the files of `frontendDist` (`dist-app/`) in the binary, so the built binary runs without a
  server. It copies the bundle resources (`data/snapshot/`, 135 MB) next to a debug binary, as
  `target/debug/snapshot/`. **Observed:** `npx tauri build --debug --no-bundle`, 2026-10-31.
- `src-tauri/target` is in the Syncthing ignore list of `/mnt/baishi/projects` on zahir, so the Rust build output
  (gigabytes) stays on the box that made it. **Observed:** `/mnt/baishi/projects/.stignore`, 2026-10-31.
- Three.js WebGL with an animated model runs in the WebKitGTK window on zahir (AMD, Wayland) with no env flag.
  **Observed:** the user ran the spike, 2026-10-31.

## The Rust side

- It has four commands (`snapshot_query`, `read_dat_range`, `install_folder`, `set_install_folder`) and the `snap`
  protocol for the snapshot's images (`snap://localhost/<file>` on Linux, `http://snap.localhost/<file>` on
  Windows; `convertFileSrc(file, 'snap')` gives the right one). **Observed:** `src-tauri/src/lib.rs`, Tauri docs.
- The snapshot opens read-only, and `snapshot_query` refuses a statement SQLite does not call read-only.
- The bundled SQLite of rusqlite 0.37 has FTS5 and `json_each`. **Verified:** `cargo test` in `src-tauri`.
- The image protocol serves plain file names of the images folder only (no `/`, `\` or leading `.` after
  decoding). **Verified:** `cargo test` in `src-tauri`.
- The install folder is saved in the app's config folder as `settings.json` (`installFolder`).

## The pages

- The app's pages are the Vite target `--mode app` (`src/app/`, port 5174 in dev), on the bestiary's styles and its
  open view (`src/page/open-view.ts`).
- A WebGL canvas reads back blank once its frame is shown; read it in the same task as the render (the stills) or
  in the next animation frame. **Observed:** `tools/app-check.ts`, 2026-10-31.
- A weapon's rest pose lies flat, so the examine camera sees it edge-on; the item view turns it about its longest
  axis first (`ModelViewer.standUpFlat`). **Observed:** app-check screenshots of the Quiddity grid, 2026-10-31.
- `tools/app-check.ts` runs the pages in headless Chromium against the real snapshot and DAT, with the Rust side's
  calls answered from Node, and checks the first slice's "done when" items a browser can see. It passed 13 of 13
  on zahir. **Verified:** `.agent-log/app-check/2026-11-01T04-16-42-271Z/result.json`.
