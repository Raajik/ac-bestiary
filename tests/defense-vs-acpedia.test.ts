// The defense skills of the retail data against the values ACPedia lists.
//
// The AC Emulator is the source of truth, because the emulator is the only
// way to play the game. The ACPedia page is a second source, saved once. The
// two do not always agree, so the difference is recorded in docs/defense.md.

import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { buildBestiary, type Creature } from '../src/lib/bestiary.js';
import { BASE_ROOT, PATCH_ROOT } from '../src/lib/paths.js';

/** The ACPedia values, as listed on the saved page. */
const ACPEDIA: Record<string, { melee: number; missile: number; magic: number }> = {
  'Male Tusker': { melee: 83, missile: 76, magic: 63 },
  'Tusker Guard': { melee: 417, missile: 350, magic: 268 },
};

/** The defense skills the retail weenie data gives. See docs/defense.md. */
const COMPUTED: Record<string, { melee: number; missile: number; magic: number }> = {
  'Male Tusker': { melee: 93, missile: 110, magic: 63 },
  'Tusker Guard': { melee: 357, missile: 401, magic: 244 },
};

const data = buildBestiary({
  patchRoots: [join(PATCH_ROOT, 'Creature')],
  baseRoots: [join(BASE_ROOT, 'Creature')],
  acpediaPage: process.env.AC_ACPEDIA_PAGE ?? join(process.env.HOME ?? '', 'wiki/raw/acpedia/Tusker.md'),
  portalDat:
    process.env.AC_PORTAL_DAT ?? join(process.env.HOME ?? '', 'Games/AsheronsCall/Client/client_portal.dat'),
});

function creature(name: string): Creature {
  const found = data.creatures.find((c) => c.name === name);
  if (!found) throw new Error(`no creature ${name}`);
  return found;
}

function defaultVariantSkills(name: string) {
  const found = creature(name);
  const variant = found.variants.find((v) => v.classId === found.defaultVariant);
  if (!variant) throw new Error(`no default variant for ${name}`);
  return variant.skills;
}

describe('the defense skills against ACPedia', () => {
  it('computes the defense skills of the retail weenie data', () => {
    for (const [name, expected] of Object.entries(COMPUTED)) {
      const skills = defaultVariantSkills(name);
      expect(skills.meleeDefense, `${name} melee defense`).toBe(expected.melee);
      expect(skills.missileDefense, `${name} missile defense`).toBe(expected.missile);
      expect(skills.magicDefense, `${name} magic defense`).toBe(expected.magic);
    }
  });

  it('keeps the ACPedia values the page shows', () => {
    for (const [name, expected] of Object.entries(ACPEDIA)) {
      expect(creature(name).acpediaDefense, name).toEqual(expected);
    }
  });

  it('records every difference in docs/defense.md', () => {
    const doc = readFileSync(join(import.meta.dirname, '..', 'docs', 'defense.md'), 'utf8');

    for (const name of Object.keys(ACPEDIA)) {
      expect(doc, `${name} must be in docs/defense.md`).toContain(name);
    }
  });
});
