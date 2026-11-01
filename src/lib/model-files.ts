// Find the retail client files a model needs.
//
// The bestiary page must not read the 900 MB client data, so the build walks
// the model graph of every creature and puts the files into one bundle. The
// app walks the same graph through byte ranges of the user's DAT
// (RangedDat.readSubset). Both use the one rule below: which files a file
// names.

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { ClothingTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/ClothingTable.js';
import { GfxObj } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/GfxObj.js';
import { MotionTable, type MotionData } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/MotionTable.js';
import { SetupModel } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SetupModel.js';
import { Surface } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Surface.js';
import { SurfaceTexture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SurfaceTexture.js';
import { PaletteSet } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/PaletteSet.js';
import { Texture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Texture.js';
import type { DatFileSource } from '../../vendor/asheron-web/packages/dat-parser/src/RangedDat.js';

export interface ModelSpec {
  /** The setup of the body, the weenie did 1. */
  setupId: number;
  /** The clothing table of the body, the weenie did 7. */
  clothingTableId?: number;
  /** The palette of the body, the weenie did 6. */
  paletteId?: number;
  /** The motion table of the body, the weenie did 2. */
  motionTableId?: number;
}

/** The files a model starts from. */
export function modelRoots(model: ModelSpec): number[] {
  return [model.setupId, model.motionTableId, model.clothingTableId, model.paletteId].filter(
    (id): id is number => !!id,
  );
}

/**
 * The files one file names, by its type (the top byte of the id). Clothing
 * names files for each setup; only the model's own setup counts.
 */
export function modelDependencies(setupId: number): (id: number, data: ArrayBuffer) => number[] {
  return (id, data) => {
    const reader = new DatReader(data);
    switch (id >>> 24) {
      case 0x02:
        return new SetupModel(reader).parts;
      case 0x01:
        return new GfxObj(reader).surfaces;
      case 0x08: {
        const surface = Surface.read(reader);
        return [surface.origPaletteId, surface.origTextureId].filter((x) => !!x);
      }
      case 0x05: {
        // The last level is the portal level, the one the client draws.
        const levels = SurfaceTexture.read(reader).textures;
        return levels.length > 0 ? [levels[levels.length - 1]] : [];
      }
      case 0x06: {
        const palette = Texture.read(reader).defaultPaletteId;
        return palette ? [palette] : [];
      }
      case 0x09: {
        const table = new MotionTable(reader);
        const anims: number[] = [];
        const add = (motion: MotionData) => motion.anims.forEach((anim) => anims.push(anim.animId));
        table.cycles.forEach(add);
        table.modifiers.forEach(add);
        table.links.forEach((links) => links.forEach(add));
        return anims;
      }
      case 0x10: {
        const table = new ClothingTable(reader);
        const out: number[] = [];
        for (const objectEffect of table.clothingBaseEffects.get(setupId)?.cloObjectEffects ?? []) {
          for (const textureEffect of objectEffect.cloTextureEffects) out.push(textureEffect.newTexture);
        }
        // The palette sets of the clothes.
        for (const subPalEffect of table.clothingSubPalEffects.values()) {
          for (const subPalette of subPalEffect.cloSubPalettes) out.push(subPalette.paletteSet);
        }
        return out;
      }
      case 0x0f:
        return new PaletteSet(reader).paletteList;
      default:
        return [];
    }
  };
}

/** The file ids of a model that the client data holds. */
export function collectModelFiles(db: DatFileSource, model: ModelSpec): number[] {
  const ids = new Set<number>();
  const depsOf = modelDependencies(model.setupId);
  let wave = modelRoots(model);

  while (wave.length > 0) {
    const next: number[] = [];
    for (const raw of wave) {
      const id = raw >>> 0;
      if (id === 0 || ids.has(id)) continue;
      const data = db.getFileData(id);
      if (!data) continue;
      ids.add(id);
      next.push(...depsOf(id, data));
    }
    wave = next;
  }

  return [...ids];
}
