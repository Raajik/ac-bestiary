# Testing

- `tools/deploy.sh` runs `npx vitest run` first and stops before the build and the push when a test fails.
  `--no-gate` skips it, warns, and logs a line in `.agent-log/deploy.log`.
- `tests/defense-vs-acpedia.test.ts` skips, with a reason that names `tools/fetch-refs.sh`, when one of its four
  inputs is missing (`src/lib/paths.ts`). With `CI` set, a missing input fails the run instead.
- `tools/fetch-refs.sh` clones the two ACEmulator world databases when they are missing, and names the saved
  ACPedia page and `client_portal.dat`, which the user supplies. It exits 1 while an input is missing.
- `tools/githooks/commit-msg` refuses a commit that changes `src/` and nothing under `tests/`, unless the message
  holds `[skip-tests]`. The global hook dispatcher runs it on the user's boxes; elsewhere link
  `.git/hooks/commit-msg` to it.
