// Check the wiki app's pages in headless Chromium (no window), against the real snapshot and client_portal.dat.
//
// The pages run as they do in Tauri; the four calls to the Rust side (src-tauri/src/lib.rs) are answered here from
// Node with the same data: SQL on the snapshot, byte ranges of the DAT, the install folder, the snapshot's images.
// It checks the spec's "First slice: done when" items that a browser can see and saves a screenshot of each page.
// It does not check WebKitGTK or WebView2 themselves; the user runs the real app for that.
//
// Run: npx tsx tools/app-check.ts   (results in .agent-log/app-check/<time>/)

import { closeSync, mkdirSync, openSync, readFileSync, readSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { chromium, type Page } from 'playwright';
import { createServer } from 'vite';

import { PORTAL_DAT, SNAPSHOT_DIR } from '../src/lib/paths.js';

const root = join(import.meta.dirname, '..');
const out = join(root, '.agent-log', 'app-check', new Date().toISOString().replace(/[:.]/g, '-'));
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
      return args.folder;
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

interface Check {
  name: string;
  ok: boolean;
  detail: string;
}
const checks: Check[] = [];
function check(name: string, ok: boolean, detail = ''): void {
  checks.push({ name, ok, detail });
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? `: ${detail}` : ''}`);
}

async function visit(page: Page, hash: string): Promise<void> {
  await page.evaluate((h) => (location.hash = h), hash);
  await page.waitForTimeout(300);
}

/** Wait until `count` images in `selector` have a data URL (the stills), or the time runs out. */
async function stillsDrawn(page: Page, selector: string, timeout = 300_000): Promise<number> {
  const started = Date.now();
  let drawn = 0;
  let total = 0;
  while (Date.now() - started < timeout) {
    [drawn, total] = await page.$$eval(selector, (imgs) => [
      imgs.filter((img) => (img as HTMLImageElement).src.startsWith('data:')).length,
      imgs.length,
    ]);
    if (total > 0 && drawn === total) break;
    await page.waitForTimeout(1000);
  }
  return drawn;
}

const vite = await createServer({ configFile: join(root, 'vite.config.ts'), mode: 'app', server: { port: 5175, strictPort: true } });
await vite.listen();
const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--mute-audio'] });
const errors: string[] = [];

try {
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
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

  await page.goto('http://localhost:5175/');
  await page.waitForSelector('.home');

  // Search "quiddity" lists Quiddity Weapons.
  await page.fill('#search', 'quiddity');
  await page.waitForSelector('.title-hits li');
  const titles = await page.$$eval('.title-hits a', (as) => as.map((a) => a.textContent));
  check('search "quiddity" lists Quiddity Weapons', titles.includes('Quiddity Weapons'), titles.slice(0, 4).join(', '));
  await page.screenshot({ path: join(out, '1-search.png') });

  // Quiddity Weapons: its table with icons, and the model grid.
  await visit(page, '#/page/Quiddity%20Weapons');
  await page.waitForSelector('.wiki-text table');
  const icons = await page.$$eval('.wiki-text table img', (imgs) =>
    imgs.filter((img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0).length,
  );
  check('Quiddity Weapons shows its table with icons', icons >= 20, `${icons} icons drawn`);
  const itemStills = await stillsDrawn(page, '.list-grid .tile img');
  check('Quiddity Weapons shows a model grid', itemStills >= 20, `${itemStills} stills`);
  await page.screenshot({ path: join(out, '2-quiddity-weapons.png'), fullPage: true });

  // Bow of the Quiddity: model, appraisal panel with the template's stats, and its notes.
  await visit(page, '#/page/Bow%20of%20the%20Quiddity');
  await page.waitForSelector('.appraisal-rows');
  const rows = await page.$$eval('.appraisal-rows dt', (dts) =>
    Object.fromEntries(dts.map((dt) => [dt.textContent, (dt.nextElementSibling as HTMLElement).innerText])),
  );
  check('Bow: Damage Modifier 113', rows['Damage Modifier']?.startsWith('113') ?? false, rows['Damage Modifier']);
  check('Bow: Speed Slow (50)', rows['Speed']?.startsWith('Slow (50)') ?? false, rows['Speed']);
  check('Bow: Range 75', rows['Range']?.startsWith('75') ?? false, rows['Range']);
  check(
    'Bow: its three spells',
    /Aura of Defender IV, Aura of Blood Drinker V, Aura of Swift Killer IV/.test(rows['Spells'] ?? ''),
    rows['Spells'],
  );
  const notes = await page.$eval('.wiki-text', (el) => (el as HTMLElement).innerText);
  check('Bow: its notes', notes.includes('Crafter of Bows') && notes.includes('Weapon Upgrade Kit'));
  await page.waitForTimeout(3000);
  // A WebGL canvas reads back blank after its frame; read it in the next animation frame, after the app's draw.
  const modelPixels = await page.$eval('.side .viewer canvas', (canvas) => new Promise<number>((resolve) => requestAnimationFrame(() => {
    const copy = document.createElement('canvas');
    copy.width = (canvas as HTMLCanvasElement).width;
    copy.height = (canvas as HTMLCanvasElement).height;
    const context = copy.getContext('2d')!;
    context.drawImage(canvas as HTMLCanvasElement, 0, 0);
    const data = context.getImageData(0, 0, copy.width, copy.height).data;
    let drawn = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] > 0) drawn++;
    resolve(drawn);
  })));
  check('Bow: its model draws', modelPixels > 500, `${modelPixels} pixels`);
  await page.screenshot({ path: join(out, '3-bow-of-the-quiddity.png') });

  // Tusker: the wiki's text with the creature grid; a Tusker opens the bestiary's view.
  await visit(page, '#/page/Tusker');
  await page.waitForSelector('.list-grid .tile');
  const creatureStills = await stillsDrawn(page, '.list-grid .tile img');
  check('Tusker shows the creature grid', creatureStills >= 30, `${creatureStills} stills`);
  await page.screenshot({ path: join(out, '4-tusker.png'), fullPage: true });
  await page.click('.list-grid button.tile');
  await page.waitForSelector('#detail:not([hidden]) .appraisal');
  await page.waitForTimeout(3000);
  const motions = await page.$$eval('#motions button', (bs) => bs.map((b) => b.textContent));
  check('a Tusker opens the bestiary view with its motions', motions.includes('Idle') && motions.length >= 3, motions.join(', '));
  await page.screenshot({ path: join(out, '5-tusker-open.png') });
  await page.keyboard.press('Escape');

  // A creature page shows the bestiary view beside its text.
  await visit(page, '#/page/Tusker%20Guard');
  await page.waitForSelector('.side .appraisal');
  check('Tusker Guard shows the bestiary view beside its text', true);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: join(out, '6-tusker-guard.png') });

  check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (error) {
  check('the run finished', false, String(error));
} finally {
  await browser.close();
  await vite.close();
  closeSync(dat);
}

const failed = checks.filter((c) => !c.ok);
const state = failed.length === 0 ? 'PASSED' : 'FAILED';
writeFileSync(join(out, 'result.json'), JSON.stringify({ state, checks }, null, 2));
console.log(`${state}: ${checks.length - failed.length} of ${checks.length} checks; ${out}`);
process.exitCode = failed.length === 0 ? 0 : 1;
