// The filter bar of the page.
//
// The filters work on the tiles, so the tests use the same functions the page
// uses.

import { describe, expect, it } from 'vitest';

import { defaultVariant, visibleCreatures, type GridState } from '../src/page/grid.js';
import type { Creature, Variant } from '../src/lib/types.js';

function variant(classId: number, level: number, health = 100, trophies = 0): Variant {
  return {
    classId,
    name: 'Test',
    level,
    health,
    stamina: 100,
    mana: 20,
    xp: 1000,
    setup: 0,
    motionTable: 0,
    palette: 0,
    clothing: 0,
    paletteTemplate: 0,
    shade: 0,
    attributes: {},
    skills: {},
    skillNames: {},
    armorLevel: 0,
    resistances: {},
    spells: [],
    trophies: Array.from({ length: trophies }, (_, i) => ({
      classId: i,
      name: `Trophy ${i}`,
      chance: 0.5,
      icon: null,
      acpedia: '',
    })),
  };
}

function creature(name: string, variants: Variant[]): Creature {
  return {
    name,
    acpedia: '',
    subclassed: false,
    acpediaLevel: null,
    acpediaXp: null,
    acpediaHealth: null,
    acpediaLoot: null,
    acpediaDefense: { melee: null, missile: null, magic: null },
    defaultVariant: variants[0].classId,
    variants,
  };
}

const state = (over: Partial<GridState> = {}): GridState => ({
  search: '',
  minLevel: null,
  maxLevel: null,
  trophyOnly: false,
  sort: 'level',
  ...over,
});

const tusker = creature('Tusker Guard', [variant(1, 80, 260), variant(2, 90, 300)]);
const rampager = creature('Rampager', [variant(3, 100, 425, 2), variant(4, 95, 425)]);
const tuskies = creature('Tuskie Tosser', [variant(5, 18, 40)]);
const creatures = [tusker, rampager, tuskies];

describe('the filter bar', () => {
  it('keeps every creature without a filter, in the order of the level', () => {
    expect(visibleCreatures(creatures, state()).map((c) => c.name)).toEqual([
      'Tuskie Tosser',
      'Tusker Guard',
      'Rampager',
    ]);
  });

  it('searches the name', () => {
    expect(visibleCreatures(creatures, state({ search: 'ramp' })).map((c) => c.name)).toEqual([
      'Rampager',
    ]);
    expect(visibleCreatures(creatures, state({ search: 'RAMP' })).map((c) => c.name)).toEqual([
      'Rampager',
    ]);
    expect(visibleCreatures(creatures, state({ search: 'nothing' }))).toEqual([]);
  });

  it('keeps a creature when any of its variants is in the level range', () => {
    // The Rampager has a variant at 95 and the Tusker Guard one at 90, so the
    // range 90 to 95 keeps both.
    expect(visibleCreatures(creatures, state({ minLevel: 90, maxLevel: 95 })).map((c) => c.name)).toEqual([
      'Tusker Guard',
      'Rampager',
    ]);
    // The range 96 and up keeps only the Rampager, because of its variant at 100.
    expect(visibleCreatures(creatures, state({ minLevel: 96 })).map((c) => c.name)).toEqual(['Rampager']);
    expect(visibleCreatures(creatures, state({ maxLevel: 19 })).map((c) => c.name)).toEqual([
      'Tuskie Tosser',
    ]);
  });

  it('keeps a creature when any of its variants drops a trophy', () => {
    expect(visibleCreatures(creatures, state({ trophyOnly: true })).map((c) => c.name)).toEqual([
      'Rampager',
    ]);
  });

  it('sorts by level, name and health', () => {
    expect(visibleCreatures(creatures, state({ sort: 'level' })).map((c) => c.name)).toEqual([
      'Tuskie Tosser',
      'Tusker Guard',
      'Rampager',
    ]);
    expect(visibleCreatures(creatures, state({ sort: 'name' })).map((c) => c.name)).toEqual([
      'Rampager',
      'Tusker Guard',
      'Tuskie Tosser',
    ]);
    expect(visibleCreatures(creatures, state({ sort: 'health' })).map((c) => c.name)).toEqual([
      'Rampager',
      'Tusker Guard',
      'Tuskie Tosser',
    ]);
  });

  it('shows the default variant of a creature', () => {
    expect(defaultVariant(tusker).classId).toBe(1);
    expect(defaultVariant(rampager).classId).toBe(3);
  });
});
