// The hit chance formula, from the AC Emulator.
//
// ACE.Server/WorldObjects/SkillCheck.cs:
//
//   chance(skill, difficulty, factor) = 1 - 1 / (1 + exp(factor * (skill - difficulty)))
//
// Melee and missile use factor 0.03, magic uses factor 0.07.

export const MELEE_FACTOR = 0.03;
export const MAGIC_FACTOR = 0.07;

/** The chance that `skill` beats `difficulty`. */
export function chance(skill: number, difficulty: number, factor: number = MELEE_FACTOR): number {
  const value = 1 - 1 / (1 + Math.exp(factor * (skill - difficulty)));
  return Math.min(1, Math.max(0, value));
}

/**
 * The skill needed to get the given chance against the other skill.
 *
 * From the formula: skill = other + ln(p / (1 - p)) / factor.
 * For 50% the skill equals the other skill. For 90% it is about +73 with
 * factor 0.03 and about +31 with factor 0.07.
 */
export function skillForChance(other: number, p: number, factor: number = MELEE_FACTOR): number {
  const logOdds = Math.log(p / (1 - p));
  return other + logOdds / factor;
}

/** The chance the formula gives for a 50% and a 90% target, in one call. */
export function skillTargets(other: number, factor: number = MELEE_FACTOR): { even: number; high: number } {
  return {
    even: Math.round(skillForChance(other, 0.5, factor)),
    high: Math.round(skillForChance(other, 0.9, factor)),
  };
}
