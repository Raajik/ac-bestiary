// Build or update the wiki snapshot from the lohk wiki (spec wiki-app.md, "The snapshot").
//
// Run on the LAN: npx tsx tools/wiki-snapshot.ts [seed page ...]
// With no seed pages it takes the first slice. AC_WIKI_API and AC_SNAPSHOT_DIR change where it reads and writes.

import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { SNAPSHOT_DIR, WIKI_API } from '../src/lib/paths.js';
import { openSnapshot, runSnapshot, SLICE_SEEDS } from '../src/lib/snapshot.js';
import { HttpWikiApi } from '../src/lib/wiki-api.js';

const seeds = process.argv.length > 2 ? process.argv.slice(2) : SLICE_SEEDS;
mkdirSync(SNAPSHOT_DIR, { recursive: true });

console.log(`snapshot of ${seeds.join(', ')} from ${WIKI_API} into ${SNAPSHOT_DIR}`);
const started = Date.now();
const result = await runSnapshot(new HttpWikiApi(WIKI_API), openSnapshot(join(SNAPSHOT_DIR, 'wiki.sqlite')), seeds, {
  imagesDir: join(SNAPSHOT_DIR, 'images'),
  log: console.log,
});

console.log(
  `pages: ${result.pages}, fetched: ${result.fetched}, images: ${result.images}, ` +
    `failed: ${result.failed.length}, ${Math.round((Date.now() - started) / 1000)} s`,
);
for (const failure of result.failed) console.log(`  ${failure}`);
process.exitCode = result.failed.length > 0 ? 1 : 0;
