# HANDOFF

The prototype of the Tusker page. It shows one tile per Tusker type. The open
tile shows the defense, the attack and the trophies of the creature.

## Build

The build needs the sources below. They are on this box already.

| Source | Where |
| --- | --- |
| The retail weenie SQL | `~/Projects/asherons-call/_refs/ACE-World-16PY-Patches` and `~/Projects/asherons-call/_refs/ACE-World-16PY` |
| The saved ACPedia page | `~/wiki/raw/acpedia/Tusker.md` |
| The retail client data | `~/Games/AsheronsCall/Client/client_portal.dat` |
| The model code | `~/Projects/asheron-web` (read only) |

The sparse clones must hold the folders the build reads:

```
git -C ~/Projects/asherons-call/_refs/ACE-World-16PY-Patches sparse-checkout add 'Database/Patches/9 WeenieDefaults'
git -C ~/Projects/asherons-call/_refs/ACE-World-16PY sparse-checkout set 'Database/3-Core/3 TreasureTable' 'Database/3-Core/9 WeenieDefaults'
```

Then one command makes the site:

```
npm install
npm run build
```

The build has four steps: the creature data, the trophy icons, the still images
and the page. The still images need a browser, because this box has no GPU. The
build uses the Chromium of Playwright with the software renderer.

Each step also runs on its own:

```
npm run build:data     # dist/data.json
npm run build:icons     # dist/icons
npm run build:stills    # dist/stills and dist/models.bin
```

## View

The site is a static directory. Any static file server works:

```
python3 -m http.server 8000 --directory dist
```

Then open `http://<the address of the box>:8000/`. The page needs the network
address of the box, because the models and the images come from the server.

`npm run deploy` publishes the built site to GitHub Pages: https://raajik.github.io/ac-bestiary/ (public, the
user's choice of 2026-10-20). The source repo stays private.

## The tests

```
npm test
```

- `tests/hit-chance.test.ts` checks the hit chance formula of the AC Emulator.
  Equal skills give 50%, and 73 more skill with factor 0.03 gives about 90%.
- `tests/defense-vs-acpedia.test.ts` checks the defense skills of the retail
  weenie data against the values the ACPedia page lists.
- `tests/grid.test.ts` checks the filter bar of the page.

## The "Done when" list of the spec

| Item | State |
| --- | --- |
| 1. One tile per Tusker name, in rows of 3, with scroll | Done. 37 tiles. The 3 ACPedia names without a retail weenie get no tile: Mini Tusker, Mini Silver Tusker, Mini Tuskie Sprinter. |
| 2. Each filter and each sort works | Done. The search, the level range, the trophy filter and the three sorts. Checked by `tests/grid.test.ts` and by the smoke check. |
| 3. The open tile shows the live 3D model, the variants, both tabs, the armor, the resistances, the Wiki section and the trophies with their chances | Done. Checked by the smoke check of the page: the drag turns the model, a variant changes the model and the panel, the Mudmouth shows 25 spells and 20 trophies. |
| 4. A test checks the hit chance formula | Done. `tests/hit-chance.test.ts`. |
| 5. A test compares the computed defense skills with ACPedia | Done, with a difference. The test pins the computed values of the Male Tusker (93, 110, 63) and the Tusker Guard (357, 401, 244). The ACPedia page gives 83, 76, 63 and 417, 350, 268. The reason is in `docs/defense.md`. |
| 6. Claude reviews the work against the spec and runs `/ponytail-review` | Not done. It is left for the review round. |

## The facts

The facts live in `docs/`, one file per area, with the source of each fact.

- `docs/data.md`: where the data comes from, and how the build reads it.
- `docs/defense.md`: how the page computes a defense skill, and how the values
  compare with ACPedia.

## Notes for the review

- The build reads the weenie data of the AC Emulator, because the emulator is
  the only way to play the game. The ACPedia page is a second source, kept for
  comparison. The two do not always agree, and `docs/defense.md` says where.
- The patch database of the emulator changed the level of some creatures, for
  example The Painbringer from 145 to 135. The page shows the level of the
  emulator.
- The live view of a tile shows the same picture as the still of the tile.
  Both use the retail examine camera and the retail light.
- The trophies come from the create list of the weenie. The chance is the
  `shade` column of the row. The rows with no item are the "nothing" rows that
  complete the chance range.
