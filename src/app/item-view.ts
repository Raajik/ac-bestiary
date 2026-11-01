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
  const hint = element('p', 'hint', 'Drag to turn the model.');
  viewerBox.append(canvas, hint);
  const panel = element('div', 'appraisal item-appraisal');
  side.append(viewerBox, panel);

  if (!dat || variants.length === 0) {
    viewerBox.hidden = true;
  } else {
    viewer = new ModelViewer(canvas);
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
    head.append(icon, element('h2', undefined, params.Name ? wikiText(params.Name) : page.title));
    panel.append(head);
    if (params.Description) panel.append(element('p', 'item-description', wikiText(params.Description)));

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

    const rows = appraisalRows(params, variant);
    const list = element('dl', 'rows appraisal-rows');
    for (const row of rows) {
      const dd = element('dd', undefined, row.wiki);
      if (row.game !== null) {
        const game = element('span', row.differs ? 'game differs' : 'game', row.differs ? `game: ${row.game}` : '✓ game');
        game.title = row.differs ? `The game's value is ${row.game}` : `The game's value agrees: ${row.game}`;
        dd.append(' ', game);
      }
      list.append(element('dt', undefined, row.label), dd);
    }
    panel.append(list);
    if (variant) {
      panel.append(element('p', 'source', `Game values: weenie ${variant.classId} of the ACE world database.`));
    } else if (page.kind === 'item') {
      panel.append(element('p', 'source', 'No weenie of this name in the ACE world database: wiki values only.'));
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
