// The hit chance formula of the AC Emulator.
//
// The formula comes from ACE.Server/WorldObjects/SkillCheck.cs:
//   chance(skill, difficulty, factor) = 1 - 1 / (1 + exp(factor * (skill - difficulty)))

import { describe, expect, it } from 'vitest';
import { chance, MAGIC_FACTOR, MELEE_FACTOR, skillForChance } from '../src/lib/hit-chance.js';

describe('the hit chance formula', () => {
  it('gives 50% for equal skills', () => {
    expect(chance(100, 100)).toBeCloseTo(0.5, 10);
    expect(chance(0, 0)).toBeCloseTo(0.5, 10);
    expect(chance(500, 500, MAGIC_FACTOR)).toBeCloseTo(0.5, 10);
  });

  it('gives about 90% for 73 more skill with factor 0.03', () => {
    expect(chance(173, 100)).toBeCloseTo(0.9, 2);
    expect(chance(73, 0)).toBeCloseTo(0.9, 2);
  });

  it('gives about 90% for 31 more skill with factor 0.07', () => {
    expect(chance(131, 100, MAGIC_FACTOR)).toBeCloseTo(0.9, 2);
  });

  it('gives the same chance from the other side', () => {
    // A defense of 100 against an attack of 100 evades 50% of the time.
    expect(1 - chance(100, 100)).toBeCloseTo(0.5, 10);
  });

  it('rises with the skill and falls with the difficulty', () => {
    expect(chance(200, 100)).toBeGreaterThan(chance(100, 100));
    expect(chance(100, 200)).toBeLessThan(chance(100, 100));
  });

  it('gives the skill needed for a chance', () => {
    // For 50% the skill equals the other skill.
    expect(skillForChance(100, 0.5, MELEE_FACTOR)).toBeCloseTo(100, 10);
    // For 90% it is about +73 with factor 0.03.
    expect(skillForChance(100, 0.9, MELEE_FACTOR)).toBeCloseTo(173, 0);
    // And about +31 with factor 0.07.
    expect(skillForChance(100, 0.9, MAGIC_FACTOR)).toBeCloseTo(131, 0);
  });

  it('keeps the chance inside 0 and 1', () => {
    expect(chance(-1000, 1000)).toBe(0);
    expect(chance(1000, -1000)).toBe(1);
  });
});
