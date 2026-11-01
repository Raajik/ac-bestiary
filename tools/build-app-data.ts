// Write the game records the wiki app shows into the snapshot (spec wiki-app.md, "Game records in the snapshot").
//
// It needs the retail weenie SQL and client_portal.dat, like the bestiary build, the bestiary's dist/data.json
// (npm run build:data), and the snapshot that tools/wiki-snapshot.ts made. Run: npx tsx tools/build-app-data.ts

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { defaultSources } from '../src/lib/bestiary.js';
import { openPortalDat, readDatFacts } from '../src/lib/dat-facts.js';
import { itemVariant, matchKey, matchWeenies, type ItemRecord } from '../src/lib/game-records.js';
import { DIST_DIR, SNAPSHOT_DIR } from '../src/lib/paths.js';
import { openSnapshot, resetGameRecords } from '../src/lib/snapshot.js';
import type { BestiaryData } from '../src/lib/types.js';
import { readWeenie, type WeenieData } from '../src/lib/weenie.js';
import { indexWeenies } from '../src/lib/weenie-index.js';
import { INFOBOX_KINDS, type Infobox } from '../src/lib/wikitext.js';

const sources = defaultSources();
const db = openSnapshot(join(SNAPSHOT_DIR, 'wiki.sqlite'));
resetGameRecords(db);

// Every retail weenie by name. A patch file wins over the base file of the same class.
const paths = indexWeenies(sources.baseRoots);
for (const [id, path] of indexWeenies(sources.patchRoots)) paths.set(id, path);
const byName = new Map<string, WeenieData[]>();
for (const path of paths.values()) {
  const weenie = readWeenie(path);
  if (!weenie.name) continue;
  const key = matchKey(weenie.name);
  byName.set(key, [...(byName.get(key) ?? []), weenie]);
}
console.log(`weenies: ${paths.size}`);

const facts = readDatFacts(openPortalDat(sources.portalDat));
const spellName = (id: number) => facts.spells.get(id)?.name ?? `Spell ${id}`;

const pages = db.prepare('select title, infoboxes from pages').all() as { title: string; infoboxes: string }[];
const putItem = db.prepare('insert into items (title, data) values (?, ?)');
let items = 0;
const unmatched: string[] = [];
for (const page of pages) {
  const box = (JSON.parse(page.infoboxes) as Infobox[]).find((b) => INFOBOX_KINDS[b.template] === 'item');
  if (!box) continue;
  const weenies = matchWeenies([page.title, box.params.Name ?? ''].filter(Boolean), byName, 'item');
  if (weenies.length === 0) {
    unmatched.push(page.title);
    continue;
  }
  const record: ItemRecord = { title: page.title, variants: weenies.map((w) => itemVariant(w, spellName)) };
  putItem.run(page.title, JSON.stringify(record));
  items++;
}
console.log(`item pages with weenies: ${items}; without: ${unmatched.join(', ') || 'none'}`);

// The creature records are the bestiary build's, so a creature page shows the same view as the Tusker page.
const bestiary = JSON.parse(readFileSync(join(DIST_DIR, 'data.json'), 'utf8')) as BestiaryData;
const creaturePages = new Set(
  pages.filter((p) => (JSON.parse(p.infoboxes) as Infobox[]).some((b) => INFOBOX_KINDS[b.template] === 'creature')).map((p) => p.title),
);
const putCreature = db.prepare('insert into creatures (title, data) values (?, ?)');
let creatures = 0;
for (const creature of bestiary.creatures) {
  if (!creaturePages.has(creature.name)) continue;
  putCreature.run(creature.name, JSON.stringify(creature));
  creatures++;
}
console.log(`creature pages with records: ${creatures} of ${creaturePages.size}`);
