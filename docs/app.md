# The desktop app

Facts about the AC wiki app's shell (spec: `specs/wiki-app.md`).

- The shell is Tauri 2 (CLI 2.12.4, crate `tauri` 2.12), in `src-tauri/`. **Observed:** `npx tauri --version`.
- On Linux the webview is the system WebKitGTK 4.1; zahir has 2.54.2. **Observed:** `pkg-config --modversion
  webkit2gtk-4.1`, 2026-10-31.
- A debug build of the shell on zahir takes about 1 minute from clean (12 cores). **Observed:** `npx tauri build
  --debug --no-bundle`, 2026-10-31.
- `tauri build` embeds the files of `frontendDist` in the binary, so the built binary runs without a server.
  **Observed:** Tauri's config docs; the spike binary loads `dist/`.
- `src-tauri/target` is in the Syncthing ignore list of `/mnt/baishi/projects` on zahir, so the Rust build output
  (gigabytes) stays on the box that made it. **Observed:** `/mnt/baishi/projects/.stignore`, 2026-10-31.
