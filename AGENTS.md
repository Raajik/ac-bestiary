# ac-bestiary

Read `specs/ac-bestiary.md` first. Implement to it. If the spec is wrong, change the spec first.

- Follow `~/.agents/AGENTS.md`: spec first, Ponytail (smallest change that meets the spec), plain English for
  docs, comments and commit messages.
- Facts go in `docs/` (see `docs/README.md`), tagged Verified, Observed or Unknown, in the same commit as the
  code that uses them. Commit subject: `Area: one fact as a sentence`. Keep commits small.
- Do not fetch acpedia.org. Use `~/wiki/raw/acpedia/Tusker.md`.
- Do not edit `~/Projects/asheron-web`. Import from it.
- Run heavy jobs (large builds, renders) with `heavy-ok` first. See `~/specs/heavy-jobs.md`.
