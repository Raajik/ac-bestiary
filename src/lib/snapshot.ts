// The wiki snapshot: the pages of the slice, read from the wiki API into one
// SQLite file plus an images folder (spec wiki-app.md, "The snapshot").

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

import type { WikiApi } from './wiki-api.js';
import { INFOBOX_KINDS, readInfoboxes, type Infobox } from './wikitext.js';

/** The seed pages of the first slice. */
export const SLICE_SEEDS = ['Quiddity Weapons', 'Tusker'];

/** Titles a `prop=info` or `prop=imageinfo` call takes at once (the API's limit). */
const BATCH = 50;

const SCHEMA = `
create table if not exists pages (
  title text primary key,
  pageid integer not null,
  revid integer not null,
  html text not null,
  wikitext text not null,
  categories text not null,  -- JSON: category names, without "Category:"
  links text not null,       -- JSON: article titles the page links to
  images text not null,      -- JSON: file names the page uses, as the wiki writes them ("A_b.png")
  infoboxes text not null,   -- JSON: Infobox[]
  fetched text not null
);
create table if not exists redirects (source text primary key, target text not null);
create table if not exists images (name text primary key, file text not null, sha1 text not null, fetched text not null);
create virtual table if not exists search using fts5(title, body);
`;

export function openSnapshot(path: string): DatabaseSync {
  const db = new DatabaseSync(path);
  db.exec(SCHEMA);
  // A snapshot made before images kept their sha1 gets the column; its images fetch once more.
  const columns = db.prepare('pragma table_info(images)').all() as { name: string }[];
  if (!columns.some((c) => c.name === 'sha1')) db.exec("alter table images add column sha1 text not null default ''");
  return db;
}

/** Empty the game record tables that tools/build-app-data.ts fills (spec wiki-app.md, "Game records in the snapshot"). */
export function resetGameRecords(db: DatabaseSync): void {
  db.exec(`
    drop table if exists items;
    drop table if exists creatures;
    create table items (title text primary key, data text not null);       -- JSON: ItemRecord
    create table creatures (title text primary key, data text not null);   -- JSON: the bestiary's Creature
  `);
}

export interface SnapshotOptions {
  /** The images folder. */
  imagesDir: string;
  /** Progress lines; the tests pass a no-op. */
  log?: (line: string) => void;
}

export interface SnapshotResult {
  /** Pages in this run's crawl. */
  pages: number;
  /** Pages fetched because they were new or had a new revision. */
  fetched: number;
  /** Images downloaded. */
  images: number;
  /** Pages or images that failed after the API's retries. */
  failed: string[];
}

interface InfoReply {
  query?: {
    normalized?: { from: string; to: string }[];
    redirects?: { from: string; to: string }[];
    pages?: { title: string; ns: number; missing?: boolean; invalid?: boolean; lastrevid?: number }[];
  };
}

interface ParseReply {
  parse: {
    title: string;
    pageid: number;
    revid: number;
    text: string;
    wikitext: string;
    categories: { category: string }[];
    links: { ns: number; title: string; exists: boolean }[];
    images: string[];
  };
}

interface ImageInfoReply {
  query?: {
    normalized?: { from: string; to: string }[];
    pages?: { title: string; missing?: boolean; imageinfo?: { url: string; sha1: string }[] }[];
  };
}

interface Visit {
  title: string;
  /** 0 for a seed, 1 for a page a seed links to, and so on. */
  level: number;
}

/** Whether the crawl follows a page's links (spec: seeds, and linked pages with an item or creature template). */
export function followsLinks(level: number, infoboxes: Infobox[]): boolean {
  if (level === 0) return true;
  if (level > 1) return false;
  return infoboxes.some((box) => INFOBOX_KINDS[box.template] === 'item' || INFOBOX_KINDS[box.template] === 'creature');
}

/** The page's text as plain words, for the full-text index. */
function plainHtml(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#160;|&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Run `write` as one transaction, so a failure leaves none of its writes. */
function inTransaction(db: DatabaseSync, write: () => void): void {
  db.exec('begin');
  try {
    write();
    db.exec('commit');
  } catch (error) {
    db.exec('rollback');
    throw error;
  }
}

/** The file name an image is saved under: the wiki's name, safe for every file system. */
export function imageFileName(name: string): string {
  return name.replace(/[\\/:*?"<>|]/g, '_');
}

function chunks<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/** Build or update the snapshot from the seed pages. */
export async function runSnapshot(
  api: WikiApi,
  db: DatabaseSync,
  seeds: string[],
  options: SnapshotOptions,
): Promise<SnapshotResult> {
  const log = options.log ?? (() => {});
  const result: SnapshotResult = { pages: 0, fetched: 0, images: 0, failed: [] };
  const now = new Date().toISOString();

  const storedRev = db.prepare('select revid, links, infoboxes, images from pages where title = ?');
  const putRedirect = db.prepare('insert or replace into redirects (source, target) values (?, ?)');
  const putPage = db.prepare(
    `insert or replace into pages (title, pageid, revid, html, wikitext, categories, links, images, infoboxes, fetched)
     values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  const dropSearch = db.prepare('delete from search where title = ?');
  const putSearch = db.prepare('insert into search (title, body) values (?, ?)');
  const dropPage = db.prepare('delete from pages where title = ?');
  const dropRedirect = db.prepare('delete from redirects where source = ?');
  const dropRedirectsTo = db.prepare('delete from redirects where target = ?');

  const seen = new Set<string>();
  const usedImages = new Set<string>();
  let frontier: Visit[] = seeds.map((title) => ({ title, level: 0 }));

  while (frontier.length > 0) {
    // 1. The current revision of every title, 50 to a call. Redirects resolve to their target.
    const level = new Map<string, number>();
    for (const visit of frontier) {
      const known = level.get(visit.title);
      if (known === undefined || visit.level < known) level.set(visit.title, visit.level);
    }
    const titles = [...level.keys()].sort();
    const current: { title: string; revid: number; level: number }[] = [];

    for (const batch of chunks(titles, BATCH)) {
      const reply = (await api.get({
        action: 'query',
        prop: 'info',
        redirects: '1',
        titles: batch.join('|'),
      })) as InfoReply;
      // A title goes through MediaWiki's spelling fix, then through a redirect, to the page it opens.
      const target = new Map<string, string>();
      for (const fix of reply.query?.normalized ?? []) target.set(fix.from, fix.to);
      const redirectTo = new Map((reply.query?.redirects ?? []).map((r) => [r.from, r.to]));
      // A redirect can lead to another redirect; follow it to the end (a loop stops at the first repeat).
      const finalTarget = (title: string): string => {
        const passed = new Set<string>();
        let to = title;
        while (redirectTo.has(to) && !passed.has(to)) {
          passed.add(to);
          to = redirectTo.get(to)!;
        }
        return to;
      };
      inTransaction(db, () => {
        for (const from of redirectTo.keys()) {
          putRedirect.run(from, finalTarget(from));
          // A title that is a redirect now is no page of its own any more.
          dropPage.run(from);
          dropSearch.run(from);
        }
      });
      const levelOf = new Map<string, number>();
      for (const title of batch) {
        const to = finalTarget(target.get(title) ?? title);
        levelOf.set(to, Math.min(levelOf.get(to) ?? Infinity, level.get(title)!));
      }
      for (const page of reply.query?.pages ?? []) {
        if (page.missing && page.ns === 0) {
          // The wiki says the page is gone: so is its copy.
          inTransaction(db, () => {
            dropPage.run(page.title);
            dropSearch.run(page.title);
            dropRedirect.run(page.title);
            dropRedirectsTo.run(page.title);
          });
          continue;
        }
        if (page.invalid || page.ns !== 0 || !page.lastrevid) continue;
        const pageLevel = levelOf.get(page.title);
        if (pageLevel === undefined || seen.has(page.title)) continue;
        seen.add(page.title);
        // A title that is a page now is no redirect any more.
        dropRedirect.run(page.title);
        current.push({ title: page.title, revid: page.lastrevid, level: pageLevel });
      }
    }

    // 2. Fetch the new and changed pages; keep the rest as stored.
    const next: Visit[] = [];
    await Promise.all(
      current.map(async (page) => {
        result.pages++;
        const stored = storedRev.get(page.title) as
          | { revid: number; links: string; infoboxes: string; images: string }
          | undefined;

        let links: string[];
        let infoboxes: Infobox[];
        let images: string[];

        if (stored && stored.revid === page.revid) {
          links = JSON.parse(stored.links);
          infoboxes = JSON.parse(stored.infoboxes);
          images = JSON.parse(stored.images);
        } else {
          let reply: ParseReply;
          try {
            reply = (await api.get({
              action: 'parse',
              page: page.title,
              prop: 'text|wikitext|links|images|categories|revid',
              disableeditsection: '1',
              disablelimitreport: '1',
            })) as ParseReply;
          } catch (error) {
            result.failed.push(`page ${page.title}: ${error}`);
            log(`failed: ${page.title}: ${error}`);
            return;
          }
          const parse = reply.parse;
          // Red links too: a page deleted since the last run is then asked for, found missing, and dropped.
          links = parse.links.filter((link) => link.ns === 0).map((link) => link.title);
          infoboxes = readInfoboxes(parse.wikitext);
          images = parse.images;

          inTransaction(db, () => {
            putPage.run(
              page.title,
              parse.pageid,
              parse.revid,
              parse.text,
              parse.wikitext,
              JSON.stringify(parse.categories.map((c) => c.category.replace(/_/g, ' '))),
              JSON.stringify(links),
              JSON.stringify(images),
              JSON.stringify(infoboxes),
              now,
            );
            dropSearch.run(page.title);
            putSearch.run(page.title, plainHtml(parse.text));
          });
          result.fetched++;
          log(`page ${page.title} (rev ${parse.revid})`);
        }

        for (const image of images) usedImages.add(image);
        if (followsLinks(page.level, infoboxes)) {
          for (const link of links) if (!seen.has(link)) next.push({ title: link, level: page.level + 1 });
        }
      }),
    );
    frontier = next;
  }

  // 3. The images the pages use: ask the wiki for each one's sha1 (50 to a call), and fetch the new and changed ones.
  const storedImage = db.prepare('select sha1, file from images where name = ?');
  const putImage = db.prepare('insert or replace into images (name, file, sha1, fetched) values (?, ?, ?, ?)');
  const names = [...usedImages].sort();

  for (const batch of chunks(names, BATCH)) {
    const reply = (await api.get({
      action: 'query',
      prop: 'imageinfo',
      iiprop: 'url|sha1',
      titles: batch.map((name) => `File:${name}`).join('|'),
    })) as ImageInfoReply;
    // The reply names a file as MediaWiki spells it ("File:A b.png"); the pages name it "A_b.png".
    const spelled = new Map((reply.query?.normalized ?? []).map((fix) => [fix.from, fix.to]));
    const byTitle = new Map(batch.map((name) => [spelled.get(`File:${name}`) ?? `File:${name}`, name]));

    await Promise.all(
      (reply.query?.pages ?? []).map(async (page) => {
        const name = byTitle.get(page.title);
        const info = page.imageinfo?.[0];
        if (!name || page.missing || !info?.url) return;
        const stored = storedImage.get(name) as { sha1: string; file: string } | undefined;
        if (stored && stored.sha1 === info.sha1 && existsSync(join(options.imagesDir, stored.file))) return;
        try {
          const bytes = await api.download(info.url);
          mkdirSync(options.imagesDir, { recursive: true });
          const file = imageFileName(name);
          writeFileSync(join(options.imagesDir, file), bytes);
          putImage.run(name, file, info.sha1, now);
          result.images++;
        } catch (error) {
          result.failed.push(`image ${name}: ${error}`);
          log(`failed: image ${name}: ${error}`);
        }
      }),
    );
  }

  return result;
}
