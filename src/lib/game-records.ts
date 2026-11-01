// The game records the app shows beside a wiki page (spec wiki-app.md, "Game
// records in the snapshot"), and the appraisal rows that put the template's
// values next to the weenie's. Browser safe: the build writes the records,
// the app reads them and builds the rows.

import type { WeenieData } from './weenie.js';

/** The weenie type of a creature (ACE WeenieType.Creature). */
const WEENIE_TYPE_CREATURE = 10;

/** The values of an item weenie the appraisal panel compares (ACE PropertyInt / PropertyFloat ids). */
export interface GameValues {
  value?: number; // int 19
  burden?: number; // int 5
  armorLevel?: number; // int 28
  damage?: number; // int 44, the highest damage
  weaponTime?: number; // int 49, the speed
  spellcraft?: number; // int 106
  maxMana?: number; // int 108
  arcaneLore?: number; // int 109, ItemDifficulty
  damageVariance?: number; // float 22
  weaponDefense?: number; // float 29
  weaponOffense?: number; // float 62
  damageMod?: number; // float 63
}

const INTS: [keyof GameValues, number][] = [
  ['value', 19],
  ['burden', 5],
  ['armorLevel', 28],
  ['damage', 44],
  ['weaponTime', 49],
  ['spellcraft', 106],
  ['maxMana', 108],
  ['arcaneLore', 109],
];
const FLOATS: [keyof GameValues, number][] = [
  ['damageVariance', 22],
  ['weaponDefense', 29],
  ['weaponOffense', 62],
  ['damageMod', 63],
];

export interface ItemVariant {
  classId: number;
  name: string;
  setup: number;
  palette: number;
  clothing: number;
  paletteTemplate: number;
  shade: number;
  icon: number;
  values: GameValues;
  spells: string[];
}

/** An item page's weenies: the first is the default variant. */
export interface ItemRecord {
  title: string;
  variants: ItemVariant[];
}

/** A weenie name as the match compares it. */
export function matchKey(name: string): string {
  return name.replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * The weenies of a page: those whose name is one of the page's names (its
 * title, its template's Name), of the page's kind, lowest class id first. The
 * same name on several weenies makes variants.
 */
export function matchWeenies<T extends Pick<WeenieData, 'classId' | 'name' | 'weenieType'>>(
  names: string[],
  byName: Map<string, T[]>,
  kind: 'item' | 'creature',
): T[] {
  const found = new Map<number, T>();
  for (const name of names) {
    for (const weenie of byName.get(matchKey(name)) ?? []) {
      const isCreature = weenie.weenieType === WEENIE_TYPE_CREATURE;
      if (isCreature === (kind === 'creature')) found.set(weenie.classId, weenie);
    }
  }
  return [...found.values()].sort((a, b) => a.classId - b.classId);
}

/** The record of one item weenie. */
export function itemVariant(weenie: WeenieData, spellName: (id: number) => string): ItemVariant {
  const values: GameValues = {};
  for (const [key, id] of INTS) {
    const value = weenie.ints.get(id);
    if (value !== undefined) values[key] = value;
  }
  for (const [key, id] of FLOATS) {
    const value = weenie.floats.get(id);
    if (value !== undefined) values[key] = value;
  }
  return {
    classId: weenie.classId,
    name: weenie.name,
    setup: weenie.dids.get(1) ?? 0,
    palette: weenie.dids.get(6) ?? 0,
    clothing: weenie.dids.get(7) ?? 0,
    paletteTemplate: weenie.ints.get(3) ?? 0,
    shade: weenie.floats.get(12) ?? 0,
    icon: weenie.dids.get(8) ?? 0,
    values,
    spells: weenie.spellBook.map((row) => spellName(Number(row.spell ?? 0))),
  };
}

export interface AppraisalRow {
  label: string;
  /** The template's value, as the wiki writes it (links as their text). */
  wiki: string;
  /** The weenie's value in the wiki's form, or null when the weenie has none to compare. */
  game: string | null;
  differs: boolean;
}

/** Template parameters the panel does not list as rows: they are the name, the pictures, or shown elsewhere. */
const NOT_ROWS = new Set(['Name', 'Icon Image', 'Live Image', 'Live Image Caption', 'Description', 'Description Two']);

/** The numbers in a text: "Slow (50)" gives [50], "9 - 18" gives [9, 18], "2,000" gives [2000]. */
function numbers(text: string): number[] {
  return [...text.replace(/(\d),(\d)/g, '$1$2').matchAll(/-?\d+(?:\.\d+)?/g)].map((m) => Number(m[0]));
}

/** A bonus multiplier as the wiki writes it: 1.05 gives 5. */
function percent(multiplier: number): number {
  return Math.round((multiplier - 1) * 1000) / 10;
}

function sameNumbers(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((x, i) => Math.abs(x - b[i]) < 0.05);
}

/** The weenie's value for a template parameter, as numbers and as text; null when it has none. */
function gameValue(label: string, wiki: string, v: GameValues): { nums: number[]; text: string } | null {
  const plain = (n: number | undefined) => (n === undefined ? null : { nums: [n], text: n.toLocaleString('en-US') });
  switch (label) {
    case 'Value':
      return plain(v.value);
    case 'Burden':
      return plain(v.burden);
    case 'Armor Level':
      return plain(v.armorLevel);
    case 'Spellcraft':
      return plain(v.spellcraft);
    case 'Mana':
      return plain(v.maxMana);
    case 'Speed':
      return plain(v.weaponTime);
    case 'Damage': {
      if (!v.damage) return null;
      // Not rounded: 22 with variance 0.6 is "8.8 - 22", as the wiki writes it.
      const min = Math.round(v.damage * (1 - (v.damageVariance ?? 0)) * 100) / 100;
      return { nums: [min, v.damage], text: `${min} - ${v.damage}` };
    }
    case 'Damage Modifier':
      return v.damageMod === undefined ? null : plain(Math.round((v.damageMod - 1) * 100));
    case 'Bonus to Attack':
      return v.weaponOffense === undefined ? null : plain(percent(v.weaponOffense));
    case 'Bonus to Defense':
      return v.weaponDefense === undefined ? null : plain(percent(v.weaponDefense));
    case 'Activation Reqs': {
      if (v.arcaneLore === undefined || !/Arcane Lore/i.test(wiki)) return null;
      return { nums: [v.arcaneLore], text: `Arcane Lore: ${v.arcaneLore}` };
    }
    default:
      return null;
  }
}

/** A spell name as the comparison sees it: the game says "Aura of Defender Self IV" where the wiki says "Aura of Defender IV". */
function spellKey(name: string): string {
  return name.replace(/\bSelf\b/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

/** Whether the wiki and the game list the same spells, in any order. */
function sameSpells(wiki: string[], game: string[]): boolean {
  const a = wiki.map(spellKey).filter((s) => s !== '').sort();
  const b = game.map(spellKey).sort();
  return a.length === b.length && a.every((s, i) => s === b[i]);
}

/** Wikitext as the panel shows it: links as their text. */
export function wikiText(value: string): string {
  return value
    .replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

/** The appraisal rows of an item: each template value, with the weenie's beside it where it has one. */
export function appraisalRows(params: Record<string, string>, variant: ItemVariant | null): AppraisalRow[] {
  const rows: AppraisalRow[] = [];
  for (const [label, raw] of Object.entries(params)) {
    if (NOT_ROWS.has(label) || /^\d+$/.test(label) || raw.trim() === '') continue;
    const wiki = wikiText(raw);

    if (label === 'Spells') {
      const game = variant && variant.spells.length > 0 ? variant.spells.join(', ') : null;
      const differs = game !== null && !sameSpells(wiki.split(','), variant!.spells);
      rows.push({ label, wiki, game, differs });
      continue;
    }

    const game = variant ? gameValue(label, wiki, variant.values) : null;
    if (!game) {
      rows.push({ label, wiki, game: null, differs: false });
      continue;
    }
    let wikiNums = numbers(wiki);
    // A requirement list ("Arcane Lore: 1, Mana Conversion: 200") compares its Arcane Lore; a speed its number.
    if (label === 'Activation Reqs') wikiNums = numbers(wiki.match(/Arcane Lore:\s*[\d,.]+/i)?.[0] ?? '');
    else if (label === 'Speed') wikiNums = wikiNums.slice(-1);
    rows.push({ label, wiki, game: game.text, differs: !sameNumbers(wikiNums, game.nums) });
  }
  return rows;
}
