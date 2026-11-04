// The open view of a creature: the live model with its motion buttons, and the appraisal panel. The bestiary page
// shows it over the grid; the wiki app shows it on a creature page and over a list page's grid.

import type { CreatureModelSpec, CreatureModels } from '../lib/creature-model.js';
import type { Creature, Variant } from '../lib/types.js';
import { renderPanel } from './panel.js';
import { ModelViewer } from './viewer.js';

export interface OpenViewParts {
  canvas: HTMLCanvasElement;
  motions: HTMLElement;
  hint: HTMLElement;
  panel: HTMLElement;
  /** The box that scrolls, put back to the top for a new panel. */
  scrollBox?: HTMLElement;
}

/** The model of a variant. */
export function variantSpec(variant: Variant): CreatureModelSpec {
  return {
    setupId: variant.setup,
    clothingTableId: variant.clothing || undefined,
    paletteId: variant.palette || undefined,
    paletteTemplate: variant.paletteTemplate,
    shade: variant.shade,
    motionTableId: variant.motionTable || undefined,
  };
}

export class OpenView {
  readonly viewer: ModelViewer;
  /** Counts the shows, so a model that loads after a newer show is dropped. */
  private shown = 0;

  constructor(
    private readonly parts: OpenViewParts,
    /** The model builder that holds the files of the variant's model. */
    private readonly models: (variant: Variant) => Promise<CreatureModels>,
    /** Runs after each panel render (the app turns the panel's links into app links). */
    private readonly afterPanel: (panel: HTMLElement, creature: Creature, variant: Variant) => void = () => {},
  ) {
    this.viewer = new ModelViewer(parts.canvas);
  }

  show(creature: Creature, variant: Variant): void {
    const show = ++this.shown;
    renderPanel(this.parts.panel, creature, variant, (next) => this.show(creature, next));
    this.afterPanel(this.parts.panel, creature, variant);
    if (this.parts.scrollBox) this.parts.scrollBox.scrollTop = 0;

    this.models(variant)
      .then((models) => {
        if (show !== this.shown) return;
        this.viewer.resize();
        this.viewer.setCreature(models, variantSpec(variant));
        this.renderMotions();
        this.viewer.start();
      })
      .catch((error) => {
        this.parts.hint.textContent = `The model did not load: ${error}`;
      });
  }

  stop(): void {
    this.shown++;
    this.viewer.stop();
  }

  private renderMotions(): void {
    const box = this.parts.motions;
    box.textContent = '';
    for (const motion of this.viewer.motionButtonList) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = motion.label;
      button.setAttribute('aria-pressed', String(motion.name === this.viewer.currentMotion));
      button.addEventListener('click', () => {
        this.viewer.playMotion(motion.name);
        this.renderMotions();
      });
      box.append(button);
    }
  }
}
