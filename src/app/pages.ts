// What the app reads from the snapshot: search hits, and a page with its kind and game records
// (spec wiki-app.md, "The app"). Every read is one SQL statement through `QueryFn`: the Rust side in the app,
// node:sqlite in the tests.

import type { ItemRecord } from '../lib/game-records.js';
import type { Creature } from '../lib/types.js';
import { INFOBOX_KINDS, type Infobox } from '../lib/wikitext.js';

export type Row = Record<string, unknown>;
export type QueryFn = (sql: string, params?: unknown[]) => Promise<Row[]>;

/** A list page needs at least this many links to pages with game records (spec "a set or list page"). */
export const LIST_MIN_RECORDS = 3;

export interface SearchHits {
  /** Pages whose title holds the words, best first. */
  titles: string[];
  /** Other pages whose text holds the words, with a snippet; `[[` and `]]` mark the match. */
  text: { title: string; snippet: string }[];
}

/** The words of a search, as an FTS5 query: each word a quoted prefix, all of them needed. */
export function ftsQuery(text: string): string {
  return text
    .split(/[^\p{L}\p{N}']+/u)
    .filter((word) => word !== '')
    .map((word) => `"${word.replace(/"/g, '')}"*`)
    .join(' ');
}

/** Search the snapshot: titles first, then full text (spec "Search"). */
export async function search(query: QueryFn, text: string, limit = 30): Promise<SearchHits> {
  const words = text.trim();
  if (words === '') return { titles: [], text: [] };

  const like = `%${words.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
  const titleRows = await query(
    `select title from (
       select title from pages where title like ?1 escape '\\'
       union
       select target as title from redirects where source like ?1 escape '\\'
     )
     order by lower(title) = lower(?2) desc, lower(title) like lower(?3) escape '\\' desc, length(title), title
     limit ?4`,
    [like, words, `${words.replace(/[\\%_]/g, (c) => `\\${c}`)}%`, limit],
  );
  const titles = titleRows.map((row) => String(row.title));

  const fts = ftsQuery(words);
  if (fts === '') return { titles, text: [] };
  const textRows = await query(
    `select title, snippet(search, 1, '[[', ']]', '…', 12) as snippet
     from search where search match ? order by rank limit ?`,
    [fts, limit + titles.length],
  );
  const shown = new Set(titles);
  return {
    titles,
    text: textRows
      .filter((row) => !shown.has(String(row.title)))
      .slice(0, limit)
      .map((row) => ({ title: String(row.title), snippet: String(row.snippet) })),
  };
}

export type PageKind = 'item' | 'creature' | 'list' | 'text';

export interface WikiPage {
  title: string;
  html: string;
  infoboxes: Infobox[];
  kind: PageKind;
  /** The item template's values, on an item page. */
  itemParams: Record<string, string> | null;
  item: ItemRecord | null;
  creature: Creature | null;
  /** On a list page: the linked items and creatures that have game records, in the order the parse reply lists the links. */
  listItems: ItemRecord[];
  listCreatures: Creature[];
}

/** A title as MediaWiki stores it: spaces for `_`, the first letter upper case. */
export function normalTitle(title: string): string {
  const spaced = title.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/** Read a page by title (through a redirect), or null when the snapshot has none. */
export async function loadPage(query: QueryFn, title: string): Promise<WikiPage | null> {
  const wanted = normalTitle(title);
  let rows = await query('select title, html, infoboxes, links from pages where title = ?', [wanted]);
  if (rows.length === 0) {
    rows = await query(
      'select p.title, p.html, p.infoboxes, p.links from redirects r join pages p on p.title = r.target where r.source = ?',
      [wanted],
    );
  }
  const row = rows[0];
  if (!row) return null;

  const pageTitle = String(row.title);
  const infoboxes = JSON.parse(String(row.infoboxes)) as Infobox[];
  const itemBox = infoboxes.find((box) => INFOBOX_KINDS[box.template] === 'item') ?? null;
  const isCreature = infoboxes.some((box) => INFOBOX_KINDS[box.template] === 'creature');

  const page: WikiPage = {
    title: pageTitle,
    html: String(row.html),
    infoboxes,
    kind: 'text',
    itemParams: itemBox?.params ?? null,
    item: null,
    creature: null,
    listItems: [],
    listCreatures: [],
  };

  if (itemBox) {
    page.kind = 'item';
    const item = await query('select data from items where title = ?', [pageTitle]);
    page.item = item[0] ? (JSON.parse(String(item[0].data)) as ItemRecord) : null;
    return page;
  }
  if (isCreature) {
    page.kind = 'creature';
    const creature = await query('select data from creatures where title = ?', [pageTitle]);
    page.creature = creature[0] ? (JSON.parse(String(creature[0].data)) as Creature) : null;
    return page;
  }

  // A list page: the records of the pages it links to.
  const links = JSON.parse(String(row.links)) as string[];
  if (links.length > 0) {
    const json = JSON.stringify(links);
    const items = await query(
      'select i.data from json_each(?) j join items i on i.title = j.value order by j.key',
      [json],
    );
    const creatures = await query(
      'select c.data from json_each(?) j join creatures c on c.title = j.value order by j.key',
      [json],
    );
    if (items.length + creatures.length >= LIST_MIN_RECORDS) {
      page.kind = 'list';
      page.listItems = items.map((r) => JSON.parse(String(r.data)) as ItemRecord);
      page.listCreatures = creatures.map((r) => JSON.parse(String(r.data)) as Creature);
    }
  }
  return page;
}

/** The snapshot's images: the wiki's file name to the file in the images folder. */
export async function loadImageFiles(query: QueryFn): Promise<Map<string, string>> {
  const rows = await query('select name, file from images');
  return new Map(rows.map((row) => [String(row.name), String(row.file)]));
}
