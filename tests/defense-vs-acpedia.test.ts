// The defense skills of the retail data against the values ACPedia lists.
//
// The AC Emulator is the source of truth, because the emulator is the only
// way to play the game. The ACPedia page is a second source, saved once. The
// two do not always agree, so the difference is recorded in docs/defense.md.
//
// The suite reads outside inputs. When one is missing it skips, and the reason
// names tools/fetch-refs.sh (spec: "Tests and tools"). On CI it fails instead,
// so a broken input fetch is caught there.

import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { buildBestiary } from '../src/lib/bestiary.js';
import type { BestiaryData, Creature } from '../src/lib/types.js';
import { ACPEDIA_PAGE, BASE_ROOT, PATCH_ROOT, PORTAL_DAT } from '../src/lib/paths.js';

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

const INPUTS = [
  { what: 'the patch weenie SQL', path: join(PATCH_ROOT, 'Creature') },
  { what: 'the base weenie SQL', path: join(BASE_ROOT, 'Creature') },
  { what: 'the saved ACPedia page', path: ACPEDIA_PAGE },
  { what: 'the retail client data', path: PORTAL_DAT },
];

const missing = INPUTS.filter((input) => !existsSync(input.path));
const ci = (process.env.CI ?? '') !== '' && process.env.CI !== '0';

if (missing.length > 0 && ci) {
  throw new Error(
    `CI is set and these inputs are missing: ${missing.map((m) => m.what).join(', ')}. ` +
      'Run tools/fetch-refs.sh, or point AC_PATCH_ROOT, AC_BASE_ROOT, AC_ACPEDIA_PAGE and AC_PORTAL_DAT at them.',
  );
}

const skipReason =
  missing.length > 0
    ? `skipped: missing ${missing.map((m) => m.what).join(', ')}; run tools/fetch-refs.sh`
    : '';

if (skipReason) console.warn(`defense test ${skipReason}`);

/** Built on first use, so a missing input skips the suite and does not throw at load. */
let built: BestiaryData | undefined;
function data(): BestiaryData {
  built ??= buildBestiary({
    patchRoots: [join(PATCH_ROOT, 'Creature')],
    baseRoots: [join(BASE_ROOT, 'Creature')],
    acpediaPage: ACPEDIA_PAGE,
    portalDat: PORTAL_DAT,
  });
  return built;
}

function creature(name: string): Creature {
  const found = data().creatures.find((c) => c.name === name);
  if (!found) throw new Error(`no creature ${name}`);
  return found;
}

function defaultVariantSkills(name: string) {
  const found = creature(name);
  const variant = found.variants.find((v) => v.classId === found.defaultVariant);
  if (!variant) throw new Error(`no default variant for ${name}`);
  return variant.skills;
}

describe.skipIf(missing.length > 0)(
  `the defense skills against ACPedia${skipReason ? ` (${skipReason})` : ''}`,
  () => {
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
  },
);
