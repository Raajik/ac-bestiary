#!/bin/bash
# Fetch or check the outside inputs of tests/defense-vs-acpedia.test.ts (spec: "Tests and tools").
# The two world databases are public: they are cloned when missing. The saved ACPedia page and the
# retail client data are the user's own files: the script names them when they are missing.
# The paths follow src/lib/paths.ts, with the same AC_* variables.
set -euo pipefail
home="${HOME:?}"
patch_root="${AC_PATCH_ROOT:-$home/Projects/asherons-call/_refs/ACE-World-16PY-Patches/Database/Patches/9 WeenieDefaults}"
base_root="${AC_BASE_ROOT:-$home/Projects/asherons-call/_refs/ACE-World-16PY/Database/3-Core/9 WeenieDefaults/SQL}"
acpedia="${AC_ACPEDIA_PAGE:-$home/wiki/raw/acpedia/Tusker.md}"
dat="${AC_PORTAL_DAT:-$home/Games/AsheronsCall/Client/client_portal.dat}"
missing=0

clone_if_missing() { # <path inside the clone> <clone folder> <repo URL>
  if [ -e "$1" ]; then echo "ok: $1"; return; fi
  if [ -e "$2" ]; then echo "missing: $1 (the folder $2 exists, so it is left alone)"; missing=1; return; fi
  echo "cloning $3 into $2"
  git clone -q --depth 1 "$3" "$2" && echo "ok: $1" || { echo "failed: $3" >&2; missing=1; }
}

clone_if_missing "$patch_root" "${patch_root%%/Database/*}" https://github.com/ACEmulator/ACE-World-16PY-Patches.git
clone_if_missing "$base_root" "${base_root%%/Database/*}" https://github.com/ACEmulator/ACE-World-16PY.git
for f in "$acpedia" "$dat"; do
  if [ -e "$f" ]; then echo "ok: $f"; else echo "missing, supply it yourself: $f"; missing=1; fi
done
[ -e "$acpedia" ] || echo "  the ACPedia page: save the acpedia.org Tusker page there, or set AC_ACPEDIA_PAGE"
[ -e "$dat" ] || echo "  the client data: copy client_portal.dat from an AC install there, or set AC_PORTAL_DAT"
exit "$missing"
