// Build the whole site into dist/.
//
// The steps are:
//   1. the creature data from the retail weenie SQL and the saved ACPedia page,
//   2. the trophy icons from the retail client data,
//   3. the still images of the tiles, and the model bundle,
//   4. the page itself.
//
// Run: npx tsx tools/build.ts

import { join } from 'node:path';
import { build as viteBuild } from 'vite';

import { buildBestiary, defaultSources, writeBestiary } from '../src/lib/bestiary.js';
import { buildIcons } from '../src/lib/icons.js';
import { DIST_DIR, PORTAL_DAT } from '../src/lib/paths.js';
import { buildStills } from '../src/lib/stills.js';

const sources = defaultSources();

console.log('1. the creature data');
const data = buildBestiary(sources);
const variants = data.creatures.reduce((count, creature) => count + creature.variants.length, 0);
console.log(`   creatures: ${data.creatures.length}, variants: ${variants}`);
console.log(`   no retail weenie: ${data.missing.join(', ') || 'none'}`);
const dataPath = writeBestiary(data);

console.log('2. the trophy icons');
const icons = buildIcons(dataPath, PORTAL_DAT, DIST_DIR);
console.log(`   icons: ${icons}`);

console.log('3. the still images');
const stills = await buildStills(
  dataPath,
  PORTAL_DAT,
  DIST_DIR,
  join(import.meta.dirname, '..', 'src'),
);
console.log(`   stills: ${stills.count}, bundle: ${stills.bundleFiles} files`);

console.log('4. the page');
await viteBuild({ configFile: join(import.meta.dirname, '..', 'vite.config.ts') });

console.log(`done: ${DIST_DIR}`);
