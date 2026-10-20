// Find the retail client files a creature model needs.
//
// The page must not read the 900 MB client data. The build walks the model
// graph of every creature and puts the files into one bundle.

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { ClothingTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/ClothingTable.js';
import { GfxObj } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/GfxObj.js';
import { MotionTable, type MotionData } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/MotionTable.js';
import { SetupModel } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SetupModel.js';
import { Surface } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Surface.js';
import { SurfaceTexture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SurfaceTexture.js';
import { PaletteSet } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/PaletteSet.js';
import { Texture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Texture.js';
import type { DatDatabase } from '../../vendor/asheron-web/packages/dat-parser/src/DatDatabase.js';

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

function readSurfaceTextureLevels(db: DatDatabase, id: number): number[] {
  const data = db.getFileData(id);
  if (!data) return [];
  return SurfaceTexture.read(new DatReader(data)).textures;
}

function readTexturePalette(db: DatDatabase, id: number): number | null {
  const data = db.getFileData(id);
  if (!data) return null;
  return Texture.read(new DatReader(data)).defaultPaletteId;
}

/** The file ids of one surface and the texture behind it. */
function surfaceFiles(db: DatDatabase, surfaceId: number, ids: Set<number>): void {
  ids.add(surfaceId);

  const data = db.getFileData(surfaceId);
  if (!data) return;
  const surface = Surface.read(new DatReader(data));

  if (surface.origPaletteId) ids.add(surface.origPaletteId);
  if (!surface.origTextureId) return;

  ids.add(surface.origTextureId);
  const levels = readSurfaceTextureLevels(db, surface.origTextureId);
  // The last level is the portal level, the one the client draws.
  const portalLevel = levels[levels.length - 1];
  if (portalLevel !== undefined) {
    ids.add(portalLevel);
    const paletteId = readTexturePalette(db, portalLevel);
    if (paletteId) ids.add(paletteId);
  }
}

/** The file ids of one model part and the surfaces behind it. */
function gfxObjFiles(db: DatDatabase, gfxObjId: number, ids: Set<number>): void {
  ids.add(gfxObjId);

  const data = db.getFileData(gfxObjId);
  if (!data) return;
  const gfxObj = new GfxObj(new DatReader(data));

  for (const surfaceId of gfxObj.surfaces) surfaceFiles(db, surfaceId, ids);
}

/** The file ids of a motion table and of every animation it plays. */
function motionFiles(db: DatDatabase, motionTableId: number, ids: Set<number>): void {
  ids.add(motionTableId);

  const data = db.getFileData(motionTableId);
  if (!data) return;

  const table = new MotionTable(new DatReader(data));

  const addMotion = (motion: MotionData) => {
    for (const anim of motion.anims) ids.add(anim.animId);
  };

  for (const motion of table.cycles.values()) addMotion(motion);
  for (const motion of table.modifiers.values()) addMotion(motion);
  for (const links of table.links.values()) {
    for (const motion of links.values()) addMotion(motion);
  }
}

/** The file ids of a creature model. */
export function collectModelFiles(db: DatDatabase, model: ModelSpec): number[] {
  const ids = new Set<number>();

  if (model.paletteId) ids.add(model.paletteId);

  const setupData = db.getFileData(model.setupId);
  if (setupData) {
    ids.add(model.setupId);
    const setup = new SetupModel(new DatReader(setupData));
    for (const partId of setup.parts) gfxObjFiles(db, partId, ids);
  }

  if (model.motionTableId) motionFiles(db, model.motionTableId, ids);

  if (model.clothingTableId) {
    ids.add(model.clothingTableId);

    const data = db.getFileData(model.clothingTableId);
    if (data) {
      const table = new ClothingTable(new DatReader(data));
      const effect = table.clothingBaseEffects.get(model.setupId);
      for (const objectEffect of effect?.cloObjectEffects ?? []) {
        for (const textureEffect of objectEffect.cloTextureEffects) {
          ids.add(textureEffect.newTexture);
          const levels = readSurfaceTextureLevels(db, textureEffect.newTexture);
          const portalLevel = levels[levels.length - 1];
          if (portalLevel !== undefined) {
            ids.add(portalLevel);
            const paletteId = readTexturePalette(db, portalLevel);
            if (paletteId) ids.add(paletteId);
          }
        }
      }

      // The palette sets of the clothes, and the palettes in them.
      for (const subPalEffect of table.clothingSubPalEffects.values()) {
        for (const subPalette of subPalEffect.cloSubPalettes) {
          ids.add(subPalette.paletteSet);
          const setData = db.getFileData(subPalette.paletteSet);
          if (!setData) continue;
          const paletteSet = new PaletteSet(new DatReader(setData));
          for (const paletteId of paletteSet.paletteList) ids.add(paletteId);
        }
      }
    }
  }

  return [...ids];
}
