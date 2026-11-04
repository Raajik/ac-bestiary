// The side of an item page (spec wiki-app.md, "an item page"): the model you can turn, the icon, and the appraisal
// panel with the template's values and, where the weenie has one, the game's value beside it.

import { appraisalRows, wikiText, type ItemVariant } from '../lib/game-records.js';
import type { CreatureModelSpec } from '../lib/creature-model.js';
import { ModelViewer } from '../page/viewer.js';
import type { AppDat } from './dat.js';
import type { WikiPage } from './pages.js';

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** The model of an item variant. */
export function itemSpec(variant: ItemVariant): CreatureModelSpec {
  return {
    setupId: variant.setup,
    clothingTableId: variant.clothing || undefined,
    paletteId: variant.palette || undefined,
    paletteTemplate: variant.paletteTemplate || undefined,
    shade: variant.shade || undefined,
  };
}

/**
 * Draw the side of an item page into `side`. `wikiImage` gives the URL of a snapshot image by the wiki's file name.
 * Gives the function that stops the model's draw loop.
 */
export function renderItemSide(
  side: HTMLElement,
  page: WikiPage,
  dat: AppDat | null,
  wikiImage: (name: string) => string | null,
): () => void {
  const params = page.itemParams ?? {};
  const variants = page.item?.variants ?? [];
  let viewer: ModelViewer | null = null;
  let shown = 0;

  const viewerBox = element('div', 'viewer');
  const canvas = element('canvas');
  const hint = element('p', 'hint', 'Drag to turn the model, scroll to zoom.');
  const tools = element('div', 'motions');
  const glow = element('button', undefined, 'Glow');
  glow.type = 'button';
  glow.title = "Show or hide the game's glow on this model";
  glow.setAttribute('aria-pressed', 'false');
  tools.append(glow);
  viewerBox.append(canvas, tools, hint);
  const panel = element('div', 'appraisal item-appraisal');
  side.append(viewerBox, panel);

  if (!dat || variants.length === 0) {
    viewerBox.hidden = true;
  } else {
    viewer = new ModelViewer(canvas);
    // A glow can hide a thin weapon, so the model starts plain and the button turns the glow on.
    viewer.setEffects(false);
    glow.addEventListener('click', () => {
      const on = glow.getAttribute('aria-pressed') !== 'true';
      glow.setAttribute('aria-pressed', String(on));
      viewer?.setEffects(on);
    });
  }

  const show = (variant: ItemVariant | null): void => {
    const current = ++shown;
    panel.textContent = '';

    const head = element('div', 'item-head');
    const icon = element('img', 'item-icon');
    icon.alt = '';
    const wikiIcon = params['Icon Image'] ? wikiImage(params['Icon Image'].replace(/ /g, '_')) : null;
    if (wikiIcon) icon.src = wikiIcon;
    if (dat && variant?.icon) {
      dat.iconUrl(variant.icon).then((url) => {
        if (url && current === shown) icon.src = url;
      });
    }
    const titles = element('div', 'item-titles');
    titles.append(element('h2', undefined, params.Name ? wikiText(params.Name) : page.title));
    if (params.Description) titles.append(element('p', 'item-description', wikiText(params.Description)));
    head.append(icon, titles);
    panel.append(head);

    if (variants.length > 1) {
      const list = element('div', 'variants');
      list.append(element('h3', undefined, 'Variants'));
      for (const other of variants) {
        const button = element('button', 'variant', `${other.name} `);
        button.type = 'button';
        button.append(element('span', 'class-id', `#${other.classId}`));
        button.setAttribute('aria-current', String(other === variant));
        button.addEventListener('click', () => show(other));
        list.append(button);
      }
      panel.append(list);
    }

    const all = appraisalRows(params, variant);
    // "Buffed X" joins the row of X, and a plain zero or "False" says nothing.
    const rows = all
      .filter((row) => !(row.label.startsWith('Buffed ') && all.some((other) => other.label === row.label.slice(7))))
      .map((row) => {
        const buffed = all.find((other) => other.label === `Buffed ${row.label}`);
        return buffed ? { ...row, wiki: `${row.wiki}  →  ${buffed.wiki} buffed` } : row;
      })
      .filter((row) => !(row.game === null && /^(0|false|no|none)$/i.test(row.wiki.trim()) && !row.wiki.includes('buffed')));
    // The rows in titled groups, in the order the groups first appear.
    const groupOf = (label: string): string =>
      /^(spells|spellcraft|mana|activation|arcane|difficulty|skill requirement|requirements?)/i.test(label) || /mana|spell/i.test(label)
        ? 'Magic and requirements'
        : /damage|speed|range|ammunition|defense|attack|modifier|armor|elemental|resist|bonus|weapon skill|weapon type|slots?|coverage/i.test(label)
          ? 'Combat'
          : 'General';
    const order = ['Combat', 'Magic and requirements', 'General'];
    const lists = new Map<string, HTMLElement>();
    const list = element('div', 'appraisal-rows');
    if (rows.some((row) => row.game !== null)) list.append(element('p', 'legend', '✓ means the game data agrees with the wiki'));
    for (const name of order) {
      const part = element('dl', 'rows appraisal-rows');
      lists.set(name, part);
    }
    for (const row of rows) {
      const dd = element('dd', row.label === 'Spells' ? 'spell-list' : undefined);
      if (row.label === 'Spells') {
        for (const spell of row.wiki.split(',')) dd.append(element('span', undefined, spell.trim()));
      } else {
        dd.append(element('span', 'value', row.wiki));
        // The tick has a cell of its own on every row, so the values share one right edge. A tick means the game
        // agrees; only a disagreement says more.
        const game = element('span', row.game !== null && row.differs ? 'game differs' : 'game', row.game === null ? '' : row.differs ? `game: ${row.game}` : '✓');
        if (row.game !== null) game.title = row.differs ? `The game's value is ${row.game}` : `The game's value agrees: ${row.game}`;
        dd.append(game);
      }
      lists.get(groupOf(row.label))!.append(element('dt', undefined, row.label), dd);
    }
    for (const [name, part] of lists) {
      if (part.children.length === 0) continue;
      const section = element('div', 'group');
      section.append(element('h3', undefined, name), part);
      list.append(section);
    }
    panel.append(list);
    if (variant) {
      panel.append(element('p', 'source', `Game values read from the ACE world database (item id ${variant.classId}).`));
    } else if (page.kind === 'item') {
      panel.append(element('p', 'source', 'This item is not in the ACE world database, so only the wiki’s values are shown.'));
    }

    if (viewer && variant) {
      const spec = itemSpec(variant);
      dat!
        .loadModel(spec)
        .then((models) => {
          if (current !== shown || !viewer) return;
          viewer.resize();
          viewer.setCreature(models, spec);
          viewer.standUpFlat();
          viewer.fitModel();
          viewer.start();
        })
        .catch((error) => {
          hint.textContent = `The model did not load: ${error}`;
        });
    }
  };

  show(variants[0] ?? null);
  return () => {
    shown++;
    viewer?.stop();
  };
}
