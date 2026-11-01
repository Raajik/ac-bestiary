// The still images of a list page's grid, rendered at run time one after another by one hidden viewer
// (spec wiki-app.md: one WebGL renderer, not a scene per tile). Each still shows the model's first idle frame.

import type { CreatureModelSpec } from '../lib/creature-model.js';
import { ModelViewer } from '../page/viewer.js';
import type { AppDat } from './dat.js';

export class StillRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly viewer: ModelViewer;
  private queue: Promise<unknown> = Promise.resolve();

  constructor(private readonly dat: AppDat) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'still-canvas';
    document.body.append(this.canvas);
    this.viewer = new ModelViewer(this.canvas);
  }

  /** The still of a model as a PNG data URL (an item stands up, as on its page). Renders run in order. */
  render(spec: CreatureModelSpec, item = false): Promise<string> {
    const job = this.queue.then(async () => {
      const models = await this.dat.loadModel(spec);
      this.viewer.resize();
      this.viewer.setCreature(models, spec);
      if (item) this.viewer.standUpFlat();
      this.viewer.draw();
      // Read the drawing in the same task as the render, before the browser clears it.
      return this.canvas.toDataURL('image/png');
    });
    this.queue = job.catch(() => undefined);
    return job;
  }
}
