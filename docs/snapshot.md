# The wiki snapshot

Facts about the ACCPP Wiki on lohk as `tools/wiki-snapshot.ts` reads it (spec: `specs/wiki-app.md`, "The snapshot").

## The wiki's API

- The API is at `http://10.0.0.10:8095/wiki/api.php` (note `/wiki/`). It is MediaWiki 1.41.0. **Observed:**
  `action=query&meta=siteinfo`, 2026-10-31.
- One `action=parse` call with `prop=text|wikitext|links|images|categories|revid` gives all a page needs: the
  rendered HTML, the raw wikitext, the links (each with `ns` and `exists`), the file names of its images (with `_`
  for spaces) and its revision id. **Observed:** recorded replies in `tests/fixtures/wiki/`.
- `action=query&prop=info&redirects=1` gives each title's `lastrevid` and the redirects (such as "Aura of Defender
  IV" to "Defender (Spell)"). `prop=imageinfo&iiprop=url` gives an image's URL under `/wiki/images/`. **Observed:**
  the same fixture.
- Item and creature facts sit in templates: Missile Weapon, Melee Weapon, Magic Caster (Eye of the Quiddity),
  Armor, Item, Creature (Tusker Guard), NPC (Crafter of Bows). **Observed:** `prop=templates` of those pages.
- A template name matches with its first letter in either case and `_` for space, but the rest is case sensitive:
  `{{Missile weapon}}` is another template. **Observed:** MediaWiki title rules; **Verified:** `tests/wikitext.test.ts`.

## The slice's snapshot

- The first run from the seeds Quiddity Weapons and Tusker took 304 pages and 5,554 images in 333 s, with 2
  requests at a time: 13 MB of SQLite and 122 MB of images. Many images come from spell tables and maps on the
  linked pages. **Observed:** `npm run snapshot` on zahir, 2026-10-31.
- A rerun with nothing changed fetched no page and no image, in 7 s: it asks for the revision ids and the images'
  sha1 (`prop=imageinfo&iiprop=url|sha1`, 50 to a call) and downloads only what differs. **Observed:** the same,
  run twice; **Verified:** `tests/snapshot.test.ts`.
- A page the wiki reports missing is dropped with its search row and the redirects to it; the crawl asks for red
  links too, so a page deleted since the last run is found missing; an image whose file is gone is fetched again;
  a page and its search row are written in one transaction. **Verified:** `tests/snapshot.test.ts`.
- A redirect can point to another redirect; the snapshot stores each source with its final page. **Verified:**
  `tests/snapshot.test.ts`.
- The snapshot lives in `data/snapshot/` (`wiki.sqlite`, `images/`). Git ignores it; Syncthing shares it.

## The game records

- `tools/build-app-data.ts` reads 43,916 retail weenies (patch files over base files). In the slice's snapshot,
  59 item pages match weenies by name; one, "Tusker (Town Network Painting)", has none. 37 of the 49 creature pages
  have a bestiary record (the Tusker family). **Observed:** a run on zahir, 2026-10-31, in 10 s.
- "Bow of the Quiddity" matches one weenie, 9597; "Chimeric Bow of the Quiddity" (36381) is another name, so no
  variant. **Observed:** the ACE patch SQL under `MissileLauncher/MissileWeapon/`.
- The weenie's values in the wiki's form: Damage Modifier is `(DamageMod − 1) × 100` (2.13 gives 113), Speed is
  WeaponTime (int 49; int 48 is the weapon skill), a bonus to attack or defense is `(multiplier − 1) × 100`, and a
  melee damage range is `max × (1 − variance)` to `max` (18 and 0.5 give "9 - 18", as on Axe of the Quiddity).
  **Verified:** `tests/game-records.test.ts`, against the Bow's and the Axe's template and weenie values.
- The game names self spells "Aura of Defender Self IV" where the wiki writes "Aura of Defender IV", so the panel
  compares the spell names without "Self" and a leading "Aura of" (older pages, such as Blade of the Quiddity,
  write "Defender IV"), in any order. Enhanced Fist of the Quiddity's template lists Heart
  Seeker V where its weenie has VI. **Observed:** 09597's spell book and the Bow's template; the Codex review.
  **Verified:** `tests/game-records.test.ts`.
- A melee damage minimum keeps its fraction: Dagger of the Quiddity's 22 with variance 0.6 is "8.8 - 22" on the
  wiki. **Observed:** the Codex review, from the snapshot. **Verified:** `tests/game-records.test.ts`.
