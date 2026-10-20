# Data

- The retail Tusker weenies are in `Database/Patches/9 WeenieDefaults/Creature/Tusker/` of
  ACE-World-16PY-Patches. There are 82 files there. **Observed** (sparse clone, 2026-10-20).
- The ACPedia Tusker page "Stats" table lists 40 entries. **Observed** (`~/wiki/raw/acpedia/Tusker.md`, fetched 2026-10-20).
- ACE uses `1 - 1 / (1 + exp(factor * (skill - difficulty)))` for skill checks. The factor is 0.03, or 0.07 for
  magic. **Observed** (ACE `ACE.Server/WorldObjects/SkillCheck.cs`).

## Unknowns

- Which of the same-name weenies spawn in the retail world.
