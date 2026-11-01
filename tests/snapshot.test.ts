import { mkdtempSync, readdirSync, rmSync } from 'node:fs';
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

const isFetch = (call: string) => call.includes('action=parse') || call.startsWith('download ');
const CRAFTER_PARSE = {
  action: 'parse',
  page: 'Crafter of Bows',
  prop: 'text|wikitext|links|images|categories|revid',
  disableeditsection: '1',
  disablelimitreport: '1',
};
const IMAGE_QUERY = {
  action: 'query',
  prop: 'imageinfo',
  iiprop: 'url|sha1',
  titles: 'File:Bow_of_the_Quiddity_Icon.png|File:Enhanced_Bow_of_the_Quiddity_Icon.png',
};

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

describe('runSnapshot, against changes on the wiki', () => {
  it('downloads an image again when its sha1 changed', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);

    const api = new FakeWikiApi();
    const reply = api.reply(IMAGE_QUERY) as { query: { pages: { title: string; imageinfo: { sha1: string }[] }[] } };
    reply.query.pages[0].imageinfo[0].sha1 = 'changed';
    api.override(IMAGE_QUERY, reply);

    const result = await runSnapshot(api, db, SEED, options);
    expect(result.images).toBe(1);
    expect(api.calls.filter(isFetch)).toHaveLength(1);
  });

  it('downloads an image again when its file is gone', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);
    rmSync(join(options.imagesDir, 'Bow_of_the_Quiddity_Icon.png'));

    const api = new FakeWikiApi();
    const result = await runSnapshot(api, db, SEED, options);
    expect(result.images).toBe(1);
    expect(readdirSync(options.imagesDir)).toContain('Bow_of_the_Quiddity_Icon.png');
  });

  it('drops a page the wiki says is gone, and its search row', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);

    const api = new FakeWikiApi();
    const query = { action: 'query', prop: 'info', redirects: '1', titles: 'Aura of Defender IV|Crafter of Bows|Enhanced Bow of the Quiddity' };
    const reply = api.reply(query) as { query: { pages: { title: string; ns: number; missing?: boolean; lastrevid?: number }[] } };
    reply.query.pages = reply.query.pages.map((p) => (p.title === 'Crafter of Bows' ? { title: p.title, ns: 0, missing: true } : p));
    api.override(query, reply);
    await runSnapshot(api, db, SEED, options);

    expect(db.prepare("select title from pages where title = 'Crafter of Bows'").all()).toEqual([]);
    expect(db.prepare("select title from search where title = 'Crafter of Bows'").all()).toEqual([]);
  });

  it('stores a page and its search row together, so a failed write is fetched again on the next run', async () => {
    const { db, options } = setup();
    const broken = new FakeWikiApi();
    // A text that is a number stores, then fails the search text: between the page write and the search write.
    broken.override(CRAFTER_PARSE, { parse: { ...(broken.reply(CRAFTER_PARSE) as { parse: object }).parse, text: 123 } });
    await expect(runSnapshot(broken, db, SEED, options)).rejects.toThrow();
    expect(db.prepare("select title from pages where title = 'Crafter of Bows'").all()).toEqual([]);

    await runSnapshot(new FakeWikiApi(), db, SEED, options);
    expect(db.prepare("select count(*) as n from search where title = 'Crafter of Bows'").get()).toEqual({ n: 1 });
  });

  it('follows a redirect chain to its page, and stores the final target', async () => {
    const { db, options } = setup();
    const api = new FakeWikiApi();
    const crafter = api.reply({ action: 'query', prop: 'info', redirects: '1', titles: 'Aura of Defender IV|Crafter of Bows|Enhanced Bow of the Quiddity' }) as {
      query: { pages: { title: string }[] };
    };
    api.override(
      { action: 'query', prop: 'info', redirects: '1', titles: 'A' },
      {
        batchcomplete: true,
        query: {
          redirects: [
            { from: 'A', to: 'B' },
            { from: 'B', to: 'Crafter of Bows' },
          ],
          pages: [crafter.query.pages.find((p) => p.title === 'Crafter of Bows')],
        },
      },
    );
    api.override(CRAFTER_PARSE, { parse: { ...(api.reply(CRAFTER_PARSE) as { parse: object }).parse, links: [] } });

    const result = await runSnapshot(api, db, ['A'], options);
    expect(result.fetched).toBe(1);
    expect(db.prepare('select source, target from redirects order by source').all()).toEqual([
      { source: 'A', target: 'Crafter of Bows' },
      { source: 'B', target: 'Crafter of Bows' },
    ]);
  });

  it('drops a redirect whose title became a page, and a page whose title became a redirect', async () => {
    const { db, options } = setup();
    await runSnapshot(new FakeWikiApi(), db, SEED, options);
    db.prepare("insert into redirects (source, target) values ('Crafter of Bows', 'Somewhere')").run();

    const api = new FakeWikiApi();
    const query = { action: 'query', prop: 'info', redirects: '1', titles: 'Aura of Defender IV|Crafter of Bows|Enhanced Bow of the Quiddity' };
    const reply = api.reply(query) as { query: { redirects: { from: string; to: string }[] } };
    // Enhanced Bow of the Quiddity now redirects to Defender (Spell).
    reply.query.redirects.push({ from: 'Enhanced Bow of the Quiddity', to: 'Defender (Spell)' });
    api.override(query, reply);
    // Then only the Bow's icon is in use.
    const images = api.reply(IMAGE_QUERY) as { query: { pages: { title: string }[] } };
    images.query.pages = images.query.pages.filter((p) => p.title === 'File:Bow of the Quiddity Icon.png');
    api.override({ ...IMAGE_QUERY, titles: 'File:Bow_of_the_Quiddity_Icon.png' }, images);
    await runSnapshot(api, db, SEED, options);

    expect(db.prepare("select * from redirects where source = 'Crafter of Bows'").all()).toEqual([]);
    expect(db.prepare("select title from pages where title = 'Enhanced Bow of the Quiddity'").all()).toEqual([]);
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
