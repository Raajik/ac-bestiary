import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { readInfoboxes } from '../src/lib/wikitext.js';
import { WIKI_FIXTURE } from './fake-wiki-api.js';

const bow = JSON.parse(readFileSync(join(WIKI_FIXTURE, '02-parse.json'), 'utf8')).parse.wikitext as string;

describe('readInfoboxes', () => {
  it('reads the Missile Weapon template of Bow of the Quiddity (recorded from lohk)', () => {
    const boxes = readInfoboxes(bow);
    expect(boxes.map((box) => box.template)).toEqual(['Missile Weapon']);
    const params = boxes[0].params;
    expect(params['Damage Modifier']).toBe('113');
    expect(params['Speed']).toBe('Slow (50)');
    expect(params['Range']).toBe('75');
    expect(params['Spells']).toBe('[[Aura of Defender IV]], [[Aura of Blood Drinker V]], [[Aura of Swift Killer IV]]');
    expect(params['Elemental Damage Bonus']).toBe('');
  });

  it('skips templates it does not know, such as Intro', () => {
    expect(readInfoboxes('{{Intro | Patch Introduced = [[Release]] }}')).toEqual([]);
  });

  it('keeps nested templates and piped links inside a value whole', () => {
    const text = '{{Creature\n| Name = Tusker Guard\n| Trophies = {{Creature Item List|Tusker Head|Tusker Spit}}\n| Notes = [[Lin|the town]] a=b\n}}';
    const [box] = readInfoboxes(text);
    expect(box.params['Trophies']).toBe('{{Creature Item List|Tusker Head|Tusker Spit}}');
    expect(box.params['Notes']).toBe('[[Lin|the town]] a=b');
  });

  it('matches the name as MediaWiki does (first letter, underscores), and numbers positional values', () => {
    expect(readInfoboxes('{{Missile weapon | Name = X }}')).toEqual([]);
    const [box] = readInfoboxes('{{ missile_Weapon |first| Name = X }}');
    expect(box.template).toBe('Missile Weapon');
    expect(box.params).toEqual({ '1': 'first', Name: 'X' });
  });

  it('keeps a <nowiki> region whole, and ignores comments', () => {
    const [box] = readInfoboxes('{{Item|Notes=<nowiki>a|b=c</nowiki>|Name=Tusker<!-- |Name=Wrong -->|Level=5}}');
    expect(box.params).toEqual({ Notes: '<nowiki>a|b=c</nowiki>', Name: 'Tusker', Level: '5' });
    expect(readInfoboxes('<!-- {{Creature|Name=Wrong}} -->')).toEqual([]);
  });
});
