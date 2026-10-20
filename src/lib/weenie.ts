// Read a retail weenie SQL file into a record the build can use.
//
// The retail data comes from the AC Emulator world database
// (ACEmulator/ACE-World-16PY-Patches and ACEmulator/ACE-World-16PY). Each
// weenie class is one file with one INSERT per property table.

import { readFileSync } from 'node:fs';
import { readClassId, readTable, type SqlRow } from './sql.js';

export interface WeenieData {
  classId: number;
  className: string;
  weenieType: number;
  name: string;
  ints: Map<number, number>;
  floats: Map<number, number>;
  dids: Map<number, number>;
  /** Attribute id to init level. */
  attributes: Map<number, number>;
  /** Second attribute id (1 health, 3 stamina, 5 mana) to init and current level. */
  attributes2nd: Map<number, { init: number; current: number }>;
  /** Skill id to init level. */
  skills: Map<number, number>;
  bodyParts: SqlRow[];
  createList: SqlRow[];
  spellBook: SqlRow[];
  path: string;
}

function num(value: unknown): number | null {
  if (typeof value === 'number') return value;
  if (typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return null;
}

/** Read one weenie SQL file. */
export function readWeenie(path: string): WeenieData {
  const sql = readFileSync(path, 'utf8');
  const classId = readClassId(sql);
  if (classId === null) throw new Error(`no weenie class id in ${path}`);

  const w = readTable(sql, 'weenie');
  const className = String(w[0]?.class_Name ?? '');
  const weenieType = num(w[0]?.type) ?? 0;

  const ints = new Map<number, number>();
  for (const row of readTable(sql, 'weenie_properties_int')) {
    const type = num(row.type);
    const value = num(row.value);
    if (type !== null && value !== null) ints.set(type, value);
  }

  const floats = new Map<number, number>();
  for (const row of readTable(sql, 'weenie_properties_float')) {
    const type = num(row.type);
    const value = num(row.value);
    if (type !== null && value !== null) floats.set(type, value);
  }

  const dids = new Map<number, number>();
  for (const row of readTable(sql, 'weenie_properties_d_i_d')) {
    const type = num(row.type);
    const value = num(row.value);
    if (type !== null && value !== null) dids.set(type, value);
  }

  const attributes = new Map<number, number>();
  for (const row of readTable(sql, 'weenie_properties_attribute')) {
    const type = num(row.type);
    const value = num(row.init_Level);
    if (type !== null && value !== null) attributes.set(type, value);
  }

  const attributes2nd = new Map<number, { init: number; current: number }>();
  for (const row of readTable(sql, 'weenie_properties_attribute_2nd')) {
    const type = num(row.type);
    if (type === null) continue;
    attributes2nd.set(type, {
      init: num(row.init_Level) ?? 0,
      current: num(row.current_Level) ?? 0,
    });
  }

  const skills = new Map<number, number>();
  for (const row of readTable(sql, 'weenie_properties_skill')) {
    const type = num(row.type);
    const value = num(row.init_Level);
    if (type !== null && value !== null) skills.set(type, value);
  }

  const strings = readTable(sql, 'weenie_properties_string');
  const nameRow = strings.find((row) => num(row.type) === 1);
  const name = nameRow ? String(nameRow.value) : '';

  return {
    classId,
    className,
    weenieType,
    name,
    ints,
    floats,
    dids,
    attributes,
    attributes2nd,
    skills,
    bodyParts: readTable(sql, 'weenie_properties_body_part'),
    createList: readTable(sql, 'weenie_properties_create_list'),
    spellBook: readTable(sql, 'weenie_properties_spell_book'),
    path,
  };
}

/**
 * The create list rows that drop an item when the creature dies.
 *
 * The retail create list has one row per item. The drop chance is in the
 * `shade` column when the destination type has the Treasure flag. A row with
 * no weenie class id is the "nothing" row that completes the chance range.
 */
export interface DeathDrop {
  itemClassId: number;
  /** 0 to 1. */
  chance: number;
  stackSize: number;
}

export const DESTINATION_CONTAIN = 1;
export const DESTINATION_WIELD = 2;
export const DESTINATION_TREASURE = 8;

export function deathDrops(weenie: WeenieData): DeathDrop[] {
  const drops: DeathDrop[] = [];

  for (const row of weenie.createList) {
    const destination = num(row.destination_Type) ?? 0;
    const itemClassId = num(row.weenie_Class_Id) ?? 0;
    if (itemClassId === 0) continue;

    const shade = num(row.shade) ?? 0;
    const chance = (destination & DESTINATION_TREASURE) !== 0 ? shade : 1;

    drops.push({
      itemClassId,
      chance,
      stackSize: num(row.stack_Size) ?? 0,
    });
  }

  return drops;
}

/** The items the creature holds when it spawns. */
export function wieldedItems(weenie: WeenieData): number[] {
  return weenie.createList
    .filter((row) => (num(row.destination_Type) ?? 0) & DESTINATION_WIELD)
    .map((row) => num(row.weenie_Class_Id) ?? 0)
    .filter((id) => id !== 0);
}
