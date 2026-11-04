// The AC wiki app (spec wiki-app.md, "The app"): first run, search, and the page views. Routes live in the hash:
// `#/page/<title>`, `#/search/<words>`, `#/browse/items`, `#/browse/creatures`, `#/category/<name>`, `#/setup`, and
// `#/` for the start page.

import { wikiText, type ItemRecord, type ItemVariant } from '../lib/game-records.js';
import type { Creature, Variant } from '../lib/types.js';
import { RESISTANCE_LABELS } from '../page/panel.js';
import { defaultVariant, renderGrid, visibleCreatures, type SortKey } from '../page/grid.js';
import { OpenView, variantSpec } from '../page/open-view.js';
import { installFolder, pickInstallFolder, query, setInstallFolder, snapshotImageUrl } from './api.js';
import { AppDat } from './dat.js';
import { itemSpec, renderItemSide } from './item-view.js';
import {
  describeTitles,
  loadAllCreatures,
  loadAllItems,
  loadCategories,
  loadCategory,
  loadImageFiles,
  loadPage,
  loadStats,
  search,
  type HitInfo,
  type WikiPage,
  familyRoot,
} from './pages.js';
import { pageHref, sanitizeWikiHtml } from './sanitize.js';
import { StillRenderer } from './stills.js';
import { tidyWikiDom } from './tidy.js';

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
  // The panel's trophy pictures come from the bestiary's icons folder; the app reads them from the AC install.
  for (const image of root.querySelectorAll<HTMLImageElement>('.trophy img[data-icon]')) {
    const id = Number(image.dataset.icon);
    dat?.iconUrl(id).then((url) => {
      if (url) {
        image.src = url;
        image.classList.remove('missing');
      }
    });
  }
}

const modelsFor = async (variant: Parameters<typeof variantSpec>[0]) => {
  if (!dat) throw new Error('no AC install folder is set');
  return dat.loadModel(variantSpec(variant));
};

/** The links of the open view, and a way to the creature's own wiki page. */
function overlayLinks(root: HTMLElement, creature: Creature, variant: Variant): void {
  appLinks(root);
  quickFacts(root, creature, variant);
  const name = root.querySelector('h2')?.textContent;
  if (!name || root.querySelector('.open-page')) return;
  const open = link('Open full wiki page →', pageHref(name));
  open.className = 'open-page';
  root.querySelector('.level')?.after(open);
}

/** Under the model: the numbers a player looks for first, so the column beside the long panel is not empty. */
function quickFacts(root: HTMLElement, creature: Creature, variant: Variant): void {
  const column = root.closest('.detail-inner, .side')?.querySelector('.viewer');
  if (!column) return;
  // The head is the same framed card an item's panel has: a picture, the name, and the level under it.
  const name = root.querySelector('.appraisal > h2');
  const level = root.querySelector('.appraisal > .level');
  if (name && level && !root.querySelector('.item-head')) {
    const head = element('div', 'item-head creature-head');
    const icon = element('img', 'item-icon');
    icon.alt = '';
    creatureStill(variant, icon);
    const titles = element('div', 'item-titles');
    titles.append(name, level);
    head.append(icon, titles);
    root.querySelector('.appraisal')?.prepend(head);
  }
  column.querySelector('.quick-facts')?.remove();
  root.querySelector('.quick-facts')?.remove();
  const box = element('dl', 'quick-facts');
  const add = (label: string, value: string): void => {
    const row = element('div');
    row.append(element('dt', undefined, label), element('dd', undefined, value));
    box.append(row);
  };
  add('Armor', String(variant.armorLevel));
  add('XP award', variant.xp.toLocaleString('en'));
  const resistances = RESISTANCE_LABELS.filter(([key]) => variant.resistances[key] !== undefined).map(
    ([key, label]) => [label, variant.resistances[key]] as const,
  );
  if (resistances.length > 0) {
    // Resistances are the share of damage taken: the highest is the weakness, the lowest the best defence.
    const high = Math.max(...resistances.map(([, v]) => v));
    const low = Math.min(...resistances.map(([, v]) => v));
    if (high !== low) {
      add('Weak to', resistances.filter(([, v]) => v === high).map(([k]) => k).join(', '));
      add('Resists', resistances.filter(([, v]) => v === low).map(([k]) => k).join(', '));
    }
  }
  if (variant.trophies.length > 0) {
    add('Drops', `${variant.trophies.length} ${variant.trophies.length === 1 ? 'item' : 'items'} ↓`);
    const row = box.lastElementChild as HTMLElement;
    row.classList.add('jump-row');
    row.tabIndex = 0;
    const toTrophies = (): void => root.querySelector('.trophies')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.addEventListener('click', toTrophies);
    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') toTrophies();
    });
  }
  // On a page the facts follow the vitals, as the appraisal reads: name, level, vitals, then the rest. In the pop-up
  // they fill the empty column under the model.
  const bars = root.closest('.side') ? root.querySelector('.bars') : null;
  if (bars) bars.after(box);
  else column.append(box);
}

const overlay = new OpenView(
  {
    canvas: need<HTMLCanvasElement>('#model-canvas'),
    motions: need<HTMLElement>('#motions'),
    hint: need<HTMLElement>('#viewer-hint'),
    panel: need<HTMLElement>('#panel'),
    scrollBox: need<HTMLElement>('.detail-inner'),
  },
  modelsFor,
  overlayLinks,
);

let overlayOpener: HTMLElement | null = null;

function openOverlay(creature: Creature): void {
  overlayOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  detail.hidden = false;
  overlay.show(creature, defaultVariant(creature));
  need<HTMLButtonElement>('#close').focus();
}

function closeOverlay(): void {
  if (detail.hidden) return;
  detail.hidden = true;
  overlay.stop();
  overlayOpener?.focus();
  overlayOpener = null;
}

/** Run `draw` when `node` comes near the screen: the stills render one after another, so only the near ones wait. */
const lazyObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      lazyObserver.unobserve(entry.target);
      lazyJobs.get(entry.target)?.();
      lazyJobs.delete(entry.target);
    }
  },
  { rootMargin: '400px' },
);
const lazyJobs = new Map<Element, () => void>();
function whenNear(node: Element, draw: () => void): void {
  lazyJobs.set(node, draw);
  lazyObserver.observe(node);
}

/** Put a creature's still into `image` when its tile is near the screen. */
function creatureStill(variant: Variant, image: HTMLImageElement): void {
  if (!stills) return;
  whenNear(image, () => {
    stills?.render(variantSpec(variant)).then((url) => (image.src = url)).catch(() => image.classList.add('no-model'));
  });
}

function itemStill(variant: ItemVariant, image: HTMLImageElement): void {
  if (!stills) return;
  whenNear(image, () => {
    stills
      ?.render(itemSpec(variant), true)
      .then((url) => {
        // A model that fills 2/3 of its own box is a flat plate seen face on (the Weapon Upgrade Kit's wedge).
        if ((stills?.lastFill ?? 0) > 0.64) throw new Error('flat');
        image.src = url;
      })
      .catch(() => {
        // A model that draws as a flat plate says nothing; the game's own inventory icon does.
        image.classList.add('no-model');
        itemIcon(variant, (url) => {
          image.src = url;
          image.classList.add('icon-fallback');
        });
      });
  });
}

/** An item's icon from the AC install, into `image`. */
function itemIcon(variant: ItemVariant | undefined, onUrl: (url: string) => void): void {
  if (!dat || !variant?.icon) return;
  dat.iconUrl(variant.icon).then((url) => {
    if (url) onUrl(url);
  });
}

function showSetup(message = ''): void {
  view.textContent = '';
  const box = element('section', 'setup card');
  box.append(
    element('h1', undefined, 'Where is Asheron\'s Call installed?'),
    element('p', undefined, 'The app draws the game\'s models and icons from your own install. Pick the folder that holds client_portal.dat. The wiki text and stats work without it.'),
  );

  const browse = element('button', 'primary browse', 'Browse for the folder…');
  browse.type = 'button';
  const divider = element('p', 'setup-or', 'or type the folder path');

  const form = element('form');
  const field = element('label', 'setup-field');
  field.append(element('span', undefined, 'Install folder'));
  const input = element('input');
  input.type = 'text';
  input.placeholder = "C:\\Turbine\\Asheron's Call";
  input.autocomplete = 'off';
  input.spellcheck = false;
  field.append(input);
  const button = element('button', 'secondary', 'Use this folder');
  button.type = 'submit';
  form.append(field, button);

  const hint = element('p', 'setup-hint', "Usual places: C:\\Turbine\\Asheron's Call, C:\\Program Files (x86)\\Turbine\\Asheron's Call, or the folder your emulator launcher points to.");
  const note = element('p', message ? 'setup-note error' : 'setup-note', message);
  note.setAttribute('role', 'alert');
  const skip = link('Continue without models', '#/');
  skip.className = 'setup-skip';
  skip.addEventListener('click', (event) => {
    event.preventDefault();
    if (location.hash !== '#/') location.hash = '#/';
    else void route();
  });
  box.append(browse, divider, form, hint, note, skip);

  const say = (text: string, kind: 'error' | 'ok' | ''): void => {
    note.textContent = text;
    note.className = kind ? `setup-note ${kind}` : 'setup-note';
  };
  const busy = (on: boolean): void => {
    browse.disabled = button.disabled = input.disabled = on;
  };
  /** Check the folder and, if it is the AC install, open the app on it. */
  const use = async (folder: string): Promise<void> => {
    const path = folder.trim();
    if (!path) {
      say('Type the folder path, or use “Browse for the folder…”.', 'error');
      input.focus();
      return;
    }
    busy(true);
    say('Checking the folder…', '');
    try {
      await setInstallFolder(path);
      say(`Found client_portal.dat in ${path}. Loading the models…`, 'ok');
      dat = await AppDat.open();
      stills = new StillRenderer(dat);
      location.hash = '#/';
      route();
    } catch (error) {
      busy(false);
      say(`${String(error).replace(/^Error: /, '')}. Choose the folder that has client_portal.dat directly inside it.`, 'error');
      input.focus();
    }
  };
  browse.addEventListener('click', () => {
    busy(true);
    pickInstallFolder(input.value.trim())
      .then((folder) => {
        busy(false);
        if (folder === null) return;
        input.value = folder;
        return use(folder);
      })
      .catch((error) => {
        busy(false);
        say(`The folder dialog did not open: ${String(error)}. Type the path instead.`, 'error');
        input.focus();
      });
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void use(input.value);
  });
  view.append(box);
  browse.focus();
}

// ---- the start page ----

const FEATURED_ITEMS = ['Bow of the Quiddity', 'Axe of the Quiddity', 'Mace of the Quiddity'];
const FEATURED_CREATURES = ['Tusker Guard', 'Annihilator', 'Rampager'];

/** Three records for a feature card: the named ones first, then others, each with a model the others do not have. */
function pick<T>(all: T[], names: string[], name: (value: T) => string, model: (value: T) => number): T[] {
  const named = names.map((wanted) => all.find((value) => name(value) === wanted)).filter((v): v is T => v !== undefined);
  const chosen: T[] = [];
  const seen = new Set<number>();
  for (const value of [...named, ...all]) {
    if (chosen.length === 3) break;
    if (seen.has(model(value))) continue;
    seen.add(model(value));
    chosen.push(value);
  }
  return chosen;
}

function searchForm(id: string, placeholder: string, autofocus = false): HTMLFormElement {
  const form = element('form', 'big-search');
  form.setAttribute('role', 'search');
  const input = element('input');
  input.type = 'search';
  input.id = id;
  input.placeholder = placeholder;
  input.autocomplete = 'off';
  input.setAttribute('aria-label', placeholder);
  if (autofocus) input.autofocus = true;
  const button = element('button', 'primary', 'Search');
  button.type = 'submit';
  form.append(input, button);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const words = input.value.trim();
    if (words) location.hash = `#/search/${encodeURIComponent(words)}`;
  });
  return form;
}

function featureCard(title: string, blurb: string, href: string, count: string): { card: HTMLAnchorElement; strip: HTMLElement } {
  const card = element('a', 'feature card');
  card.href = href;
  const strip = element('div', 'feature-strip');
  const text = element('div', 'feature-text');
  text.append(element('h2', undefined, title), element('p', undefined, blurb), element('span', 'feature-count', count));
  card.append(strip, text);
  return { card, strip };
}

async function showHome(current: () => boolean): Promise<void> {
  const [stats, items, creatures, weaponsPage, tuskerPage] = await Promise.all([
    loadStats(query),
    loadAllItems(query),
    loadAllCreatures(query),
    loadPage(query, 'Quiddity Weapons'),
    loadPage(query, 'Tusker'),
  ]);
  if (!current()) return;
  // A card counts what its page lists, not everything of the kind.
  const weaponTitles = new Set((weaponsPage?.listItems ?? items).map((i) => i.title));
  const weaponCount = [...weaponTitles].filter((t) => !ENHANCED.test(t) && / of the /.test(t)).length;
  const tuskerCount = tuskerPage?.listCreatures.length || creatures.length;
  view.textContent = '';
  const box = element('div', 'home');

  const hero = element('section', 'hero');
  hero.append(
    element('p', 'eyebrow', "Asheron's Call"),
    element('h1', undefined, 'Look it up. Then look at it.'),
    element('p', 'lead', "Wiki pages beside the game's own 3D models and in-game stats, read from your install."),
    searchForm('home-search', 'Search the wiki', true),
  );
  const tries = element('p', 'tries', 'Try: ');
  for (const word of ['quiddity', 'tusker', 'Aura of Defender', 'Master of Arms']) {
    const a = link(word, `#/search/${encodeURIComponent(word)}`);
    tries.append(a, ' ');
  }
  hero.append(tries);
  box.append(hero);

  const features = element('section', 'features');
  const weapons = featureCard(
    'Quiddity Weapons',
    'Every Quiddity weapon with its glowing model, spells and requirements.',
    pageHref('Quiddity Weapons'),
    `${weaponCount} weapons + ${[...weaponTitles].filter((t) => ENHANCED.test(t)).length} Enhanced`,
  );
  const tuskers = featureCard(
    'Tusker bestiary',
    'Each Tusker with its model, defense, attack and drops.',
    pageHref('Tusker'),
    `${tuskerCount} creatures`,
  );
  for (const item of pick(items, FEATURED_ITEMS, (i) => i.title, (i) => i.variants[0].setup)) {
    const frame = element('div', 'feature-still');
    const image = element('img');
    image.alt = '';
    frame.append(image);
    weapons.strip.append(frame);
    itemStill(item.variants[0], image);
  }
  for (const creature of pick(creatures, FEATURED_CREATURES, (c) => c.name, (c) => defaultVariant(c).setup)) {
    const frame = element('div', 'feature-still');
    const image = element('img');
    image.alt = '';
    frame.append(image);
    tuskers.strip.append(frame);
    creatureStill(defaultVariant(creature), image);
  }
  features.append(weapons.card, tuskers.card);
  box.append(features);

  const recent = recentPages();
  if (recent.length > 0) {
    const row = element('section', 'browse-row recent');
    row.append(element('h2', undefined, 'Recently viewed'));
    const chips = element('div', 'chips');
    for (const title of recent.slice(0, 6)) {
      const chip = link(title, pageHref(title));
      chip.className = 'chip';
      chips.append(chip);
    }
    row.append(chips);
    box.append(row);
  }

  const browse = element('section', 'browse-row');
  browse.append(element('h2', undefined, 'Browse'));
  const buttons = element('div', 'chips');
  const allItems = link(`All ${items.length} items with models`, '#/browse/items');
  const allCreatures = link(`All ${creatures.length} creatures with stats`, '#/browse/creatures');
  allItems.className = allCreatures.className = 'chip strong';
  buttons.append(allItems, allCreatures);
  browse.append(buttons, element('h3', undefined, 'By category'));
  const categoryTile = (category: { name: string; count: number }): HTMLAnchorElement => {
    const tile = link('', `#/category/${encodeURIComponent(category.name)}`);
    tile.className = 'category-tile';
    tile.append(
      element('span', 'category-glyph', kindGlyph([category.name])),
      element('span', 'category-name', `${category.name}`),
      element('small', undefined, `${category.count} ${category.count === 1 ? 'page' : 'pages'}`),
    );
    return tile;
  };
  // The ways people look things up come first; the specialist categories wait behind "More".
  const FIRST = ['Weapon', 'Creature', 'NPC', 'Quest', 'Quest Item', 'Spell List', 'Dungeon', 'Currency'];
  const main = FIRST.map((name) => stats.categories.find((c) => c.name === name)).filter((c): c is { name: string; count: number } => c !== undefined);
  const rest = stats.categories.filter((c) => !main.includes(c));
  const tiles = element('div', 'category-tiles');
  tiles.append(...main.map(categoryTile));
  browse.append(tiles);
  if (rest.length > 0) {
    const more = element('details', 'more-categories');
    more.append(element('summary', undefined, `More categories (${rest.length})`));
    const moreTiles = element('div', 'category-tiles');
    moreTiles.append(...rest.map(categoryTile));
    more.append(moreTiles);
    browse.append(more);
  }
  box.append(browse);

  if (!dat) box.append(element('p', 'notice', 'No AC install folder is set, so models and icons are off. Set it on the setup page (#/setup).'));
  view.append(box);
}

// ---- search ----

function kindBadge(info: HitInfo | undefined): HTMLElement {
  const kind = info?.kind ?? 'page';
  return element('span', `badge badge-${kind}`, info?.label ?? 'Page');
}

/** One symbol for the kind of page, from its categories: quest, NPC, place, spell and so on. */
function kindGlyph(categories: string[]): string {
  const text = categories.join(' ').toLowerCase();
  const table: [RegExp, string][] = [
    [/npc|vendor/, '☺'],
    [/quest item|reward|token/, '◈'],
    [/quest|event/, '❖'],
    [/currency|trade/, '◎'],
    [/armor|clothing|jewelry|cloak/, '⛨'],
    [/dye|alchemy|ingredient|crafting/, '⚗'],
    [/spell|enchant/, '✦'],
    [/town|geographic|dungeon|landscape|area/, '⌂'],
    [/creature|monster/, '☠'],
    [/patch/, '⟳'],
    [/weapon|item/, '⚔'],
  ];
  return table.find(([pattern]) => pattern.test(text))?.[1] ?? '❡';
}

function resultRow(title: string, info: HitInfo | undefined, snippet?: string): HTMLLIElement {
  const li = element('li', 'result');
  li.dataset.kind = info?.kind ?? 'page';
  const thumb = element('div', 'result-thumb glyph');
  thumb.textContent = kindGlyph(info?.categories ?? []);
  // The tile's colour follows the page's first category, so quests, NPCs and spells look apart at a glance.
  const seed = [...(info?.categories[0] ?? 'Page')].reduce((sum, c) => sum * 31 + c.charCodeAt(0), 7);
  thumb.style.setProperty('--hue', String(seed % 360));
  /** Swap the letter tile for the picture once it is ready. */
  const showImage = (url: string, pixelated: boolean): void => {
    const image = element('img');
    image.alt = '';
    image.src = url;
    thumb.className = `result-thumb${pixelated ? '' : ' creature'}`;
    thumb.textContent = '';
    thumb.append(image);
  };
  if (info?.kind === 'item') {
    itemIcon(info.item?.variants[0], (url) => showImage(url, true));
  } else if (info?.kind === 'creature' && info.creature) {
    const variant = defaultVariant(info.creature);
    whenNear(thumb, () => {
      stills?.render(variantSpec(variant)).then((url) => showImage(url, false)).catch(() => undefined);
    });
  }
  const body = element('div', 'result-body');
  const top = element('div', 'result-title');
  top.append(link(title, pageHref(title)));
  // Items and creatures sit under their own heading, so only a plain page needs its label.
  if (!info || info.kind === 'page') top.append(kindBadge(info));
  body.append(top);
  const badgeText = (info?.label ?? '').toLowerCase();
  const facts = [info?.detail, ...(info?.categories.slice(info.kind === 'page' || (info.kind === 'item' && info.categories.length > 1) ? 1 : 0, 3) ?? [])].filter(
    (fact): fact is string => Boolean(fact) && !(info?.kind === 'page' && badgeText !== '' && fact!.toLowerCase().includes(badgeText)),
  );
  if (facts.length > 0) body.append(element('p', 'result-facts', facts.join(' · ')));
  if (snippet) {
    const p = element('p', 'snippet');
    // The snippet is plain text; only the match markers become <mark>.
    for (const [i, part] of snippet.split(/\[\[|\]\]/).entries()) {
      p.append(i % 2 === 1 ? element('mark', undefined, part) : document.createTextNode(part));
    }
    body.append(p);
  }
  li.append(thumb);
  li.append(body);
  return li;
}

/** How many pages link to this one. */
async function linkedFrom(title: string): Promise<number> {
  const rows = await query('select count(*) as n from pages where links like ?', [`%${JSON.stringify(title)}%`]);
  return Number(rows[0]?.n ?? 0);
}

/**
 * The title that is what was typed, or else the root of the family of titles that start with it ("Quiddity Weapons",
 * which "Quiddity Weapons Quest" extends), or else the page others link to most.
 */
async function pickBestMatch(typed: string, titles: string[]): Promise<string | undefined> {
  const exact = titles.find((title) => title.toLowerCase() === typed);
  if (exact) return exact;
  const starts = titles.filter((title) => title.toLowerCase().startsWith(typed)).slice(0, 8);
  if (starts.length < 2) return starts[0];
  const root = familyRoot(starts);
  if (root) return root;
  let best = starts[0]!;
  let bestCount = -1;
  for (const title of starts) {
    const count = await linkedFrom(title);
    if (count > bestCount) [best, bestCount] = [title, count];
  }
  return best;
}

async function showSearch(words: string, current: () => boolean): Promise<void> {
  const hits = await search(query, words);
  const info = await describeTitles(query, [...hits.titles, ...hits.text.map((hit) => hit.title)]);
  if (!current()) return;
  view.textContent = '';
  const box = element('section', 'search-results');
  const total = hits.titles.length + hits.text.length;
  box.append(element('h1', undefined, `Results for “${words}”`));
  if (total === 0) {
    const none = element('div', 'empty-state card');
    none.append(
      element('h2', undefined, 'No page found'),
      element('p', undefined, 'Try a shorter word, or a part of a name: "tusk", "quid", "bow".'),
    );
    const chips = element('div', 'chips');
    for (const [text, href] of [['All items', '#/browse/items'], ['All creatures', '#/browse/creatures'], ['Start page', '#/']]) {
      const chip = link(text, href);
      chip.className = 'chip';
      chips.append(chip);
    }
    none.append(chips);
    box.append(none);
    view.append(box);
    return;
  }

  // Type filter: counts per kind, and a button each.
  const kinds = new Map<string, number>();
  for (const title of [...hits.titles, ...hits.text.map((hit) => hit.title)]) {
    const kind = info.get(title)?.kind ?? 'page';
    kinds.set(kind, (kinds.get(kind) ?? 0) + 1);
  }
  const bar = element('div', 'filter-chips');
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'Filter results by type');
  const results = element('div', 'results');
  const filterButtons: [string, string, number][] = [['all', 'All', total]];
  for (const [kind, label] of [['item', 'Items'], ['creature', 'Creatures'], ['page', 'Pages']] as const) {
    if (kinds.get(kind)) filterButtons.push([kind, label, kinds.get(kind)!]);
  }
  for (const [kind, label, count] of filterButtons) {
    const button = element('button', 'chip', `${label} `);
    button.type = 'button';
    button.append(element('small', undefined, String(count)));
    button.setAttribute('aria-pressed', String(kind === 'all'));
    button.addEventListener('click', () => {
      for (const other of bar.querySelectorAll('button')) other.setAttribute('aria-pressed', String(other === button));
      for (const group of results.querySelectorAll<HTMLElement>('.result-group')) group.hidden = kind !== 'all' && group.dataset.kind !== kind;
    });
    bar.append(button);
  }
  if (filterButtons.length > 2) box.append(bar);

  // One section for each kind: the title matches first, then the pages that only mention the words.
  const rows = new Map<string, HTMLLIElement[]>();
  const add = (kind: string, row: HTMLLIElement): void => {
    rows.set(kind, [...(rows.get(kind) ?? []), row]);
  };
  // A title that is what was typed (or starts with it) is the best match: it gets a card of its own above the lists.
  const typed = words.trim().toLowerCase();
  const best = await pickBestMatch(typed, hits.titles);
  if (best && total > 3) {
    const card = element('section', 'top-hit');
    card.append(element('h2', undefined, 'Best match'));
    const list = element('ul', 'result-list');
    const row = resultRow(best, info.get(best));
    row.classList.add('best');
    const links = await linkedFrom(best);
    if (links > 1) row.querySelector('.result-body')?.append(element('p', 'snippet', `Linked from ${links} pages in the wiki.`));
    list.append(row);
    card.append(list);
    box.append(card);
  }
  for (const title of hits.titles) if (title !== best || total <= 3) add(info.get(title)?.kind ?? 'page', resultRow(title, info.get(title)));
  for (const hit of hits.text) add(info.get(hit.title)?.kind ?? 'page', resultRow(hit.title, info.get(hit.title), hit.snippet));
  for (const [kind, heading] of [['item', 'Items'], ['creature', 'Creatures'], ['page', 'Pages']] as const) {
    const group = rows.get(kind);
    if (!group) continue;
    const section = element('section', 'result-group');
    section.dataset.kind = kind;
    const list = element('ul', 'result-list');
    list.append(...group);
    section.append(element('h2', undefined, `${heading} · ${kinds.get(kind) ?? group.length}`), list);
    // A long group shows its first rows, so the groups below it are on the first screen.
    const LIMIT = 9;
    if (group.length > LIMIT + 2) {
      group.slice(LIMIT).forEach((row) => row.classList.add('later'));
      list.classList.add('collapsed');
      const more = element('button', 'chip strong more', `View all ${kinds.get(kind) ?? group.length} ${heading.toLowerCase()}`);
      more.type = 'button';
      more.addEventListener('click', () => {
        list.classList.remove('collapsed');
        more.remove();
      });
      section.append(more);
    }
    results.append(section);
  }
  box.append(results);
  view.append(box);
}

// ---- grids ----

function itemTile(item: ItemRecord, label?: string, common?: string): HTMLElement {
  const variant = item.variants[0];
  const tile = element('a', 'tile');
  tile.href = pageHref(item.title);
  const image = element('img');
  image.alt = '';
  // The inventory icon beside the name: the model can be an odd shape, the icon is how the game shows the item.
  const name = element('div', 'tile-name');
  // The game's own icon sits before the name: the model can be an odd shape, the icon is how the game shows the item.
  const icon = element('span', 'tile-name-icon');
  icon.hidden = true;
  itemIcon(variant, (url) => {
    icon.style.backgroundImage = `url("${url}")`;
    icon.hidden = false;
  });
  name.append(icon, element('span', undefined, label ?? item.title));
  tile.append(image, name);
  // What kind of weapon it is ("Missile Weapon · Bow"), the number that is not the same on every card, and its damage or mana.
  const kinds = (itemInfo.get(item.title)?.categories ?? []).filter((name) => name !== 'Weapon').slice(0, 2);
  const facts = [variant?.values.arcaneLore && `Arcane Lore ${variant.values.arcaneLore}` !== common ? `Arcane Lore ${variant.values.arcaneLore}` : ''].filter(Boolean);
  const line = [...kinds, ...facts].join(' · ');
  if (line) tile.append(element('div', 'tile-level', line));
  const values = variant?.values;
  const stat = values?.damage ? `Damage ${values.damage}` : values?.damageMod ? `Modifier ×${values.damageMod.toFixed(2)}` : values?.spellcraft ? `Spellcraft ${values.spellcraft}` : '';
  if (stat) tile.append(element('div', 'tile-level tile-stats', stat));
  itemStill(variant, image);
  return tile;
}

/** A filter bar over a grid: a name box, an optional sort, and a count that says what the grid holds. */
function gridToolbar(noun: string, onChange: () => void, sorts: [SortKey, string][] = []): {
  bar: HTMLElement;
  state: () => { search: string; sort: SortKey };
  count: (shown: number, total: number) => void;
  note: (text: string) => void;
  onChange: (handler: () => void) => void;
} {
  const bar = element('div', 'toolbar');
  const label = element('label', 'search-field');
  const input = element('input');
  input.type = 'search';
  input.placeholder = `Filter ${noun} by name`;
  input.setAttribute('aria-label', `Filter ${noun} by name`);
  label.append(input);
  bar.append(label);
  let select: HTMLSelectElement | null = null;
  if (sorts.length > 0) {
    const sortLabel = element('label', 'sort-field');
    sortLabel.append(element('span', undefined, 'Sort'));
    select = element('select');
    select.setAttribute('aria-label', 'Sort');
    for (const [value, text] of sorts) {
      const option = element('option', undefined, text);
      option.value = value;
      select.append(option);
    }
    sortLabel.append(select);
    bar.append(sortLabel);
  }
  const count = element('span', 'count');
  count.setAttribute('aria-live', 'polite');
  bar.append(count);
  let change = onChange;
  input.addEventListener('input', () => change());
  select?.addEventListener('change', () => change());
  return {
    bar,
    state: () => ({ search: input.value, sort: (select?.value ?? 'name') as SortKey }),
    onChange: (handler) => {
      change = handler;
    },
    note: (text) => {
      count.textContent = text;
    },
    count: (shown, total) => {
      count.textContent = shown === total ? `${total} ${noun}` : `${shown} of ${total} ${noun}`;
      count.title = '';
    },
  };
}

function creatureBrowser(creatures: Creature[]): HTMLElement {
  const box = element('div', 'browser');
  const grid = element('div', 'grid');
  const draw = (): void => {
    const { search, sort } = toolbar.state();
    const shown = visibleCreatures(creatures, { search, minLevel: null, maxLevel: null, trophyOnly: false, sort });
    toolbar.count(shown.length, creatures.length);
    const tally = new Map<string, number>();
    for (const c of creatures) tally.set(weakness(defaultVariant(c)), (tally.get(weakness(defaultVariant(c))) ?? 0) + 1);
    const commonWeakness = [...tally.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? '';
    renderGrid(grid, shown, openOverlay, creatureStill);
    // The level line also gives the health, so tiles of one family tell apart without opening them.
    grid.querySelectorAll('.tile').forEach((tile, i) => {
      const variant = defaultVariant(shown[i]);
      const line = tile.querySelector('.tile-level');
      if (line) {
        const weak = weakness(variant);
        line.textContent = `${variant.health.toLocaleString('en')} health · ${variant.armorLevel} armor`;
        // Every Tusker is weak to the same things; a tile says so only when it is different.
        if (weak && weak !== commonWeakness) line.append(element('span', 'tile-weak', `Weak to ${weak}`));
        if (shown[i].variants.length > 1) line.append(element('span', 'tile-weak', `${shown[i].variants.length} variants`));
      }
      const badge = element('span', 'tile-lv', `Lv ${variant.level}`);
      badge.dataset.tier = variant.level <= 30 ? '1' : variant.level <= 80 ? '2' : variant.level <= 100 ? '3' : '4';
      tile.append(badge);
    });
    if (shown.length === 0) grid.append(element('p', 'empty-state', 'No creature has that in its name.'));
  };
  const toolbar = gridToolbar('creatures', draw, [['level', 'Level'], ['name', 'Name'], ['health', 'Health']]);
  const table = element('div', 'creature-table');
  /** The compact view: one row a creature with the numbers to compare, sorted by a click on a column head. */
  let column: 'name' | 'level' | 'health' | 'stamina' | 'xp' | 'armor' | 'weak' | 'resists' = 'level';
  let descending = false;
  const drawTable = (): void => {
    const { search } = toolbar.state();
    const rows = visibleCreatures(creatures, { search, minLevel: null, maxLevel: null, trophyOnly: false, sort: 'name' });
    const value = (c: Creature): number | string => {
      const v = defaultVariant(c);
      return column === 'name' ? c.name : column === 'armor' ? v.armorLevel : column === 'weak' ? weakness(v) : column === 'resists' ? strength(v) : v[column];
    };
    rows.sort((a, b) => {
      const x = value(a);
      const y = value(b);
      const order = typeof x === 'string' ? x.localeCompare(String(y)) : Number(x) - Number(y);
      return (descending ? -order : order) || a.name.localeCompare(b.name);
    });
    toolbar.count(rows.length, creatures.length);
    const commonCell = new Map<string, number>();
    for (const c of creatures) for (const text of [weakness(defaultVariant(c)), strength(defaultVariant(c))]) commonCell.set(text, (commonCell.get(text) ?? 0) + 1);
    table.textContent = '';
    // What the level colours mean, and what nearly every row shares, said once above the table.
    const legend = element('p', 'table-legend');
    for (const [tier, text] of [['1', 'Level 1–30'], ['2', '31–80'], ['3', '81–100'], ['4', '101+']] as const) {
      const chip = element('span', 'tile-lv level-chip', text);
      chip.dataset.tier = tier;
      legend.append(chip, ' ');
    }
    const [sharedWeak] = [...commonCell.entries()].sort((x, y) => y[1] - x[1]);
    if (sharedWeak) legend.append(element('span', 'legend-note', 'Gold text marks a creature that differs from most of the family.'));
    table.append(legend);
    const t = element('table');
    const head = element('tr');
    for (const [key, text] of [['name', 'Creature'], ['level', 'Level'], ['health', 'Health'], ['stamina', 'Stamina'], ['xp', 'XP'], ['armor', 'Armor'], ['weak', 'Weak to'], ['resists', 'Resists']] as const) {
      const th = element('th');
      th.scope = 'col';
      if (key === 'weak' || key === 'resists') th.className = 'weak-head';
      const button = element('button', undefined, text + (column === key ? (descending ? ' ▼' : ' ▲') : ''));
      button.type = 'button';
      th.setAttribute('aria-sort', column === key ? (descending ? 'descending' : 'ascending') : 'none');
      button.addEventListener('click', () => {
        descending = column === key ? !descending : key !== 'name' && key !== 'weak' && key !== 'resists';
        column = key;
        drawTable();
      });
      th.append(button);
      head.append(th);
    }
    const thead = element('thead');
    thead.append(head);
    t.append(thead);
    const body = element('tbody');
    for (const creature of rows) {
      const v = defaultVariant(creature);
      const tr = element('tr');
      tr.tabIndex = 0;
      const nameCell = element('td', 'name');
      const inner = element('div', 'name-inner');
      const thumb = element('img', 'row-still');
      thumb.alt = '';
      creatureStill(v, thumb);
      const label = element('span', 'name-text');
      label.append(element('b', undefined, creature.name));
      if (creature.variants.length > 1) label.append(element('small', undefined, `${creature.variants.length} variants`));
      inner.append(thumb, label);
      nameCell.append(inner);
      tr.append(nameCell);
      const levelCell = element('td', 'num');
      const chip = element('span', 'tile-lv level-chip', String(v.level));
      chip.dataset.tier = v.level <= 30 ? '1' : v.level <= 80 ? '2' : v.level <= 100 ? '3' : '4';
      levelCell.append(chip);
      tr.append(levelCell);
      for (const n of [v.health, v.stamina, v.xp, v.armorLevel]) tr.append(element('td', 'num', n.toLocaleString('en')));
      for (const text of [weakness(v), strength(v)]) {
        const cell = element('td', 'weak', text || '—');
        // The same words on nearly every row are quiet; the creature that differs stands out.
        if (text && (commonCell.get(text) ?? 0) >= creatures.length * 0.55) cell.classList.add('common');
        else if (text) cell.classList.add('odd');
        tr.append(cell);
      }
      tr.addEventListener('click', () => openOverlay(creature));
      tr.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') openOverlay(creature);
      });
      body.append(tr);
    }
    t.append(body);
    table.append(t);
  };
  const views = element('div', 'view-switch');
  views.setAttribute('role', 'group');
  views.setAttribute('aria-label', 'View');
  const modes: [string, string][] = [['grid', 'Models'], ['table', 'Table']];
  const buttons = modes.map(([mode, text]) => {
    const button = element('button', undefined, text);
    button.type = 'button';
    button.addEventListener('click', () => setMode(mode));
    views.append(button);
    return button;
  });
  let lastSort: SortKey = 'level';
  let mode = 'grid';
  function setMode(next: string): void {
    mode = next;
    buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(modes[i][0] === mode)));
    grid.hidden = mode !== 'grid';
    table.hidden = mode !== 'table';
    // The table sorts by its column heads, so the sort box has no work there.
    refresh();
  }
  function refresh(): void {
    if (mode === 'table') {
      // The sort box and the column heads steer the same table.
      const sort = toolbar.state().sort;
      if (sort !== lastSort) {
        lastSort = sort;
        column = sort;
        descending = sort === 'health';
      }
      drawTable();
    } else draw();
  }
  toolbar.onChange(refresh);
  toolbar.bar.insertBefore(views, toolbar.bar.querySelector('.count'));
  box.append(toolbar.bar, grid, table);
  setMode(creatures.length > 30 ? 'table' : 'grid');
  return box;
}

const ENHANCED = /^Enhanced /;

/** The damage types a variant takes the most from, as text; empty when they all take the same. */
/** The damage types a creature takes least from: its best defence. */
function strength(variant: Variant): string {
  const list = RESISTANCE_LABELS.filter(([key]) => variant.resistances[key] !== undefined).map(([key, label]) => [label, variant.resistances[key]] as const);
  if (list.length === 0) return '';
  const low = Math.min(...list.map(([, n]) => n));
  if (low === Math.max(...list.map(([, n]) => n))) return '';
  return list.filter(([, n]) => n === low).map(([k]) => k).join(', ');
}

function weakness(variant: Variant): string {
  const list = RESISTANCE_LABELS.filter(([key]) => variant.resistances[key] !== undefined).map(([key, label]) => [label, variant.resistances[key]] as const);
  if (list.length === 0) return '';
  const high = Math.max(...list.map(([, n]) => n));
  if (high === Math.min(...list.map(([, n]) => n))) return '';
  return list.filter(([, n]) => n === high).map(([k]) => k).join(', ');
}

const noun = (n: number): string => (n === 1 ? 'item' : 'items');

function itemBrowser(items: ItemRecord[]): HTMLElement {
  const box = element('div', 'browser');
  const grid = element('div', 'grid');
  const titles = new Set(items.map((item) => item.title));
  // An "Enhanced X" next to an "X" is the same weapon upgraded: the base tile says so and the twin can hide.
  const twins = items.filter((item) => ENHANCED.test(item.title) && titles.has(item.title.replace(ENHANCED, '')));
  const hasTwin = new Set(twins.map((item) => item.title.replace(ENHANCED, '')));
  // When every base weapon has one, a mark on each card says nothing; the count line says it once.
  const allTwinned = twins.length > 0 && items.filter((item) => !ENHANCED.test(item.title) && item.variants.length > 0).every((item) => hasTwin.has(item.title) || !/ of the /.test(item.title));
  // A shared ending ("… of the Quiddity") is said once, in the count, and left off the names.
  const endings = new Map<string, number>();
  for (const item of items) {
    const ending = item.title.match(/ of the \w+$/)?.[0];
    if (ending) endings.set(ending, (endings.get(ending) ?? 0) + 1);
  }
  const common = [...endings.entries()].sort((a, b) => b[1] - a[1])[0];
  const strip = common && common[1] >= Math.max(4, items.length * 0.6) ? new RegExp(`${common[0]}$`) : null;
  const factsOf = (item: ItemRecord): string => {
    const v = item.variants[0];
    return v?.values.arcaneLore ? `Arcane Lore ${v.values.arcaneLore}` : '';
  };
  const factCounts = new Map<string, number>();
  for (const item of items) factCounts.set(factsOf(item), (factCounts.get(factsOf(item)) ?? 0) + 1);
  const commonFacts = [...factCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  const draw = (): void => {
    const words = toolbar.state().search.trim().toLowerCase();
    const group = merge?.checked ?? false;
    const shown = items.filter(
      (item) => item.title.toLowerCase().includes(words) && !(group && ENHANCED.test(item.title) && titles.has(item.title.replace(ENHANCED, ''))),
    );
    toolbar.count(shown.length, shown.length);
    const mainCount = shown.filter((item) => !(strip !== null && !strip.test(item.title) && !ENHANCED.test(item.title))).length;
    if (group && twins.length > 0) toolbar.note(`${mainCount} ${noun(mainCount)}${common && strip ? `${common[0]}` : ''} · ${allTwinned ? `each also comes in an Enhanced version (${twins.length} more, grouped)` : '“+ Enhanced” marks a weapon that has an upgraded version'}`);
    grid.textContent = '';
    related.textContent = '';
    // A page of "… of the Quiddity" weapons that also lists a kit or an ingot keeps those apart, under their own heading.
    const isRelated = (item: ItemRecord): boolean => strip !== null && !strip.test(item.title) && !ENHANCED.test(item.title);
    const apart = shown.filter(isRelated);
    if (apart.length > 0) related.append(element('h2', 'grid-title', `Related items (${apart.length})`));
    const relatedGrid = element('div', 'grid');
    for (const item of apart) relatedGrid.append(itemTile(item));
    if (apart.length > 0) related.append(relatedGrid);
    for (const item of shown.filter((candidate) => !isRelated(candidate))) {
      const tile = itemTile(item, strip ? item.title.replace(strip, '') : undefined, commonFacts);
      if (group && hasTwin.has(item.title) && !allTwinned) {
        const star = element('span', 'enhanced-star', '+ Enhanced');
        star.title = 'Also has an Enhanced version (grouped here)';
        star.setAttribute('aria-label', 'Also has an Enhanced version');
        tile.querySelector('.tile-name')?.append(star);
      }
      grid.append(tile);
    }
    if (shown.length === 0) grid.append(element('p', 'empty-state', 'No item has that in its name.'));
  };
  const toolbar = gridToolbar('items', draw);
  const related = element('div', 'related');
  let merge: HTMLInputElement | null = null;
  if (twins.length > 0) {
    const label = element('label', 'check-field');
    merge = element('input');
    merge.type = 'checkbox';
    merge.checked = true;
    merge.addEventListener('change', draw);
    label.append(merge, element('span', undefined, 'Group Enhanced with base'));
    toolbar.bar.insertBefore(label, toolbar.bar.querySelector('.count'));
  }
  box.append(toolbar.bar, grid, related);
  draw();
  return box;
}

function breadcrumb(...crumbs: [string, string | null][]): HTMLElement {
  const nav = element('nav', 'breadcrumb');
  nav.setAttribute('aria-label', 'Breadcrumb');
  const list = element('ol');
  for (const [text, href] of crumbs) {
    const li = element('li');
    if (href) li.append(link(text, href));
    else {
      li.textContent = text;
      li.setAttribute('aria-current', 'page');
    }
    list.append(li);
  }
  nav.append(list);
  return nav;
}

async function showBrowse(what: string, current: () => boolean): Promise<void> {
  const creatures = what === 'creatures';
  const records = creatures ? await loadAllCreatures(query) : await loadAllItems(query);
  if (!current()) return;
  view.textContent = '';
  const box = element('section', 'browse');
  box.append(
    breadcrumb(['Home', '#/'], [creatures ? 'Creatures' : 'Items', null]),
    element('h1', undefined, creatures ? 'Creatures' : 'Items'),
    element('p', 'lead', creatures
      ? 'Every creature with a retail record: open one to turn its model and read its stats.'
      : 'Every item page that has a model and a retail record.'),
  );
  if (!dat) box.append(element('p', 'notice', 'Set the AC install folder to see the models.'));
  box.append(creatures ? creatureBrowser(records as Creature[]) : itemBrowser(records as ItemRecord[]));
  view.append(box);
  document.title = `${creatures ? 'Creatures' : 'Items'} – AC Wiki`;
}

/** The pages a page links to that exist in this copy of the wiki, as result rows with their icons. */
async function relatedPageRows(title: string): Promise<HTMLLIElement[]> {
  const rows = await query('select links from pages where title = ?', [title]);
  if (!rows[0]) return [];
  const links = (JSON.parse(String(rows[0].links)) as string[]).filter((t) => t !== title);
  if (links.length === 0) return [];
  const info = await describeTitles(query, links);
  // Pages with a model or stats first, then the rest, in the order the page links them.
  const found = links.filter((t) => info.has(t));
  found.sort((a, b) => Number(info.get(b)?.kind !== 'page') - Number(info.get(a)?.kind !== 'page'));
  return found.slice(0, 8).map((t) => resultRow(t, info.get(t)));
}

/** Every category of the wiki with its page count: quests, NPCs, spells, places and the rest. */
async function showCategories(current: () => boolean): Promise<void> {
  const stats = await loadStats(query, 200);
  if (!current()) return;
  view.textContent = '';
  const box = element('section', 'browse');
  box.append(breadcrumb(['Home', '#/'], ['Categories', null]), element('h1', undefined, 'Categories'));
  box.append(element('p', 'lead', 'Every wiki page is in one or more categories. Pages with game records (items and creatures) have their own lists under Items and Creatures.'));
  // Grouped by what the category is for, so "Weapon" and "Level 80" are not side by side.
  const GROUPS: [string, RegExp][] = [
    ['Game systems', /spell|enchant|cleaving|mechanic|skill|augmentation|luminance/i],
    ['Creatures', /creature$|^creature|tusker|shreth|olthoi|mosswart|monster|^.*creatures?$/i],
    ['People and places', /npc|vendor|town|dungeon|geographic|area|landscape|portal/i],
    ['Quests and rewards', /quest|reward|title|event|patch/i],
    ['Items and gear', /weapon|armor|item|currency|token|dye|alchemy|ingredient|jewelry|clothing|cloak/i],
  ];
  const grouped = new Map<string, { name: string; count: number }[]>();
  for (const category of stats.categories) {
    const name = /^Level \d+/.test(category.name) ? 'Levels' : (GROUPS.find(([, pattern]) => pattern.test(category.name))?.[0] ?? 'Other');
    grouped.set(name, [...(grouped.get(name) ?? []), category]);
  }
  const small = stats.categories.filter((c) => c.count <= 1);
  for (const [name, list] of grouped) grouped.set(name, list.filter((c) => c.count > 1));
  for (const heading of ['Creatures', 'People and places', 'Quests and rewards', 'Items and gear', 'Game systems', 'Levels', 'Other']) {
    const list = grouped.get(heading)?.length ? grouped.get(heading) : undefined;
    if (!list) continue;
    box.append(element('h2', 'grid-title', heading));
    const tiles = element('div', 'category-tiles');
    for (const category of list) {
      const tile = link('', `#/category/${encodeURIComponent(category.name)}`);
      tile.className = 'category-tile';
      tile.append(element('span', 'category-name', category.name), element('small', undefined, `${category.count} ${category.count === 1 ? 'page' : 'pages'}`));
      tiles.append(tile);
    }
    box.append(tiles);
  }
  if (small.length > 0) {
    const details = element('details', 'more-categories');
    details.append(element('summary', undefined, `Categories with a single page (${small.length})`));
    const tiles = element('div', 'category-tiles');
    for (const category of small) {
      const tile = link('', `#/category/${encodeURIComponent(category.name)}`);
      tile.className = 'category-tile';
      tile.append(element('span', 'category-name', category.name), element('small', undefined, '1 page'));
      tiles.append(tile);
    }
    details.append(tiles);
    box.append(details);
  }
  box.append(element('p', 'category-note', 'Counts are wiki pages in each category. The Creatures list holds the creatures that also have game stats, which is why its number is smaller than the “Creature” category.'));
  view.append(box);
}

async function showCategory(name: string, current: () => boolean): Promise<void> {
  const titles = await loadCategory(query, name);
  if (!current()) return;
  view.textContent = '';
  const box = element('section', 'browse');
  box.append(breadcrumb(['Home', '#/'], ['Categories', null], [name, null]), element('h1', undefined, name));
  box.append(element('p', 'lead', `${titles.length} ${titles.length === 1 ? 'page' : 'pages'}`));
  const list = element('ul', 'category-list');
  for (const title of titles) {
    const li = element('li');
    li.append(link(title, pageHref(title)));
    list.append(li);
  }
  box.append(list);
  view.append(box);
  document.title = `${name} – AC Wiki`;
}

/** The categories of the items a list page shows, for the line under each tile. */
let itemInfo = new Map<string, HitInfo>();

function renderListGrid(page: WikiPage): HTMLElement {
  const section = element('section', 'list-grid');
  if (!dat) section.append(element('p', 'notice', 'Set the AC install folder to see the models.'));
  // Creatures first: on a creature family's page the items are what its members drop.
  const both = page.listItems.length > 0 && page.listCreatures.length > 0;
  if (page.listCreatures.length > 0) {
    if (both) section.append(element('h2', 'grid-title', 'Creatures'));
    section.append(creatureBrowser(page.listCreatures));
  }
  if (page.listItems.length > 0) {
    if (both) section.append(element('h2', 'grid-title', `Related items (${page.listItems.length})`));
    section.append(itemBrowser(page.listItems));
  }
  return section;
}

function renderCreatureSide(side: HTMLElement, creature: Creature): () => void {
  side.innerHTML = `
    <div class="viewer"><canvas></canvas><div class="motions"></div><p class="hint">Drag to turn the model, scroll to zoom.</p></div>
    <div class="panel"></div>`;
  const view = new OpenView(
    {
      canvas: side.querySelector('canvas')!,
      motions: side.querySelector('.motions')!,
      hint: side.querySelector('.hint')!,
      panel: side.querySelector('.panel')!,
    },
    modelsFor,
    (root, c, v) => {
      appLinks(root);
      quickFacts(root, c, v);
    },
  );
  view.show(creature, defaultVariant(creature));
  return () => view.stop();
}

/** On a narrow screen the page shows one part at a time: the model, its stats or the article. */
function jumpBar(layout: HTMLElement): HTMLElement {
  const bar = element('nav', 'jump');
  bar.setAttribute('aria-label', 'Show');
  const page = layout.closest('.page') as HTMLElement | null;
  const buttons: HTMLButtonElement[] = [];
  const choose = (name: string): void => {
    if (page) page.dataset.tab = name;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tab === name)));
  };
  for (const [text, name] of [['Model & stats', 'model'], ['Article', 'article']] as const) {
    const button = element('button', 'chip', text);
    button.type = 'button';
    button.dataset.tab = name;
    button.addEventListener('click', () => {
      choose(name);
      window.scrollTo({ top: 0 });
    });
    buttons.push(button);
    bar.append(button);
  }
  choose('model');
  return bar;
}

/** A touch screen has no scroll wheel: the hint under a model says only what works there. */
function fitHints(): void {
  if (!matchMedia('(pointer: coarse), (max-width: 700px)').matches) return;
  for (const hint of document.querySelectorAll('.hint')) {
    if (hint.textContent === 'Drag to turn the model, scroll to zoom.') hint.textContent = 'Drag to turn the model.';
  }
}

function pageHead(page: WikiPage, categories: string[]): HTMLElement {
  const head = element('header', 'page-head');
  const section: [string, string] | null =
    page.kind === 'item' || (page.kind === 'list' && page.listItems.length > 0 && page.listCreatures.length === 0)
      ? ['Items', '#/browse/items']
      : page.kind === 'creature' || (page.kind === 'list' && page.listCreatures.length > 0)
        ? ['Creatures', '#/browse/creatures']
        : null;
  head.append(breadcrumb(['Home', '#/'], ...(section ? [section] : []), [page.title, null]));
  const line = element('div', 'title-line');
  line.append(element('h1', undefined, page.title));
  if (page.kind === 'item' || page.kind === 'creature') {
    line.append(element('span', `badge badge-${page.kind}`, page.kind === 'item' ? 'Item' : 'Creature'));
  }
  head.append(line);
  const shown = categories.filter(
    (name) => !name.startsWith('Pages with ') && !(name === 'Creature' && page.kind === 'creature') && !(page.kind === 'creature' && /^Level \d+/.test(name)),
  );
  if (shown.length > 0) {
    const chips = element('div', 'chips small');
    for (const name of shown) {
      const chip = link(name, `#/category/${encodeURIComponent(name)}`);
      chip.className = 'chip';
      chips.append(chip);
    }
    head.append(chips);
  }
  return head;
}

async function showPage(title: string, current: () => boolean): Promise<void> {
  const page = await loadPage(query, title);
  if (!page) {
    if (!current()) return;
    view.textContent = '';
    const missing = element('section', 'missing card');
    missing.append(
      element('h1', undefined, 'No such page'),
      element('p', undefined, `This copy of the wiki has no page called “${title}”. It may be spelled differently, or not part of this copy yet.`),
      (() => {
        const chips = element('div', 'chips');
        for (const [text, href] of [['All items', '#/browse/items'], ['All creatures', '#/browse/creatures'], ['Categories', '#/categories'], ['Start page', '#/']]) {
          const chip = link(text, href);
          chip.className = 'chip';
          chips.append(chip);
        }
        return chips;
      })(),
    );
    view.append(missing);
    return;
  }
  const categories = await loadCategories(query, page.title);
  const relatedRows = page.kind === 'item' || page.kind === 'creature' ? await relatedPageRows(page.title) : [];
  if (!current()) return;
  view.textContent = '';

  const layout = element('div', 'page-layout');
  const article = element('article', 'wiki-text');
  const body = element('div', 'wiki-body');
  body.innerHTML = sanitizeWikiHtml(page.html, parser, { imageUrl: wikiImage });
  const hasCreaturePanel = page.kind === 'creature' && page.creature !== null;
  tidyWikiDom(body, { hasPanel: page.kind === 'item' || hasCreaturePanel });
  article.append(body);
  if (relatedRows.length > 0) {
    const related = element('section', 'related-pages');
    related.append(element('h2', undefined, 'Related pages'));
    const list = element('ul', 'result-list');
    list.append(...relatedRows);
    related.append(list);
    article.append(related);
  }
  layout.append(article);

  if (page.kind === 'item' || hasCreaturePanel) {
    const side = element('aside', 'side');
    side.setAttribute('aria-label', page.kind === 'item' ? 'Item model and stats' : 'Creature model and stats');
    layout.classList.add('has-side');
    layout.append(side);
    leaveView =
      page.kind === 'item' ? renderItemSide(side, page, dat, wikiImage) : renderCreatureSide(side, page.creature!);
    // The wiki's own version of the stats sits with the app's version, not alone under the notes.
    const infobox = body.querySelector('.wiki-infobox');
    const shots = body.querySelector('.wiki-shots');
    if (page.kind === 'item') {
      // On an item page the wiki's own stats and its screenshot close the article, so both columns end together.
      if (infobox) {
        const extras = element('section', 'wiki-extras');
        extras.append(infobox);
        article.append(extras);
      }
    } else if (infobox) side.append(infobox);
  }

  const wrap = element('div', layout.classList.contains('has-side') ? `page has-side${page.kind === 'creature' ? ' is-creature' : ''}` : 'page');
  wrap.append(pageHead(page, categories));
  if (page.kind === 'list') {
    // The gallery is what a list page is for; the wiki's own text is one tab away.
    itemInfo = await describeTitles(query, page.listItems.map((i) => i.title));
    if (!current()) return;
    const gallery = renderListGrid(page);
    const total = page.listCreatures.length > 0 ? `${page.listCreatures.length} creatures` : `${page.listItems.length} items`;
    const tabs = element('div', 'page-tabs');
    tabs.setAttribute('role', 'tablist');
    const show = (name: 'gallery' | 'article'): void => {
      gallery.hidden = name !== 'gallery';
      layout.hidden = name !== 'article';
      for (const tab of tabs.querySelectorAll('button')) tab.setAttribute('aria-selected', String(tab.dataset.tab === name));
    };
    for (const [name, text] of [['gallery', 'Gallery'], ['article', 'Wiki article']] as const) {
      const tab = element('button', 'page-tab', text);
      tab.type = 'button';
      tab.dataset.tab = name;
      tab.setAttribute('role', 'tab');
      tab.addEventListener('click', () => show(name));
      tabs.append(tab);
    }
    wrap.append(tabs, gallery, layout);
    show('gallery');
  } else {
    wrap.append(layout);
  }
  view.append(wrap);
  if (layout.classList.contains('has-side')) wrap.insertBefore(jumpBar(layout), wrap.querySelector('.page-layout'));
  fitHints();
  document.title = `${page.title} – AC Wiki`;
  rememberPage(page.title);
}

const RECENT_KEY = 'ac-wiki-recent';

/** The pages last opened, newest first, for the start page. */
function recentPages(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]') as string[];
  } catch {
    return [];
  }
}

function rememberPage(title: string): void {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([title, ...recentPages().filter((t) => t !== title)].slice(0, 8)));
  } catch {
    // A browser without storage just has no history.
  }
}

/** Counts the routes, so a page that loads after a newer route does not replace it. */
let routed = 0;

function markNav(kind: string, arg: string): void {
  for (const a of document.querySelectorAll<HTMLAnchorElement>('.nav a')) {
    const target = a.dataset.nav ?? '';
    const active = target === kind + (kind === 'browse' ? `/${arg}` : '') || (target === 'home' && kind === '');
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  }
}

/** A screenshot of the wiki is a thumbnail; a click shows it large, another click puts it back. */
document.addEventListener('click', (event) => {
  const figure = (event.target as HTMLElement).closest('.wiki-shots figure');
  if (figure) figure.classList.toggle('zoomed');
  else document.querySelector('.wiki-shots figure.zoomed')?.classList.remove('zoomed');
});

async function route(): Promise<void> {
  const id = ++routed;
  const current = () => id === routed;
  leaveView();
  leaveView = () => {};
  lazyJobs.clear();
  closeOverlay();
  document.body.classList.add('loading');
  window.scrollTo(0, 0);

  const [, kind = '', ...rest] = location.hash.split('/');
  const arg = decodeURIComponent(rest.join('/'));
  markNav(kind, arg);
  // The start page has its own big search box, so the header's waits there.
  document.body.classList.toggle('on-home', kind === '' || kind === 'setup');
  document.body.classList.toggle('on-setup', kind === 'setup');
  searchBox.value = kind === 'search' ? arg : '';
  document.title = 'AC Wiki';
  try {
    if (kind === 'setup') showSetup();
    else if (kind === 'page' && arg) await showPage(arg, current);
    else if (kind === 'search' && arg) {
      await showSearch(arg, current);
      document.title = `${arg} – AC Wiki search`;
    } else if (kind === 'browse' && (arg === 'items' || arg === 'creatures')) await showBrowse(arg, current);
    else if (kind === 'categories') await showCategories(current);
    else if (kind === 'category' && arg) await showCategory(arg, current);
    else await showHome(current);
  } catch (error) {
    if (current()) {
      view.textContent = '';
      const box = element('section', 'missing card');
      box.append(element('h1', undefined, 'This page did not load'), element('p', 'setup-note', String(error)));
      view.append(box);
    }
  } finally {
    if (current()) document.body.classList.remove('loading');
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
  need<HTMLFormElement>('#search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    clearTimeout(searchTimer);
    const words = searchBox.value.trim();
    if (words) location.hash = `#/search/${encodeURIComponent(words)}`;
  });
  need<HTMLButtonElement>('#close').addEventListener('click', closeOverlay);
  // A click on the dark backdrop, outside the panel, closes the open view.
  detail.addEventListener('click', (event) => {
    if (event.target === detail) closeOverlay();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !detail.hidden) closeOverlay();
    const typing = event.target instanceof HTMLElement && event.target.matches('input, textarea, select');
    if (event.key === '/' && !typing && detail.hidden) {
      event.preventDefault();
      searchBox.focus();
      searchBox.select();
    }
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
