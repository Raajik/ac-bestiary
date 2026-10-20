// Build the creature data of the bestiary page.
//
// Run: npx tsx tools/build-data.ts

import { buildBestiary, defaultSources, writeBestiary } from '../src/lib/bestiary.js';

const sources = defaultSources();
const data = buildBestiary(sources);

const variants = data.creatures.reduce((count, creature) => count + creature.variants.length, 0);

console.log(`creatures: ${data.creatures.length}, variants: ${variants}`);
console.log(`no retail weenie: ${data.missing.join(', ') || 'none'}`);
console.log(`wrote ${writeBestiary(data)}`);
