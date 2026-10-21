#!/bin/bash
# Build the site and publish dist/ to the gh-pages branch (spec: "Build and output").
#
# The test suite runs first, and a failure stops the deploy (spec: "Tests and tools").
# --no-gate skips the suite for a push that must happen now. It warns and logs that line.
set -euo pipefail
cd "$(dirname "$0")/.."

gate=1
for arg in "$@"; do
  case "$arg" in
    --no-gate) gate=0 ;;
    -h|--help)
      echo "use: tools/deploy.sh [--no-gate]"
      echo "  --no-gate  skip the test suite; the push is then untested"
      exit 0 ;;
    *)
      echo "deploy: unknown argument: $arg" >&2
      echo "use: tools/deploy.sh [--no-gate]" >&2
      exit 2 ;;
  esac
done

if [ "$gate" = 1 ]; then
  echo "deploy: running the test suite first (tools/deploy.sh --no-gate skips it)"
  if ! npx vitest run; then
    echo "deploy: STOPPED. A test failed, so nothing was pushed." >&2
    echo "deploy: fix the test, or push untested with tools/deploy.sh --no-gate." >&2
    exit 1
  fi
else
  echo "WARNING: --no-gate: the test suite did NOT run. The site is pushed UNTESTED." >&2
fi

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
cd ..
if [ "$gate" = 0 ]; then
  mkdir -p .agent-log
  echo "$(date -Is) deploy --no-gate: pushed $(git rev-parse --short HEAD) untested" >> .agent-log/deploy.log
fi
echo "deployed: https://raajik.github.io/ac-bestiary/"
