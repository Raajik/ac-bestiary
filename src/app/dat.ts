// The user's client_portal.dat, read through byte ranges (spec wiki-app.md, "Shell"): the vendored RangedDat reads
// each model's files and the files they name, and one CreatureModels builds from all files read so far.

import { RangedDat, DatFileSubset } from '../../vendor/asheron-web/packages/dat-parser/src/RangedDat.js';
import { CreatureModels, type CreatureModelSpec } from '../lib/creature-model.js';
import { iconPixels } from '../lib/icon-pixels.js';
import { modelDependencies, modelRoots } from '../lib/model-files.js';
import { readDatRange } from './api.js';

export class AppDat {
  private readonly files = new Map<number, ArrayBuffer>();
  /** Sees every file added to `files`, so the builder below can use each model's files once they are read. */
  private readonly subset = new DatFileSubset(this.files);
  readonly models = new CreatureModels(this.subset);
  private readonly icons = new Map<number, Promise<string | null>>();

  private constructor(private readonly dat: RangedDat) {}

  static async open(): Promise<AppDat> {
    return new AppDat(await RangedDat.open(readDatRange));
  }

  private async read(roots: number[], setupId: number): Promise<void> {
    const read = await this.dat.readSubset(roots, modelDependencies(setupId));
    for (const id of read.fileIds) this.files.set(id, read.getFileData(id)!);
  }

  /** Read the files of a model; then `models` can build it. */
  async loadModel(spec: CreatureModelSpec): Promise<CreatureModels> {
    await this.read(modelRoots(spec), spec.setupId);
    return this.models;
  }

  /** An item icon as a PNG data URL, white outline cleared; null when the DAT lacks it. */
  iconUrl(iconId: number): Promise<string | null> {
    let url = this.icons.get(iconId);
    if (!url) {
      url = this.read([iconId], 0).then(() => {
        const icon = iconPixels(this.subset, iconId);
        if (!icon) return null;
        const canvas = document.createElement('canvas');
        canvas.width = icon.width;
        canvas.height = icon.height;
        const context = canvas.getContext('2d')!;
        context.putImageData(new ImageData(new Uint8ClampedArray(icon.data), icon.width, icon.height), 0, 0);
        return canvas.toDataURL('image/png');
      });
      this.icons.set(iconId, url);
    }
    return url;
  }
}
