# Data

Where the creature data comes from and how the build reads it.

## The sources

- The retail weenie SQL is in the world database of the AC Emulator, because the
  emulator is the only way to play the game. Two databases hold it:
  - `ACEmulator/ACE-World-16PY-Patches` holds the patches, the weenies as they
    are now. A sparse clone is at `~/Projects/asherons-call/_refs/ACE-World-16PY-Patches`.
  - `ACEmulator/ACE-World-16PY` holds the base world, the weenies the patches
    did not touch. A sparse clone is at `~/Projects/asherons-call/_refs/ACE-World-16PY`.
  - A patch wins over the base file of the same class id. **Verified** (the
    build reads the patch file first).
- The Tusker weenies are in `Database/Patches/9 WeenieDefaults/Creature/Tusker/`
  of the patch database. There are 82 files there. **Observed** (sparse clone,
  2026-10-20).
- The Imp and the Mudmouth of the ACPedia "Subclassed" table are Tuskers too.
  Their weenies are in `Creature/Shadow/35954 Imp.sql` and
  `Creature/Simulacrum/35940 Mudmouth.sql` of the patch database. **Observed**
  (2026-10-20).
- The ACPedia Tusker page "Stats" table lists 40 entries, and the "Subclassed"
  table lists 2 more. **Observed** (`~/wiki/raw/acpedia/Tusker.md`, fetched
  2026-10-20).
- The retail client data `client_portal.dat` holds the models, the icons and the
  game tables. The build reads two tables from it. The SkillTable gives the
  attribute formula of each skill. The SpellTable gives the names of the spells.
  **Verified** (the build reads both).
- ACE uses `1 - 1 / (1 + exp(factor * (skill - difficulty)))` for skill checks.
  The factor is 0.03, or 0.07 for magic. **Observed** (ACE
  `ACE.Server/WorldObjects/SkillCheck.cs`).

## The models

- The model of a creature is the setup of the weenie, the clothes of the
  clothing table and the colours of the palette. The build reads the client
  files of every model into one bundle. The page does not read the 900 MB
  client data. The bundle holds 174 files of 2.4 MB. **Verified** (the build
  output, 2026-10-20).
- The clothes of a creature come from the clothing table of the weenie, the
  property data id 7. The table holds the texture swaps of the parts and the
  palettes of the colours. **Observed** (ACE
  `ACE.Server/WorldObjects/WorldObject_Networking.cs`, `CalculateObjDesc`).
- The colours of a body are the palette of the weenie, the property data id 6,
  with the ranges of the clothing palette over it. The palette template of the
  weenie, the property int 3, picks the ranges. **Observed** (the same place
  in ACE).
- The still images of the tiles are the retail examine picture. The model
  stands in the rest pose, with the heading of 191.3679 degrees. The light and
  the camera are the ones of the examine portrait. **Verified** (the build
  output, 2026-10-20).
- The page shows the same picture in the live view, with the same camera and
  the same light. **Verified** (the smoke check of the page, 2026-10-20).

## The sparse clones

The clones hold only the folders the build reads. To get them:

```
git -C ~/Projects/asherons-call/_refs/ACE-World-16PY-Patches sparse-checkout add 'Database/Patches/9 WeenieDefaults'
git -C ~/Projects/asherons-call/_refs/ACE-World-16PY sparse-checkout set 'Database/3-Core/3 TreasureTable' 'Database/3-Core/9 WeenieDefaults'
```

The patch clone also holds `Database/Patches/3 TreasureTable`, which holds the
death treasure profiles. The build does not read them, because the profiles
hold the kind of loot and not the named trophies.

## The trophies

The named trophies of a creature come from its create list. Each row holds one
item and the drop chance in the `shade` column. A row with no weenie class id
is the "nothing" row that completes the chance range. **Verified** (ACE
`ACE.Server/WorldObjects/Creature_Equipment.cs`, `CreateListSelect`).

## The names without a retail weenie

The build prints these names, and the page gives them no tile:

- Mini Silver Tusker
- Mini Tusker
- Mini Tuskie Sprinter

**Observed** (2026-10-20, the build output).

## Unknowns

- Which of the same-name weenies spawn in the retail world.
- The page has no spawn places, because the landblock data is not in the
  sparse clones.
