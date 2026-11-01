import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { DatabaseSync } from 'node:sqlite';
import { beforeAll, describe, expect, it } from 'vitest';

import { ftsQuery, loadPage, search, type QueryFn } from '../src/app/pages.js';
import { openSnapshot, resetGameRecords, runSnapshot } from '../src/lib/snapshot.js';
import { FakeWikiApi } from './fake-wiki-api.js';

let db: DatabaseSync;
let query: QueryFn;

const item = (title: string, classId: number) => ({ title, variants: [{ classId, name: title, values: {}, spells: [] }] });

beforeAll(async () => {
  const dir = mkdtempSync(join(tmpdir(), 'pages-test-'));
  db = openSnapshot(join(dir, 'wiki.sqlite'));
  await runSnapshot(new FakeWikiApi(), db, ['Bow of the Quiddity'], { imagesDir: join(dir, 'images') });
  resetGameRecords(db);
  const put = db.prepare('insert into items (title, data) values (?, ?)');
  put.run('Bow of the Quiddity', JSON.stringify(item('Bow of the Quiddity', 9597)));
  put.run('Enhanced Bow of the Quiddity', JSON.stringify(item('Enhanced Bow of the Quiddity', 70965)));
  put.run('Axe of the Quiddity', JSON.stringify(item('Axe of the Quiddity', 9600)));
  query = async (sql, params = []) => db.prepare(sql).all(...(params as never[])) as Record<string, unknown>[];
});

describe('search', () => {
  it('lists Quiddity Weapons first for "quiddity", then the other titles, then text hits', async () => {
    const hits = await search(query, 'quiddity');
    expect(hits.titles).toEqual(['Quiddity Weapons', 'Bow of the Quiddity', 'Enhanced Bow of the Quiddity']);
    expect(hits.text.map((h) => h.title)).not.toContain('Quiddity Weapons');
  });

  it('finds a page through a redirect title, and by its text', async () => {
    expect((await search(query, 'Aura of Defender IV')).titles).toEqual(['Defender (Spell)']);
    const hits = await search(query, 'pulsating energy');
    expect(hits.text.map((h) => h.title)).toContain('Bow of the Quiddity');
    expect(hits.text.find((h) => h.title === 'Bow of the Quiddity')?.snippet).toContain('[[pulsating]]');
  });

  it('takes any text without an SQL or FTS error', async () => {
    for (const text of ['"', "it's", '100%', 'a_b', 'NEAR(', '*', '']) await expect(search(query, text)).resolves.toBeDefined();
    expect(ftsQuery('bow "of" the')).toBe('"bow"* "of"* "the"*');
  });
});

describe('loadPage', () => {
  it('reads an item page with its template values and record', async () => {
    const page = await loadPage(query, 'Bow_of_the_Quiddity');
    expect(page?.kind).toBe('item');
    expect(page?.itemParams?.['Damage Modifier']).toBe('113');
    expect(page?.item?.variants[0].classId).toBe(9597);
  });

  it('reads a list page with the records of its links', async () => {
    const page = await loadPage(query, 'Quiddity Weapons');
    expect(page?.kind).toBe('list');
    expect(page?.listItems.map((i) => i.title)).toEqual(['Bow of the Quiddity', 'Enhanced Bow of the Quiddity', 'Axe of the Quiddity']);
  });

  it('reads a page through a redirect, and other pages as text', async () => {
    expect((await loadPage(query, 'Aura of Defender IV'))?.title).toBe('Defender (Spell)');
    expect((await loadPage(query, 'Crafter of Bows'))?.kind).toBe('text');
    expect(await loadPage(query, 'No such page')).toBeNull();
  });
});
