// Take viewport screenshots of the wiki app's main screens for a design review (same Node-side stand-in for the
// Rust calls as tools/app-check.ts). Screenshots are viewport-sized, never full page: Chromium repeats the picture
// of a full-page shot taller than 16384 px.
//
// Run: npx tsx tools/design-shots.ts [out-dir]   (default .agent-log/design-shots/<time>/)

import { closeSync, mkdirSync, openSync, readFileSync, readSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { chromium, type Page } from 'playwright';
import { createServer } from 'vite';

import { PORTAL_DAT, SNAPSHOT_DIR } from '../src/lib/paths.js';

const root = join(import.meta.dirname, '..');
const out = process.argv[2] ?? join(root, '.agent-log', 'design-shots', new Date().toISOString().replace(/[:.]/g, '-'));
mkdirSync(out, { recursive: true });

const db = new DatabaseSync(join(SNAPSHOT_DIR, 'wiki.sqlite'), { readOnly: true });
const dat = openSync(PORTAL_DAT, 'r');

/** The Rust side's commands, answered from Node. */
function invoke(cmd: string, args: Record<string, unknown>): unknown {
  switch (cmd) {
    case 'snapshot_query':
      return db.prepare(String(args.sql)).all(...((args.params as never[]) ?? []));
    case 'install_folder':
      return dirname(PORTAL_DAT);
    case 'set_install_folder':
      // The real command rejects a folder with no client_portal.dat in it.
      if (String(args.folder).includes('nowhere')) throw new Error(`${args.folder} has no client_portal.dat`);
      return args.folder;
    case 'pick_install_folder':
      return dirname(PORTAL_DAT);
    case 'read_dat_range': {
      const bytes = Buffer.alloc(Number(args.length));
      const n = readSync(dat, bytes, 0, bytes.length, Number(args.offset));
      return { base64: bytes.subarray(0, n).toString('base64') };
    }
    default:
      throw new Error(`unknown command ${cmd}`);
  }
}

const MOCK = `
  window.__TAURI_INTERNALS__ = {
    async invoke(cmd, args) {
      const reply = JSON.parse(await window.appCheckInvoke(cmd, JSON.stringify(args ?? {})));
      if (reply.error) throw reply.error;
      const value = reply.value;
      if (value && typeof value.base64 === 'string') return Uint8Array.from(atob(value.base64), (c) => c.charCodeAt(0)).buffer;
      return value;
    },
    transformCallback: () => 0,
    unregisterCallback: () => {},
    convertFileSrc: (path, protocol) => 'http://' + protocol + '.localhost/' + encodeURIComponent(path),
  };`;


const vite = await createServer({ configFile: join(root, 'vite.config.ts'), mode: 'app', server: { port: 5176, strictPort: true } });
await vite.listen();
const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--mute-audio'] });

/** Wait until every picture near the screen has its data URL (the stills render when a tile nears the screen). */
async function stillsDrawn(page: Page, selector: string, timeout = 120_000): Promise<void> {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const waiting = await page.$$eval(selector, (imgs) =>
      imgs.filter((img) => {
        const box = img.getBoundingClientRect();
        const near = box.bottom > -400 && box.top < window.innerHeight + 400;
        const el = img as HTMLImageElement;
        return near && !el.src.startsWith('data:') && !el.classList.contains('no-model') && !el.src.startsWith('http');
      }).length,
    );
    if (waiting === 0) return;
    await page.waitForTimeout(500);
  }
}

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('pageerror', (error) => console.log('PAGE ERROR', error.message));
  await page.exposeFunction('appCheckInvoke', (cmd: string, args: string) => {
    try {
      return JSON.stringify({ value: invoke(cmd, JSON.parse(args)) });
    } catch (error) {
      return JSON.stringify({ error: String(error) });
    }
  });
  await page.addInitScript(MOCK);
  await page.route('http://snap.localhost/**', (route) => {
    const file = decodeURIComponent(new URL(route.request().url()).pathname.slice(1));
    try {
      route.fulfill({ body: readFileSync(join(SNAPSHOT_DIR, 'images', file)) });
    } catch {
      route.fulfill({ status: 404 });
    }
  });
  const shot = async (name: string): Promise<void> => {
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(out, `${name}.png`) });
    console.log('shot', name);
  };
  const go = async (hash: string): Promise<void> => {
    await page.evaluate((h) => (location.hash = h), hash);
    await page.waitForTimeout(500);
  };
  const scrollTo = (selector: string) => page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: 'start' }), selector);

  await page.goto('http://localhost:5176/');
  await page.waitForSelector('.home');
  await stillsDrawn(page, '.feature-still img');
  await shot('01-home');
  await page.evaluate(() => document.querySelector('.browse-row')?.scrollIntoView({ block: 'start' }));
  await shot('01b-home-browse');
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.fill('#search', 'quiddity');
  await page.waitForSelector('.result');
  await stillsDrawn(page, '.result-thumb img');
  await page.waitForFunction(() => !document.querySelector('.result-group[data-kind="item"] .result-thumb.glyph'), undefined, { timeout: 30_000 }).catch(() => undefined);
  await shot('02-search');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await shot('02b-search-end');
  await page.evaluate(() => window.scrollTo(0, 0));

  await go('#/page/Quiddity%20Weapons');
  await page.waitForSelector('.list-grid .tile');
  await stillsDrawn(page, '.list-grid .tile img');
  await shot('03-quiddity-weapons');
  await scrollTo('.list-grid');
  await shot('04-quiddity-grid');

  await go('#/page/Bow%20of%20the%20Quiddity');
  await page.waitForSelector('.appraisal-rows');
  await page.waitForTimeout(3000);
  await shot('05-bow');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await shot('05b-bow-scrolled');
  await page.evaluate(() => window.scrollTo(0, 0));

  await go('#/page/Tusker');
  await page.waitForSelector('.list-grid .tile');
  await stillsDrawn(page, '.list-grid .tile img');
  await stillsDrawn(page, '.row-still');
  await shot('06-tusker');
  await page.evaluate(() => (document.querySelectorAll('.view-switch button')[0] as HTMLElement | undefined)?.click());
  await scrollTo('.list-grid');
  await stillsDrawn(page, '.list-grid .tile img');
  await shot('07-tusker-grid');
  await page.evaluate(() => (document.querySelectorAll('.view-switch button')[1] as HTMLElement | undefined)?.click());
  await page.waitForTimeout(300);
  await page.evaluate(() => document.querySelector('.creature-table')?.scrollIntoView({ block: 'start' }));
  await stillsDrawn(page, '.row-still');
  await shot('07b-tusker-table');
  await page.evaluate(() => (document.querySelectorAll('.view-switch button')[0] as HTMLElement | undefined)?.click());
  await stillsDrawn(page, '.list-grid .tile img');
  await page.click('.list-grid button.tile');
  await page.waitForSelector('#detail:not([hidden]) .appraisal');
  await page.waitForTimeout(3000);
  await shot('08-tusker-open');
  await page.keyboard.press('Escape');

  await go('#/page/Tusker%20Guard');
  await page.waitForSelector('.side .appraisal');
  await page.waitForTimeout(3000);
  await shot('09-tusker-guard');
  await go('#/');
  await stillsDrawn(page, '.feature-still img');
  await shot('09b-home-recent');
  await go('#/categories');
  await shot('09c-categories');

  // The states without content: nothing found, no such page, and the first-run folder question.
  await go('#/search/zzzzqq');
  await page.waitForSelector('.empty-state');
  await shot('09d-empty-search');
  await go('#/page/No%20such%20page');
  await page.waitForSelector('.missing');
  await shot('09e-missing-page');
  await go('#/setup');
  await page.waitForSelector('.setup');
  await shot('09f-setup');
  // A folder that holds no client_portal.dat: the message says what to do.
  await page.fill('.setup input', 'C:\\nowhere\\Asheron');
  await page.click('.setup button.secondary');
  await page.waitForSelector('.setup-note.error');
  await shot('09g-setup-error');

  await page.setViewportSize({ width: 390, height: 844 });
  await go('#/page/Bow%20of%20the%20Quiddity');
  await page.waitForSelector('.appraisal-rows', { state: 'attached' });
  await page.waitForTimeout(2500);
  await shot('10-mobile-bow');
  await page.evaluate(() => window.scrollTo(0, 600));
  await shot('10b-mobile-bow-stats');
  await page.click('.jump button[data-tab="article"]');
  await shot('10c-mobile-bow-article');
  await go('#/');
  await shot('11-mobile-home');
} finally {
  await browser.close();
  await vite.close();
  closeSync(dat);
}
