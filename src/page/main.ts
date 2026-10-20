// The page: the grid of tiles, the filter bar and the open tile.

import { unpackBundle } from '../lib/bundle.js';
import { CreatureModels } from '../lib/creature-model.js';
import type { BestiaryData, Creature, Variant } from '../lib/types.js';
import { defaultVariant, readFilters, renderGrid, visibleCreatures } from './grid.js';
import { renderPanel } from './panel.js';
import { ModelViewer } from './viewer.js';

function need<T extends Element>(selector: string): T {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error(`missing element ${selector}`);
  return node;
}

async function main(): Promise<void> {
  const response = await fetch('data.json');
  const data = (await response.json()) as BestiaryData;

  const grid = need<HTMLElement>('#grid');
  const form = need<HTMLFormElement>('#filters');
  const count = need<HTMLElement>('#count');
  const detail = need<HTMLElement>('#detail');
  const panel = need<HTMLElement>('#panel');
  const canvas = need<HTMLCanvasElement>('#model-canvas');
  const close = need<HTMLButtonElement>('#close');

  const viewer = new ModelViewer(canvas);

  // The model bundle holds the client files of every creature model.
  let models: CreatureModels | null = null;
  const modelsPromise = fetch('models.bin')
    .then((res) => res.arrayBuffer())
    .then((buffer) => new CreatureModels(unpackBundle(buffer)));

  function showVariant(creature: Creature, variant: Variant): void {
    renderPanel(panel, creature, variant, (next) => showVariant(creature, next));

    // A new panel starts at the top of the box.
    const box = need<HTMLElement>('.detail-inner');
    box.scrollTop = 0;

    modelsPromise
      .then((loaded) => {
        models = loaded;
        viewer.resize();
        viewer.setCreature(loaded, {
          setupId: variant.setup,
          clothingTableId: variant.clothing || undefined,
          paletteId: variant.palette || undefined,
          paletteTemplate: variant.paletteTemplate,
          shade: variant.shade,
          motionTableId: variant.motionTable || undefined,
        });
        renderMotions();
        viewer.start();
      })
      .catch((error) => {
        need<HTMLElement>('#viewer-hint').textContent = `The model did not load: ${error}`;
      });
  }

  function renderMotions(): void {
    const box = need<HTMLElement>('#motions');
    box.textContent = '';

    for (const motion of viewer.motionButtonList) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = motion.label;
      button.setAttribute('aria-pressed', String(motion.name === viewer.currentMotion));
      button.addEventListener('click', () => {
        viewer.playMotion(motion.name);
        renderMotions();
      });
      box.append(button);
    }
  }

  function open(creature: Creature): void {
    detail.hidden = false;
    showVariant(creature, defaultVariant(creature));
  }

  function closeDetail(): void {
    detail.hidden = true;
    viewer.stop();
  }

  function applyFilters(): void {
    const visible = visibleCreatures(data.creatures, readFilters(form));
    renderGrid(grid, visible, open);
    count.textContent = `${visible.length} of ${data.creatures.length}`;
  }

  form.addEventListener('input', applyFilters);
  form.addEventListener('submit', (event) => event.preventDefault());
  close.addEventListener('click', closeDetail);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !detail.hidden) closeDetail();
  });

  applyFilters();
}

main().catch((error) => {
  document.body.textContent = `The page did not load: ${error}`;
});
