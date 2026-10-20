#!/bin/bash
# Build the site and publish dist/ to the gh-pages branch (spec: "Build and output").
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
remote=$(git remote get-url origin)
cd dist
touch .nojekyll  # serve the files as they are
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(git -C .. rev-parse --short HEAD)"
git push -q -f "$remote" gh-pages
rm -rf .git
echo "deployed: https://raajik.github.io/ac-bestiary/"
