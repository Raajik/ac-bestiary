# The AC wiki app: wiki pages with the game's models and stats beside them

The user, 2026-10-31: "my first goal is to figure out a good way to display the same information as the wiki, but in
the ac-bestiary style ... a self-contained wiki application that lets you look up information as well as view things
like in-game assets alongside the wiki information. for example, if i looked up quiddity weapons, i'd love for it to
show the 3d models of said weapons as well as the stats for them as if you were looking them up on the wiki. sort of
a mix between a traditional wiki and something like Wowhead".

Choices the user made the same day:
- **Desktop app**, which reads the game's files from the AC install on that PC.
- **It grows out of ac-bestiary.** The Tusker bestiary becomes the app's creature section. The public GitHub Pages
  bestiary keeps working as it is until the user decides otherwise.
- **First slice: Quiddity Weapons and Tuskers both.**
- **Its own snapshot of the wiki.** It does not read a wiki at run time.

This spec replaces the "source + links" plan of `~/specs/accpp-wiki-lohk.md` Part 2, and the unpushed commit
e6cfed8 that wrote it into `ac-bestiary.md`.

## Sources

- **The wiki:** the ACCPP Wiki copy on lohk (`http://10.0.0.10:8095`, API `http://10.0.0.10:8095/wiki/api.php`;
  `~/specs/accpp-wiki-lohk.md`). It is ACPedia plus the pages only Fandom had. LAN only, MediaWiki 1.41, slow
  (about 1.5 s for each rendered page): read it gently, at build time only.
- **Structured data in the wiki:** item and creature pages keep their facts in templates, for example
  `{{Missile Weapon | Damage Modifier = 113 | Spells = [[Aura of Defender IV]], ... }}` on "Bow of the Quiddity",
  and `{{Creature ...}}`. Template names include Melee Weapon, Missile Weapon, Magic Caster, Armor, Item, Creature, NPC.
- **Game records:** the retail weenies of the ACE world database, as ac-bestiary already reads them
  (`docs/data.md`). A wiki page is matched to its weenies by name, as the bestiary matches Tuskers; same-name
  weenies are variants.
- **Models, icons, tables:** the client files of the AC install on the user's PC (`client_portal.dat` and the rest),
  read at run time with the vendored asheron-web DAT reader and renderer.

## The snapshot (a build step, run on the LAN)

- `tools/wiki-snapshot` reads the wiki through its API and writes one SQLite file plus an images folder:
  - for each page: title, redirects, categories, the rendered HTML of the body (MediaWiki renders templates; the app
    does not reimplement wikitext), the raw wikitext, and the parameters of each known infobox template as JSON;
  - the images the snapshot's pages use;
  - a full-text index (SQLite FTS5) over titles and text.
- First slice: the pages of the two slices and the pages they link to one step away (spells, quests, NPCs). The
  whole wiki is a later run of the same tool (about 30,000 articles; at 1.5 s each, run it overnight with at most
  2 requests at a time).
  - The tool starts from seed pages (the slice: Quiddity Weapons, Tusker). It follows the article links of a seed,
    and the links of a linked page only when that page holds an item or creature template. So it takes the set's
    items and the family's creatures, and the spells, quests and NPCs they link to, and stops there.
- A rerun updates changed pages only (by revision id): it asks the wiki for the current revision ids (a light query,
  50 titles a call), and it fetches no page and no image it already has at that revision.
- The tests run the tool against one shared fake of the wiki API that serves replies recorded from the lohk wiki
  (`tests/fixtures/wiki/`). They never call the LAN.
- The rendered HTML is untrusted input: the app strips scripts, event handlers and outside URLs before showing it,
  and rewrites wiki links to app links.

## The app

- **Shell:** Tauri 2 (user, 2026-10-31: chosen over Electron). The pages stay the existing Vite and TypeScript code
  in Tauri's webview. The Rust side opens the snapshot's SQLite file and serves the app's file reads (the AC install,
  the images); it does not reimplement the DAT reader, which stays the vendored TypeScript one.
  - Risk: on Linux the webview is WebKitGTK, whose WebGL is weaker than Chromium's. **The first step is a spike:** the
    bestiary's open view (one Tusker, turning and animating) in a bare Tauri window on zahir. If it fails or runs
    badly, stop and report to Wren before building more. On Windows the webview is WebView2 (Chromium).
- **First run:** asks for the AC install folder, checks `client_portal.dat` is there, and remembers it.
- **Search:** one box, titles first, then full text, from the snapshot.
- **A page:** the wiki's text in the app's own AC style (the bestiary's dark panels and retail fonts), with, beside it:
  - **an item page** (a page with a weapon, armor or item template): its 3D model you can turn, its icon, and its
    stats as the in-game appraisal panel, from the template's values. Where the weenie gives a value too, the panel
    shows the weenie's and marks a difference;
  - **a creature page:** the bestiary's open view (model with its motions, the appraisal panel, the hit-chance numbers);
  - **a set or list page** (such as Quiddity Weapons): its tables, with each linked item drawn as its icon, and a grid
    of the items' models like the bestiary's grid;
  - any other page: the text only.
- Credits: the ACCPP Wiki, ACPedia and Fandom contributors, and the ACE World project. The app does not ship the
  game's files; it reads the user's install.

## First slice: done when

- `tools/wiki-snapshot` builds the slice's snapshot from the lohk wiki, and a rerun with nothing changed fetches
  nothing new.
- The app starts on Linux (zahir) and Windows, finds the AC install, and searching "quiddity" lists Quiddity Weapons.
- Quiddity Weapons shows its table with icons and a model grid; Bow of the Quiddity shows its model, its appraisal
  panel with the template's stats (Damage Modifier 113, Speed Slow (50), Range 75, its three spells) and its notes.
- Tusker shows the wiki's text with the creature grid; each Tusker opens the bestiary's view.
- Tests: the template parameter parser, the page-to-weenie matching (variants), the HTML sanitizer (scripts,
  handlers and outside URLs removed, wiki links rewritten), and the snapshot's rerun rule.

## Later

- The whole wiki in the snapshot; more page kinds (quests, NPCs, spells).
- Comparing wiki and weenie values across all items, and a list of the differences.
- A public version: only after a licensing check of the wiki text and of showing the game's models.
