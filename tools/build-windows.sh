#!/bin/bash
# Cross-compile the wiki app for Windows on Linux, and zip it with the snapshot (docs/app.md, "Windows build").
# Needs: rustup target x86_64-pc-windows-gnu, cargo-zigbuild, python3. Zig comes from PyPI (ziglang) into a venv
# under ~/.cache, so nothing is installed system-wide.
# Output: dist-win/AC-Wiki-windows.zip (ac-wiki.exe, WebView2Loader.dll, snapshot/).
set -euo pipefail
cd "$(dirname "$0")/.."
venv="$HOME/.cache/ac-wiki-zig"
[ -x "$venv/bin/python" ] || { python3 -m venv "$venv"; "$venv/bin/pip" install -q ziglang; }
[ -f data/snapshot/wiki.sqlite ] || { echo "no data/snapshot/wiki.sqlite: run npm run snapshot and npm run build:app-data first" >&2; exit 1; }

export PATH="$venv/bin:$PATH" ZIG_PYTHON="$venv/bin/python" RC="$PWD/tools/zig-rc-as-llvm-rc"
npx tauri build --no-bundle --runner cargo-zigbuild --target x86_64-pc-windows-gnu

release=src-tauri/target/x86_64-pc-windows-gnu/release
mkdir -p dist-win
"$venv/bin/python" - "$release" dist-win/AC-Wiki-windows.zip <<'PY'
import os, sys, zipfile
release, out = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for name in ('ac-wiki.exe', 'WebView2Loader.dll'):
        z.write(os.path.join(release, name), f'AC Wiki/{name}')
    for folder, _, files in os.walk('data/snapshot'):
        for name in files:
            path = os.path.join(folder, name)
            z.write(path, os.path.join('AC Wiki', 'snapshot', os.path.relpath(path, 'data/snapshot')))
print(out, os.path.getsize(out) // 1_000_000, 'MB')
PY
