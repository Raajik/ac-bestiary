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
- A redirect can point to another redirect; the snapshot stores each source with its final page. **Verified:**
  `tests/snapshot.test.ts`.
- The snapshot lives in `data/snapshot/` (`wiki.sqlite`, `images/`). Git ignores it; Syncthing shares it.
