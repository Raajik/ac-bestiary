// The AC wiki app (spec wiki-app.md, "The app"): first run, search, and the page views. Routes live in the hash:
// `#/page/<title>`, `#/search/<words>`, `#/setup`, and `#/` for the start page.

import type { ItemRecord } from '../lib/game-records.js';
import type { Creature } from '../lib/types.js';
import { defaultVariant, renderGrid } from '../page/grid.js';
import { OpenView, variantSpec } from '../page/open-view.js';
import { installFolder, query, setInstallFolder, snapshotImageUrl } from './api.js';
import { AppDat } from './dat.js';
import { itemSpec, renderItemSide } from './item-view.js';
import { loadImageFiles, loadPage, search, type WikiPage } from './pages.js';
import { pageHref, sanitizeWikiHtml } from './sanitize.js';
import { StillRenderer } from './stills.js';

function need<T extends Element>(selector: string): T {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error(`missing element ${selector}`);
  return node;
}

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function link(text: string, href: string): HTMLAnchorElement {
  const a = element('a', undefined, text);
  a.href = href;
  return a;
}

const view = need<HTMLElement>('#view');
const detail = need<HTMLElement>('#detail');
const searchBox = need<HTMLInputElement>('#search');
const parser = new DOMParser();

let images = new Map<string, string>();
let dat: AppDat | null = null;
let stills: StillRenderer | null = null;
/** Stops what the current view runs (model draw loops). */
let leaveView: () => void = () => {};

const wikiImage = (name: string): string | null => {
  const file = images.get(name);
  return file ? snapshotImageUrl(file) : null;
};

/** The panel of the bestiary links spells and trophies to ACPedia; in the app they open the snapshot's pages. */
function appLinks(root: HTMLElement): void {
  for (const a of root.querySelectorAll<HTMLAnchorElement>('a[href^="https://acpedia.org/wiki/"]')) {
    const title = decodeURIComponent(a.getAttribute('href')!.slice('https://acpedia.org/wiki/'.length)).replace(/_/g, ' ');
    a.href = pageHref(title);
    a.removeAttribute('rel');
    a.removeAttribute('target');
  }
}

const modelsFor = async (variant: Parameters<typeof variantSpec>[0]) => {
  if (!dat) throw new Error('no AC install folder is set');
  return dat.loadModel(variantSpec(variant));
};

const overlay = new OpenView(
  {
    canvas: need<HTMLCanvasElement>('#model-canvas'),
    motions: need<HTMLElement>('#motions'),
    hint: need<HTMLElement>('#viewer-hint'),
    panel: need<HTMLElement>('#panel'),
    scrollBox: need<HTMLElement>('.detail-inner'),
  },
  modelsFor,
  appLinks,
);

function openOverlay(creature: Creature): void {
  detail.hidden = false;
  overlay.show(creature, defaultVariant(creature));
}

function closeOverlay(): void {
  detail.hidden = true;
  overlay.stop();
}

function showSetup(message = ''): void {
  view.textContent = '';
  const box = element('section', 'setup');
  box.append(
    element('h1', undefined, 'Where is Asheron\'s Call installed?'),
    element('p', undefined, 'The app draws the game\'s models and icons from your own install. Give the folder that holds client_portal.dat.'),
  );
  const form = element('form');
  const input = element('input');
  input.type = 'text';
  input.placeholder = "C:\\Turbine\\Asheron's Call";
  input.setAttribute('aria-label', 'AC install folder');
  const button = element('button', undefined, 'Use this folder');
  button.type = 'submit';
  const note = element('p', 'setup-note', message);
  form.append(input, button);
  box.append(form, note);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setInstallFolder(input.value)
      .then(async () => {
        dat = await AppDat.open();
        stills = new StillRenderer(dat);
        location.hash = '#/';
        route();
      })
      .catch((error) => {
        note.textContent = String(error);
      });
  });
  view.append(box);
  input.focus();
}

function showHome(): void {
  view.textContent = '';
  const box = element('section', 'home');
  box.append(element('h1', undefined, 'AC Wiki'), element('p', undefined, 'Search above, or start with:'));
  const list = element('ul');
  for (const title of ['Quiddity Weapons', 'Tusker']) {
    const li = element('li');
    li.append(link(title, pageHref(title)));
    list.append(li);
  }
  box.append(list);
  view.append(box);
}

async function showSearch(words: string): Promise<void> {
  const hits = await search(query, words);
  view.textContent = '';
  const box = element('section', 'search-results');
  box.append(element('h1', undefined, `Search: ${words}`));
  if (hits.titles.length === 0 && hits.text.length === 0) box.append(element('p', undefined, 'No page found.'));

  if (hits.titles.length > 0) {
    const list = element('ul', 'title-hits');
    for (const title of hits.titles) {
      const li = element('li');
      li.append(link(title, pageHref(title)));
      list.append(li);
    }
    box.append(element('h2', undefined, 'Pages'), list);
  }
  if (hits.text.length > 0) {
    const list = element('ul', 'text-hits');
    for (const hit of hits.text) {
      const li = element('li');
      const snippet = element('p', 'snippet');
      // The snippet is plain text; only the match markers become <mark>.
      for (const [i, part] of hit.snippet.split(/\[\[|\]\]/).entries()) {
        snippet.append(i % 2 === 1 ? element('mark', undefined, part) : document.createTextNode(part));
      }
      li.append(link(hit.title, pageHref(hit.title)), snippet);
      list.append(li);
    }
    box.append(element('h2', undefined, 'In the text'), list);
  }
  view.append(box);
}

function itemTile(item: ItemRecord): HTMLElement {
  const variant = item.variants[0];
  const tile = element('a', 'tile');
  tile.href = pageHref(item.title);
  const image = element('img');
  image.alt = item.title;
  tile.append(image, element('div', 'tile-name', item.title));
  stills?.render(itemSpec(variant), true).then((url) => (image.src = url)).catch(() => undefined);
  return tile;
}

function renderListGrid(page: WikiPage): HTMLElement {
  const section = element('section', 'list-grid');
  section.append(element('h2', undefined, 'Models'));
  if (!dat) section.append(element('p', 'hint', 'Set the AC install folder to see the models.'));
  if (page.listItems.length > 0) {
    const grid = element('div', 'grid');
    for (const item of page.listItems) grid.append(itemTile(item));
    section.append(grid);
  }
  if (page.listCreatures.length > 0) {
    const grid = element('div', 'grid');
    renderGrid(grid, page.listCreatures, openOverlay, (variant, image) => {
      stills?.render(variantSpec(variant)).then((url) => (image.src = url)).catch(() => undefined);
    });
    section.append(grid);
  }
  return section;
}

function renderCreatureSide(side: HTMLElement, creature: Creature): () => void {
  side.innerHTML = `
    <div class="viewer"><canvas></canvas><div class="motions"></div><p class="hint">Drag to turn the model.</p></div>
    <div class="panel"></div>`;
  const view = new OpenView(
    {
      canvas: side.querySelector('canvas')!,
      motions: side.querySelector('.motions')!,
      hint: side.querySelector('.hint')!,
      panel: side.querySelector('.panel')!,
    },
    modelsFor,
    appLinks,
  );
  view.show(creature, defaultVariant(creature));
  return () => view.stop();
}

async function showPage(title: string): Promise<void> {
  const page = await loadPage(query, title);
  view.textContent = '';
  if (!page) {
    view.append(element('section', 'missing', `The snapshot has no page "${title}".`));
    return;
  }

  const layout = element('div', 'page-layout');
  const article = element('article', 'wiki-text');
  article.append(element('h1', undefined, page.title));
  const body = element('div');
  body.innerHTML = sanitizeWikiHtml(page.html, parser, { imageUrl: wikiImage });
  article.append(body);
  layout.append(article);

  if (page.kind === 'item' || (page.kind === 'creature' && page.creature)) {
    const side = element('aside', 'side');
    layout.classList.add('has-side');
    layout.append(side);
    leaveView =
      page.kind === 'item' ? renderItemSide(side, page, dat, wikiImage) : renderCreatureSide(side, page.creature!);
  }
  view.append(layout);
  if (page.kind === 'list') view.append(renderListGrid(page));
  document.title = `${page.title} – AC Wiki`;
}

async function route(): Promise<void> {
  leaveView();
  leaveView = () => {};
  closeOverlay();
  window.scrollTo(0, 0);

  const [, kind, ...rest] = location.hash.split('/');
  const arg = decodeURIComponent(rest.join('/'));
  try {
    if (kind === 'setup') showSetup();
    else if (kind === 'page' && arg) await showPage(arg);
    else if (kind === 'search' && arg) await showSearch(arg);
    else showHome();
  } catch (error) {
    view.textContent = `This page did not load: ${error}`;
  }
}

async function main(): Promise<void> {
  images = await loadImageFiles(query);

  let searchTimer = 0;
  searchBox.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      const words = searchBox.value.trim();
      if (words) location.hash = `#/search/${encodeURIComponent(words)}`;
    }, 250);
  });
  need<HTMLFormElement>('#search-form').addEventListener('submit', (event) => event.preventDefault());
  need<HTMLButtonElement>('#close').addEventListener('click', closeOverlay);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !detail.hidden) closeOverlay();
  });
  window.addEventListener('hashchange', () => void route());

  if (!(await installFolder())) {
    showSetup();
    return;
  }
  try {
    dat = await AppDat.open();
    stills = new StillRenderer(dat);
  } catch (error) {
    showSetup(`The install folder's client_portal.dat did not open: ${error}`);
    return;
  }
  await route();
}

main().catch((error) => {
  view.textContent = `The app did not start: ${error}`;
});
