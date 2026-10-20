# ac-bestiary: an interactive Asheron's Call creature page

Prototype page: the Tusker family. Each Tusker type gets a tile with its in-game model. Opening a tile shows
its stats as an in-game appraisal panel. Design agreed with the user on 2026-10-20 in a grilling round.

## Goal

A player can find a Tusker type fast and see the defense they need against it. The player can also see
the attack they need to hit it, and what it drops.

## Data sources

- **Stats**: retail weenie SQL from `ACEmulator/ACE-World-16PY-Patches`. A sparse clone is at
  `~/Projects/asherons-call/_refs/ACE-World-16PY-Patches`. Tusker weenies are in
  `Database/Patches/9 WeenieDefaults/Creature/Tusker/`. Some names on the list are in other `Creature/` folders.
  Use `git sparse-checkout add` to get them.
- **Type list, descriptions, links**: the ACPedia Tusker page, saved one time at `~/wiki/raw/acpedia/Tusker.md`.
  Use the "Stats" table only. Do not fetch acpedia.org again. A community friend pays to host it.
- **Models and icons**: `~/Games/AsheronsCall/Client/client_portal.dat` (and `client_cell_1.dat` if needed).
- **Renderer and DAT reader**: the files of `~/Projects/asheron-web` (`packages/dat-parser`, `packages/renderer`,
  `packages/shared`) that ac-bestiary reaches are copied to `vendor/asheron-web/`, unchanged, with asheron-web's
  LICENSE and NOTICE. asheron-web is AGPL-3.0, so ac-bestiary is AGPL-3.0 too. The repo `Raajik/ac-bestiary` is
  public and the page footer links to it, because the public page ships this code and the AGPL asks that its full
  source is available (user, 2026-10-20). asheron-web itself stays private. To update the copy, run
  `tools/vendor.sh` (it copies the same file list again from asheron-web).
- Credit ACPedia and the ACE World project on the page.

## Scope rules

- One tile for each name in the ACPedia "Stats" and "Subclassed" tables that has a retail weenie. Imp and
  Mudmouth (Subclassed) are Tuskers too (user, 2026-10-20). Their weenies are not in `Creature/Tusker/`.
- Weenies with the same name are **variants** of one tile (user, 2026-10-20). For example, "Rampager" has 4.
  The default variant is the one whose level matches the ACPedia table. If none matches, use the lowest level.
- The tile and the sort use the default variant. The level range and the "drops trophy" filters keep a tile
  if any of its variants matches.
- A name with no retail weenie gets no tile. The build prints a list of these names.

## Page

### Grid

- Tiles in rows of 3. The first screen shows 2 rows. More rows show when you scroll.
- Each tile shows a still render of the model: idle pose, camera at a three-quarter front angle, clear
  background over a dark tile. Below the render: name and level.
- Make the stills at build time from the DAT. Do not make a WebGL scene for each tile.

### Filter bar

- Text search on name.
- Level range (min and max).
- A "drops trophy" toggle.
- Sort: level, name, Health.

### Open tile

- A live 3D view of the model. You can turn it with drag: a drag to the right turns the model's front to the right.
- **Animation** (user, 2026-10-20): when the tile opens, the model plays its idle (ready stance) animation in a loop,
  from the creature's motion table in the DAT. Drag still turns it while it plays.
- Below the model, one button for each of these motions the motion table has: Walk, Run, Attack, Death. A button
  plays that motion once, then the model returns to idle. Death stays down for 3 seconds before it stands up. A
  motion the table does not have gets no button.
- The camera frames the idle pose with room around it, so the arms of an attack and the fall of a death stay in view.
- The grid tiles stay still images. They do not animate. Each still shows the first frame of the idle, so a tile
  and its open view show the same pose.
- An appraisal panel, built in CSS with retail colors and fonts. It shows the name, level, and Health, Stamina
  and Mana bars. It has two tabs:
  - **Attributes**: Strength, Endurance, Coordination, Quickness, Focus, Self.
  - **Skills**: only the skills the weenie has, as current values (base from attributes plus the weenie's own
    value). Two groups:
    - Attack: Melee (the weapon skill it uses), Missile, War Magic, Void Magic, Life Magic, Creature Magic.
      Life Magic covers harm and drain spells, Hecatomb, Imperil and the vulnerabilities. Creature Magic
      covers debuffs such as Weakness and Clumsiness.
    - Defense: Melee Defense, Missile Defense, Magic Defense.
    - Each attack skill shows the defense you need for 50% and 90% evade or resist. Each defense skill shows
      the attack you need for 50% and 90% hit. See "Hit-chance formula".
    - Spells the weenie casts go below their magic skill, each with a link to its ACPedia page.
- If the tile has more than one variant, a **Variants** section lists each one: level, Health and weenie class
  id. Click a variant to show its model and stats in the panel.
- Below the tabs, always shown:
  - Armor level and the resistance for each damage type (Slash, Pierce, Bludgeon, Fire, Cold, Acid, Electric,
    and Nether if set).
  - A "Wiki" section in a different color, for data the retail panel does not show: XP award, spawn places
    (if the data has them), a link to the ACPedia page.
  - Trophies: icon from the DAT, name, drop chance from the weenie's death treasure list, link to its ACPedia
    page.

### Theme

- Dark only for now. Put all colors in CSS variables on `:root`, so a light mode is easy to add later.

## Hit-chance formula

From ACE `ACE.Server/WorldObjects/SkillCheck.cs`:

```
chance(skill, difficulty, factor) = 1 - 1 / (1 + exp(factor * (skill - difficulty)))
```

- Melee and missile: factor 0.03. Evade chance = chance(your defense, their attack).
- Magic: factor 0.07. Resist chance = chance(your Magic Defense, their magic skill).
- So the skill you need for chance p is `other + ln(p / (1 - p)) / factor`. For 50% it equals the other skill.
  For 90% it is about +73 (melee, missile) or about +31 (magic).

## Build and output

- One build command makes a static site in `dist/`: HTML, JS, CSS, a JSON data file, the still images and
  the icons. View it locally with any static file server.
- `npm run deploy` builds the site and publishes `dist/` to the `gh-pages` branch of the public repo
  `Raajik/ac-bestiary`. GitHub Pages serves it publicly at https://raajik.github.io/ac-bestiary/. The user chose
  public hosting on 2026-10-20, knowing the page shows models, renders and icons from the game DAT. The build needs the DAT and the ACE data on the box, so it runs locally, not in CI.
- Keep it small. Add no framework or dependency that asheron-web or the platform already gives.

## Done when

1. The page shows one tile for each Tusker name from the scope rules, in rows of 3, with scroll for more.
2. Each filter and each sort works.
3. Opening a tile shows the live 3D model playing its idle loop, the motion buttons, the variants, both tabs, armor, resistances, the Wiki section and trophies with
   drop chances.
4. A test checks the hit-chance formula: equal skills give 50%, and +73 (factor 0.03) gives about 90%.
5. A test compares computed defense skills to ACPedia (Observed): Male Tusker Melee/Missile/Magic Defense
   83/76/63, and Tusker Guard 417/350/268. If a value does not match, record why in `docs/`.
6. Claude reviews the work against this spec and runs `/ponytail-review`.

## Later (not in this prototype)

- Light mode. Real UI textures from the DAT. Weakness and damage-type filters. A page for each trophy.
  Valheel custom content as a second data set. Other creature families.
