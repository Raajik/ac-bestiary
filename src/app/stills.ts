// The still images of a list page's grid, rendered at run time one after another by one hidden viewer
// (spec wiki-app.md: one WebGL renderer, not a scene per tile). Each still shows the model's first idle frame.

import type { CreatureModelSpec } from '../lib/creature-model.js';
import { ModelViewer } from '../page/viewer.js';
import type { AppDat } from './dat.js';

export class StillRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly viewer: ModelViewer;
  private queue: Promise<unknown> = Promise.resolve();
  /** The share of its own bounding box the last cropped model fills. */
  lastFill = 0;

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
      return item ? this.cropped() : this.canvas.toDataURL('image/png');
    });
    this.queue = job.catch(() => undefined);
    return job;
  }

  /**
   * The drawing cropped to the model and scaled to a square, so a small item fills its tile. Items differ in size
   * by a lot, and a tile needs no common scale; the creatures keep theirs (a Tusker next to a Tusker).
   */
  private cropped(): string {
    const size = this.canvas.width;
    const copy = document.createElement('canvas');
    copy.width = copy.height = size;
    const context = copy.getContext('2d', { willReadFrequently: true })!;
    context.drawImage(this.canvas, 0, 0, size, size);
    const { data } = context.getImageData(0, 0, size, size);
    let left = size, top = size, right = -1, bottom = -1;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (data[(y * size + x) * 4 + 3] <= 12) continue;
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
    if (right < 0) return copy.toDataURL('image/png');
    // A model that fills most of its own box is a flat plate seen face on: the caller shows the icon instead.
    let opaque = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] > 12) opaque++;
    const box = (right - left + 1) * (bottom - top + 1);
    this.lastFill = opaque / box;
    const side = Math.min(size, Math.ceil(Math.max(right - left, bottom - top + 1) * 1.3));
    const x = Math.max(0, Math.min(size - side, Math.round((left + right) / 2 - side / 2)));
    const y = Math.max(0, Math.min(size - side, Math.round((top + bottom) / 2 - side / 2)));
    const out = document.createElement('canvas');
    out.width = out.height = 384;
    const outContext = out.getContext('2d')!;
    // The dark blue of a Quiddity weapon sinks into the dark tile, so an item's still is lifted a little.
    outContext.filter = 'brightness(1.55) contrast(1.08) saturate(1.15)';
    outContext.drawImage(copy, x, y, side, side, 0, 0, 384, 384);
    return out.toDataURL('image/png');
  }
}
