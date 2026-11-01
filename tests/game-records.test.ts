import { describe, expect, it } from 'vitest';

import { appraisalRows, matchKey, matchWeenies, type ItemVariant } from '../src/lib/game-records.js';

type Lite = { classId: number; name: string; weenieType: number };

function index(weenies: Lite[]): Map<string, Lite[]> {
  const byName = new Map<string, Lite[]>();
  for (const w of weenies) byName.set(matchKey(w.name), [...(byName.get(matchKey(w.name)) ?? []), w]);
  return byName;
}

describe('matchWeenies', () => {
  const byName = index([
    { classId: 70965, name: 'Enhanced Bow of the Quiddity', weenieType: 3 },
    { classId: 9597, name: 'Bow of the Quiddity', weenieType: 3 },
    { classId: 40000, name: 'Bow of the Quiddity', weenieType: 3 },
    { classId: 36381, name: 'Chimeric Bow of the Quiddity', weenieType: 3 },
    { classId: 1, name: 'Tusker', weenieType: 10 },
    { classId: 2, name: 'Tusker', weenieType: 10 },
    { classId: 3, name: 'Tusker', weenieType: 1 },
  ]);

  it('gives the same-name weenies as variants, lowest class id first, and no other names', () => {
    expect(matchWeenies(['Bow of the Quiddity'], byName, 'item').map((w) => w.classId)).toEqual([9597, 40000]);
  });

  it('keeps creatures for a creature page and items for an item page', () => {
    expect(matchWeenies(['Tusker'], byName, 'creature').map((w) => w.classId)).toEqual([1, 2]);
    expect(matchWeenies(['Tusker'], byName, 'item').map((w) => w.classId)).toEqual([3]);
  });

  it('matches the title or the template name, in any case and spacing, once each', () => {
    const found = matchWeenies(['bow  of the quiddity ', 'Bow of the Quiddity'], byName, 'item');
    expect(found.map((w) => w.classId)).toEqual([9597, 40000]);
  });
});

describe('appraisalRows', () => {
  // The Bow of the Quiddity: template values from the lohk wiki, weenie values from 09597 Bow of the Quiddity.sql.
  const params = {
    Name: 'Bow of the Quiddity',
    Value: '2,000',
    Burden: '550',
    'Damage Modifier': '113',
    Speed: 'Slow (50)',
    Range: '75',
    'Bonus to Defense': '0',
    Spells: '[[Aura of Defender IV]], [[Aura of Blood Drinker V]], [[Aura of Swift Killer IV]]',
    'Activation Reqs': 'Arcane Lore: 50',
    Spellcraft: '400',
    Mana: '1000',
    Element: '',
  };
  const bow: ItemVariant = {
    classId: 9597,
    name: 'Bow of the Quiddity',
    setup: 0x02000a77,
    palette: 0,
    clothing: 0,
    paletteTemplate: 0,
    shade: 0,
    icon: 0x060020ce,
    values: { value: 2000, burden: 550, damage: 0, weaponTime: 50, spellcraft: 400, maxMana: 1000, arcaneLore: 50, damageVariance: 0, weaponDefense: 1, damageMod: 2.13 },
    spells: ['Aura of Defender Self IV', 'Aura of Blood Drinker Self V', 'Aura of Swift Killer Self IV'],
  };

  it('lists the template values, links as text, and the weenie values that agree', () => {
    const rows = appraisalRows(params, bow);
    const byLabel = Object.fromEntries(rows.map((r) => [r.label, r]));
    expect(rows.map((r) => r.label)).toEqual([
      'Value', 'Burden', 'Damage Modifier', 'Speed', 'Range', 'Bonus to Defense', 'Spells', 'Activation Reqs', 'Spellcraft', 'Mana',
    ]);
    expect(byLabel['Damage Modifier']).toEqual({ label: 'Damage Modifier', wiki: '113', game: '113', differs: false });
    expect(byLabel['Speed']).toMatchObject({ wiki: 'Slow (50)', game: '50', differs: false });
    expect(byLabel['Range']).toMatchObject({ wiki: '75', game: null, differs: false });
    expect(byLabel['Spells'].wiki).toBe('Aura of Defender IV, Aura of Blood Drinker V, Aura of Swift Killer IV');
    expect(rows.filter((r) => r.differs)).toEqual([]);
  });

  it('marks a value the weenie gives differently', () => {
    const rows = appraisalRows(params, { ...bow, values: { ...bow.values, damageMod: 2.1, weaponTime: 40 } });
    expect(rows.filter((r) => r.differs).map((r) => [r.label, r.game])).toEqual([
      ['Damage Modifier', '110'],
      ['Speed', '40'],
    ]);
  });

  it('compares a melee damage range and a bonus in percent', () => {
    const axe = { ...bow, values: { damage: 18, damageVariance: 0.5, weaponDefense: 1.05, weaponOffense: 1.07 } };
    const rows = appraisalRows({ Damage: '9 - 18', 'Bonus to Attack': '7', 'Bonus to Defense': '5.0' }, axe);
    expect(rows).toEqual([
      { label: 'Damage', wiki: '9 - 18', game: '9 - 18', differs: false },
      { label: 'Bonus to Attack', wiki: '7', game: '7', differs: false },
      { label: 'Bonus to Defense', wiki: '5.0', game: '5', differs: false },
    ]);
  });

  it('shows the template values alone when no weenie matched', () => {
    expect(appraisalRows({ Value: '2,000' }, null)).toEqual([{ label: 'Value', wiki: '2,000', game: null, differs: false }]);
  });
});
