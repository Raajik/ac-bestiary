// Render the still images of the tiles from the retail client data.
//
// Run: npx tsx tools/build-stills.ts

import { join } from 'node:path';

import { DIST_DIR, PORTAL_DAT } from '../src/lib/paths.js';
import { buildStills } from '../src/lib/stills.js';

const result = await buildStills(
  join(DIST_DIR, 'data.json'),
  PORTAL_DAT,
  DIST_DIR,
  join(import.meta.dirname, '..', 'src'),
);

console.log(`bundle: ${result.bundleFiles} files, ${(result.bundleBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`stills: ${result.count} in ${join(DIST_DIR, 'stills')}`);
