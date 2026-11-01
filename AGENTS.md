# ac-bestiary

Read `specs/ac-bestiary.md` first (the public Tusker page). The desktop AC wiki app that grows out of it has its own
spec, `specs/wiki-app.md`. Implement to them. If a spec is wrong, change the spec first.

- Follow `~/.agents/AGENTS.md`: spec first, the house rules, plain English for
  docs, comments and commit messages.
- Facts go in `docs/` (see `docs/README.md`), tagged Verified, Observed or Unknown, in the same commit as the
  code that uses them. Commit subject: `Area: one fact as a sentence`. Keep commits small.
- Do not fetch acpedia.org. The public page uses `~/wiki/raw/acpedia/Tusker.md`.
- Only `tools/wiki-snapshot` reads the ACCPP Wiki on lohk (`10.0.0.10`), gently: build time only, at most 2 requests
  at a time. Tests use fixtures, never the LAN. Never put a `10.0.0.10` link in the public build.
- Do not edit `~/Projects/asheron-web`. Import from it.
- Run heavy jobs (large builds, renders) with `heavy-ok` first. See `~/specs/heavy-jobs.md`.
