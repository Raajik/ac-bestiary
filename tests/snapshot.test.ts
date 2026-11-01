import { mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { openSnapshot, runSnapshot } from '../src/lib/snapshot.js';
import { limiter } from '../src/lib/wiki-api.js';
import { FakeWikiApi } from './fake-wiki-api.js';

const SEED = ['Bow of the Quiddity'];

function setup() {
  const dir = mkdtempSync(join(tmpdir(), 'snapshot-test-'));
  const db = openSnapshot(join(dir, 'wiki.sqlite'));
  const options = { imagesDir: join(dir, 'images') };
  return { dir, db, options };
}

const isFetch = (call: string) => call.includes('action=parse') || call.startsWith('download ') || call.includes('prop=imageinfo');

describe('runSnapshot', () => {
  it('takes the seed, its links, and one more step only from item pages', async () => {
    const { db, options } = setup();
    const api = new FakeWikiApi();
    const result = await runSnapshot(api, db, SEED, options);

    expect(result.failed).toEqual([]);
    const titles = (db.prepare('select title from pages order by title').all() as { title: string }[]).map((r) => r.title);
    // Crafter of Bows (an NPC) is not followed. Quiddity Weapons and Weapon Upgrade Kit (an item) are level 2:
    // kept, their links not followed (the fake has no reply for them, so following them fails).
    expect(titles).toEqual([
      'Bow of the Quiddity',
      'Crafter of Bows',
      'Defender (Spell)',
      'Enhanced Bow of the Quiddity',
      'Quiddity Weapons',
      'Weapon Upgrade Kit',
    ]);
    expect(db.prepare('select target from redirects where source = ?').get('Aura of Defender IV')).toEqual({
      target: 'Defender (Spell)',
    });
    const bow = db.prepare('select infoboxes from pages where title = ?').get('Bow of the Quiddity') as { infoboxes: string };
    expect(JSON.parse(bow.infoboxes)[0].params['Damage Modifier']).toBe('113');
    expect(readdirSync(options.imagesDir).sort()).toEqual([
      'Bow_of_the_Quiddity_Icon.png',
      'Enhanced_Bow_of_the_Quiddity_Icon.png',
    ]);
    const hits = db.prepare("select title from search where search match 'pulsating' order by title").all();
    expect(hits.map((h) => (h as { title: string }).title)).toContain('Bow of the Quiddity');
  });

  it('fetches nothing on a rerun when nothing changed', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);

    const api = new FakeWikiApi();
    const result = await runSnapshot(api, db, SEED, options);
    expect(result).toMatchObject({ pages: 6, fetched: 0, images: 0 });
    expect(api.calls.filter(isFetch)).toEqual([]);
  });

  it('fetches only the page whose revision changed', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);

    const api = new FakeWikiApi();
    const query = { action: 'query', prop: 'info', redirects: '1', titles: 'Aura of Defender IV|Crafter of Bows|Enhanced Bow of the Quiddity' };
    const reply = api.reply(query) as { query: { pages: { title: string; lastrevid: number }[] } };
    reply.query.pages.find((p) => p.title === 'Crafter of Bows')!.lastrevid += 1;
    api.override(query, reply);

    const result = await runSnapshot(api, db, SEED, options);
    expect(result.fetched).toBe(1);
    expect(api.calls.filter(isFetch)).toEqual([
      'action=parse&disableeditsection=1&disablelimitreport=1&page=Crafter of Bows&prop=text|wikitext|links|images|categories|revid',
    ]);
    // The search index holds the page once, not twice.
    expect(db.prepare("select count(*) as n from search where title = 'Crafter of Bows'").get()).toEqual({ n: 1 });
  });
});

describe('limiter', () => {
  it('runs at most 2 jobs at a time', async () => {
    const limit = limiter(2);
    let running = 0;
    let most = 0;
    const job = async () => {
      running++;
      most = Math.max(most, running);
      await new Promise((resolve) => setTimeout(resolve, 5));
      running--;
    };
    await Promise.all(Array.from({ length: 7 }, () => limit(job)));
    expect(most).toBe(2);
  });
});
