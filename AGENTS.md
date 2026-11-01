# ac-bestiary

Read `specs/ac-bestiary.md` first. Implement to it. If the spec is wrong, change the spec first.

- Follow `~/.agents/AGENTS.md`: spec first, the house rules, plain English for
  docs, comments and commit messages.
- Facts go in `docs/` (see `docs/README.md`), tagged Verified, Observed or Unknown, in the same commit as the
  code that uses them. Commit subject: `Area: one fact as a sentence`. Keep commits small.
- Do not fetch acpedia.org (it is down). The build reads the ACCPP Wiki on lohk, gently: build time only, through
  the cache in `data/wiki/` (spec: "The wiki"). Never put a `10.0.0.10` link in the public build.
- Do not edit `~/Projects/asheron-web`. Import from it.
- Run heavy jobs (large builds, renders) with `heavy-ok` first. See `~/specs/heavy-jobs.md`.
