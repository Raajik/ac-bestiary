// Build the creature data of the bestiary page.
//
// The data comes from three places:
//   - the retail weenie SQL of the AC Emulator world database,
//   - the saved ACPedia page, which gives the creature list and the values
//     ACPedia lists, and
//   - the retail client tables, which give the attribute formulas of the
//     skills and the names of the spells.
//
// The AC Emulator data is the source of truth, because the emulator is the
// only way to play the game. The ACPedia values are kept for comparison.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { readAcpediaPage, acpediaUrl, type AcpediaEntry } from './acpedia.js';
import {
  ATTRIBUTE_NAMES,
  DID_CLOTHING_BASE,
  DID_ICON,
  DID_PALETTE_BASE,
  DID_SETUP,
  FLOAT_RESIST,
  FLOAT_SHADE,
  INT_LEVEL,
  INT_PALETTE_TEMPLATE,
  INT_WEAPON_SKILL,
  INT_XP_OVERRIDE,
  MAGIC_SCHOOL_NAMES,
  SKILL_CREATURE_ENCHANTMENT,
  SKILL_LIFE_MAGIC,
  SKILL_MAGIC_DEFENSE,
  SKILL_MELEE_DEFENSE,
  SKILL_MISSILE_DEFENSE,
  SKILL_MISSILE_WEAPONS,
  SKILL_NAMES,
  SKILL_VOID_MAGIC,
  SKILL_WAR_MAGIC,
} from './ace-enums.js';
import { openPortalDat, readDatFacts, type DatFacts } from './dat-facts.js';
import { ACPEDIA_PAGE, BASE_ROOT, DIST_DIR, PATCH_ROOT, PORTAL_DAT } from './paths.js';
import { deathDrops, readWeenie, wieldedItems, type WeenieData } from './weenie.js';
import { indexWeenies } from './weenie-index.js';
import type { BestiaryData, Creature, Variant } from './types.js';

const MELEE_SKILLS = [41, 44, 45, 46, 1, 4, 5, 9, 10, 11];
const UNARMED_COMBAT = 13;
const MISSILE_SKILLS = [2, 3, 8, 12, 47];
const MAGIC_SKILLS = [SKILL_WAR_MAGIC, SKILL_VOID_MAGIC, SKILL_LIFE_MAGIC, SKILL_CREATURE_ENCHANTMENT];

export interface BestiarySources {
  /** Roots that hold the patched retail weenie SQL. */
  patchRoots: string[];
  /** Roots that hold the retail weenie SQL before the patches. */
  baseRoots: string[];
  acpediaPage: string;
  portalDat: string;
}

export function defaultSources(): BestiarySources {
  return {
    patchRoots: [PATCH_ROOT],
    baseRoots: [BASE_ROOT],
    acpediaPage: ACPEDIA_PAGE,
    portalDat: PORTAL_DAT,
  };
}

/**
 * The current skill value, the way the AC Emulator computes it.
 *
 * The current skill is the attribute formula from the retail SkillTable plus
 * the skill the weenie has
 * (ACE.Server/WorldObjects/Entity/CreatureSkill.cs).
 */
export function currentSkill(weenie: WeenieData, skillId: number, facts: DatFacts): number | null {
  const own = weenie.skills.get(skillId);
  if (own === undefined) return null;

  const fact = facts.skills.get(skillId);
  if (!fact || fact.divisor === 0) return own;

  let total = weenie.attributes.get(fact.attr1) ?? 0;
  if (fact.attr2) total += weenie.attributes.get(fact.attr2) ?? 0;

  const base = fact.divisor === 1 ? total : Math.round(total / fact.divisor);
  return base + own;
}

/** A creature keeps its armor on each body part, so the armor level is their mean (ACE `weenie_properties_body_part`). */
function meanBaseArmor(weenie: WeenieData): number {
  const armor = weenie.bodyParts.map((part) => Number(part.base_Armor ?? 0));
  return armor.length ? Math.round(armor.reduce((a, b) => a + b, 0) / armor.length) : 0;
}

export function buildBestiary(sources: BestiarySources = defaultSources()): BestiaryData {
  const acpedia = readAcpediaPage(readFileSync(sources.acpediaPage, 'utf8'));

  // The patch database holds the retail weenies as they are now, the base
  // database holds the ones the patches did not touch. A patch wins.
  const patchWeenies = indexWeenies(sources.patchRoots);
  const baseWeenies = indexWeenies(sources.baseRoots);

  const weeniePath = (classId: number): string | undefined =>
    patchWeenies.get(classId) ?? baseWeenies.get(classId);

  const db = openPortalDat(sources.portalDat);
  const facts = readDatFacts(db);

  const weenieCache = new Map<number, WeenieData>();
  const readCached = (classId: number): WeenieData | undefined => {
    if (weenieCache.has(classId)) return weenieCache.get(classId);
    const path = weeniePath(classId);
    if (!path) return undefined;
    const weenie = readWeenie(path);
    weenieCache.set(classId, weenie);
    return weenie;
  };

  // Group the creature weenies by name. A class that the patches changed is
  // read from the patch file, so it is added once.
  const byName = new Map<string, WeenieData[]>();
  for (const classId of new Set([...patchWeenies.keys(), ...baseWeenies.keys()])) {
    const weenie = readCached(classId);
    if (!weenie || weenie.weenieType !== 10 || !weenie.name) continue;
    const list = byName.get(weenie.name) ?? [];
    list.push(weenie);
    byName.set(weenie.name, list);
  }

  const itemCache = new Map<number, WeenieData | undefined>();
  const readItem = (classId: number): WeenieData | undefined => {
    if (itemCache.has(classId)) return itemCache.get(classId);
    const weenie = readCached(classId);
    itemCache.set(classId, weenie);
    return weenie;
  };

  const buildVariant = (weenie: WeenieData): Variant => {
    const skills: Record<string, number> = {};
    const skillNames: Record<string, string> = {};

    // The weapon skill the creature fights with. A wielded item gives the
    // skill, otherwise the creature has one of the melee weapon skills.
    let weaponSkill: number | null = null;
    for (const itemId of wieldedItems(weenie)) {
      const skill = readItem(itemId)?.ints.get(INT_WEAPON_SKILL);
      if (skill) {
        weaponSkill = skill;
        break;
      }
    }

    const meleeSkill =
      weaponSkill && MELEE_SKILLS.includes(weaponSkill)
        ? weaponSkill
        : (MELEE_SKILLS.find((id) => weenie.skills.has(id)) ??
          (weenie.skills.has(UNARMED_COMBAT) ? UNARMED_COMBAT : null));
    const missileSkill =
      weaponSkill && MISSILE_SKILLS.includes(weaponSkill)
        ? weaponSkill
        : weenie.skills.has(SKILL_MISSILE_WEAPONS)
          ? SKILL_MISSILE_WEAPONS
          : null;

    if (meleeSkill !== null) {
      const value = currentSkill(weenie, meleeSkill, facts);
      if (value !== null) {
        skills.meleeAttack = value;
        skillNames.meleeAttack = SKILL_NAMES[meleeSkill] ?? '';
      }
    }
    if (missileSkill !== null) {
      const value = currentSkill(weenie, missileSkill, facts);
      if (value !== null) {
        skills.missileAttack = value;
        skillNames.missileAttack = SKILL_NAMES[missileSkill] ?? '';
      }
    }
    for (const id of MAGIC_SKILLS) {
      const value = currentSkill(weenie, id, facts);
      if (value === null) continue;
      const name = SKILL_NAMES[id] ?? '';
      if (name === 'War Magic') skills.warMagic = value;
      if (name === 'Void Magic') skills.voidMagic = value;
      if (name === 'Life Magic') skills.lifeMagic = value;
      if (name === 'Creature Enchantment') skills.creatureMagic = value;
    }
    for (const id of [SKILL_MELEE_DEFENSE, SKILL_MISSILE_DEFENSE, SKILL_MAGIC_DEFENSE]) {
      const value = currentSkill(weenie, id, facts);
      if (value === null) continue;
      if (id === SKILL_MELEE_DEFENSE) skills.meleeDefense = value;
      if (id === SKILL_MISSILE_DEFENSE) skills.missileDefense = value;
      if (id === SKILL_MAGIC_DEFENSE) skills.magicDefense = value;
    }

    const attributes: Record<string, number> = {};
    for (const [id, value] of weenie.attributes) {
      attributes[ATTRIBUTE_NAMES[id]?.toLowerCase() ?? `attribute${id}`] = value;
    }

    const resistances: Record<string, number> = {};
    for (const [name, id] of Object.entries(FLOAT_RESIST)) {
      const value = weenie.floats.get(id);
      if (value !== undefined) resistances[name] = value;
    }

    const spells = weenie.spellBook.map((row) => {
      const id = Number(row.spell ?? 0);
      const fact = facts.spells.get(id);
      return {
        id,
        name: fact?.name ?? `Spell ${id}`,
        acpedia: acpediaUrl(fact?.name ?? `Spell ${id}`),
        school: MAGIC_SCHOOL_NAMES[fact?.school ?? 0] ?? 'Unknown',
        probability: Number(row.probability ?? 0),
      };
    });

    const trophies = deathDrops(weenie).map((drop) => {
      const item = readItem(drop.itemClassId);
      return {
        classId: drop.itemClassId,
        name: item?.name ?? `Item ${drop.itemClassId}`,
        chance: drop.chance,
        icon: item?.dids.get(DID_ICON) ?? null,
        acpedia: acpediaUrl(item?.name ?? `Item ${drop.itemClassId}`),
      };
    });

    return {
      classId: weenie.classId,
      name: weenie.name,
      level: weenie.ints.get(INT_LEVEL) ?? 0,
      health: weenie.attributes2nd.get(1)?.current ?? 0,
      stamina: weenie.attributes2nd.get(3)?.current ?? 0,
      mana: weenie.attributes2nd.get(5)?.current ?? 0,
      xp: weenie.ints.get(INT_XP_OVERRIDE) ?? 0,
      setup: weenie.dids.get(DID_SETUP) ?? 0,
      palette: weenie.dids.get(DID_PALETTE_BASE) ?? 0,
      clothing: weenie.dids.get(DID_CLOTHING_BASE) ?? 0,
      paletteTemplate: weenie.ints.get(INT_PALETTE_TEMPLATE) ?? 0,
      shade: weenie.floats.get(FLOAT_SHADE) ?? 0,
      attributes,
      skills,
      skillNames,
      armorLevel: meanBaseArmor(weenie),
      resistances,
      spells,
      trophies,
    };
  };

  const creatures: Creature[] = [];
  const missing: string[] = [];

  for (const entry of acpedia) {
    const variants = (byName.get(entry.name) ?? [])
      .map(buildVariant)
      .sort((a, b) => a.level - b.level || a.classId - b.classId);

    if (variants.length === 0) {
      missing.push(entry.name);
      continue;
    }

    // The default variant is the one with the ACPedia level, or the lowest
    // level when the ACPedia level is not in the data.
    const levelMatch =
      entry.level !== null ? variants.find((v) => v.level === entry.level) : undefined;

    creatures.push({
      name: entry.name,
      acpedia: acpediaUrl(entry.name),
      subclassed: entry.table === 'Subclassed',
      acpediaLevel: entry.level,
      acpediaXp: entry.xp,
      acpediaHealth: entry.health,
      acpediaLoot: entry.loot,
      acpediaDefense: {
        melee: entry.meleeDefense,
        missile: entry.missileDefense,
        magic: entry.magicDefense,
      },
      defaultVariant: (levelMatch ?? variants[0]).classId,
      variants,
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    sources: {
      acpedia: relative(process.env.HOME ?? '', sources.acpediaPage),
      patchDatabase: sources.patchRoots.map((r) => relative(process.env.HOME ?? '', r)).join(', '),
      baseDatabase: sources.baseRoots.map((r) => relative(process.env.HOME ?? '', r)).join(', '),
      portalDat: relative(process.env.HOME ?? '', sources.portalDat),
    },
    creatures,
    missing,
  };
}

/** Write the data of the page to the output directory. */
export function writeBestiary(data: BestiaryData, distDir = DIST_DIR): string {
  mkdirSync(distDir, { recursive: true });
  const out = join(distDir, 'data.json');
  writeFileSync(out, `${JSON.stringify(data, null, 2)}\n`);
  return out;
}
