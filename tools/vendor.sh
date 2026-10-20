#!/bin/bash
# Copy the asheron-web files ac-bestiary uses into vendor/asheron-web (spec: "Data sources").
# The list is vendor/asheron-web/FILES.txt. Add a path there when the build needs a new file.
set -euo pipefail
cd "$(dirname "$0")/.."
src=${ASHERON_WEB:-../../asheron-web}
dst=vendor/asheron-web
while read -r f; do mkdir -p "$dst/$(dirname "$f")"; cp "$src/$f" "$dst/$f"; done < "$dst/FILES.txt"
cp "$src/LICENSE" "$src/NOTICE.md" "$dst/"
echo "copied $(wc -l < "$dst/FILES.txt") files from $src at $(git -C "$src" rev-parse --short HEAD)"
