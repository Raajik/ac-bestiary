// Property and enum ids from the AC Emulator.
//
// The ids come from ACE.Entity.Enum (ACE.Server, the emulator that can play the
// game). The weenie SQL uses these ids for every property, so the build needs
// them to read the retail data.
//
// Sources:
//   ACE.Entity/Enum/Skill.cs
//   ACE.Entity/Enum/Properties/PropertyAttribute.cs
//   ACE.Entity/Enum/Properties/PropertyInt.cs
//   ACE.Entity/Enum/Properties/PropertyDataId.cs
//   ACE.Entity/Enum/Properties/PropertyFloat.cs

/** ACE Skill enum, by id. */
export const SKILL_NAMES: Record<number, string> = {
  1: 'Axe',
  2: 'Bow',
  3: 'Crossbow',
  4: 'Dagger',
  5: 'Mace',
  6: 'Melee Defense',
  7: 'Missile Defense',
  8: 'Sling',
  9: 'Spear',
  10: 'Staff',
  11: 'Sword',
  12: 'Thrown Weapon',
  13: 'Unarmed Combat',
  14: 'Arcane Lore',
  15: 'Magic Defense',
  16: 'Mana Conversion',
  17: 'Spellcraft',
  18: 'Item Tinkering',
  19: 'Assess Person',
  20: 'Deception',
  21: 'Healing',
  22: 'Jump',
  23: 'Lockpick',
  24: 'Run',
  25: 'Awareness',
  26: 'Arms and Armor Repair',
  27: 'Assess Creature',
  28: 'Weapon Tinkering',
  29: 'Armor Tinkering',
  30: 'Magic Item Tinkering',
  31: 'Creature Enchantment',
  32: 'Item Enchantment',
  33: 'Life Magic',
  34: 'War Magic',
  35: 'Leadership',
  36: 'Loyalty',
  37: 'Fletching',
  38: 'Alchemy',
  39: 'Cooking',
  40: 'Salvaging',
  41: 'Two Handed Combat',
  42: 'Gearcraft',
  43: 'Void Magic',
  44: 'Heavy Weapons',
  45: 'Light Weapons',
  46: 'Finesse Weapons',
  47: 'Missile Weapons',
  48: 'Shield',
  49: 'Dual Wield',
  50: 'Recklessness',
  51: 'Sneak Attack',
  52: 'Dirty Fighting',
  53: 'Challenge',
  54: 'Summoning',
};

/** Skill ids the build shows in the Attack group of the Skills tab. */
export const SKILL_LIGHT_WEAPONS = 45;
export const SKILL_HEAVY_WEAPONS = 44;
export const SKILL_TWO_HANDED = 41;
export const SKILL_FINESSE = 46;
export const SKILL_MISSILE_WEAPONS = 47;
export const SKILL_LIFE_MAGIC = 33;
export const SKILL_WAR_MAGIC = 34;
export const SKILL_VOID_MAGIC = 43;
export const SKILL_CREATURE_ENCHANTMENT = 31;
export const SKILL_MELEE_DEFENSE = 6;
export const SKILL_MISSILE_DEFENSE = 7;
export const SKILL_MAGIC_DEFENSE = 15;

/** Attribute ids (ACE PropertyAttribute). */
export const ATTRIBUTE_NAMES: Record<number, string> = {
  1: 'Strength',
  2: 'Endurance',
  3: 'Quickness',
  4: 'Coordination',
  5: 'Focus',
  6: 'Self',
};


/** PropertyInt ids the build reads. */
export const INT_PALETTE_TEMPLATE = 3;
export const INT_WEAPON_SKILL = 48;
export const INT_LEVEL = 25;
export const INT_XP_OVERRIDE = 146;

/** PropertyDataId ids the build reads. */
export const DID_SETUP = 1;
export const DID_MOTION_TABLE = 2;
export const DID_PALETTE_BASE = 6;
export const DID_CLOTHING_BASE = 7;
export const DID_ICON = 8;

/** PropertyFloat ids the build reads. */
export const FLOAT_SHADE = 12;

export const FLOAT_RESIST = {
  slash: 64,
  pierce: 65,
  bludgeon: 66,
  fire: 67,
  cold: 68,
  acid: 69,
  electric: 70,
  nether: 166,
  healthBoost: 71,
  staminaDrain: 72,
  staminaBoost: 73,
  manaDrain: 74,
  manaBoost: 75,
  healthDrain: 125,
} as const;


/** ACE MagicSchool ids (dat-parser SpellTable). */
export const MAGIC_SCHOOL_NAMES: Record<number, string> = {
  1: 'War Magic',
  2: 'Life Magic',
  3: 'Item Enchantment',
  4: 'Creature Magic',
  5: 'Void Magic',
};
