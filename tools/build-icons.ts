// Write the trophy icons of the page.
//
// Run: npx tsx tools/build-icons.ts

import { join } from 'node:path';

import { buildIcons } from '../src/lib/icons.js';
import { DIST_DIR, PORTAL_DAT } from '../src/lib/paths.js';

const count = buildIcons(join(DIST_DIR, 'data.json'), PORTAL_DAT, DIST_DIR);
console.log(`icons: ${count}`);
console.log(`wrote ${join(DIST_DIR, 'icons')}`);
