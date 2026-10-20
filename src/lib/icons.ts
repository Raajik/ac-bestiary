// Write the trophy icons of the page.
//
// The icons are the item icons of the retail client data. The build reads
// the texture file of each icon and writes a PNG.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PNG } from 'pngjs';

import { DatReader } from '../../../../asheron-web/packages/dat-parser/src/DatReader.js';
import { Palette } from '../../../../asheron-web/packages/dat-parser/src/file-types/Palette.js';
import { SurfacePixelFormat, Texture } from '../../../../asheron-web/packages/dat-parser/src/file-types/Texture.js';
import type { DatDatabase } from '../../../../asheron-web/packages/dat-parser/src/DatDatabase.js';

import { openPortalDat } from './dat-facts.js';

export interface IconJob {
  /** The item class id. The page asks for the icon by this name. */
  classId: number;
  /** The texture id of the icon, the weenie did 8. */
  iconId: number;
}

/** The icon of every item of the data file. */
export function iconJobs(data: {
  creatures: { variants: { trophies: { classId: number; icon: number | null }[] }[] }[];
}): IconJob[] {
  const icons = new Map<number, number>();
  for (const creature of data.creatures) {
    for (const variant of creature.variants) {
      for (const trophy of variant.trophies) {
        if (trophy.icon) icons.set(trophy.classId, trophy.icon);
      }
    }
  }
  return [...icons].map(([classId, iconId]) => ({ classId, iconId }));
}

/** Write the icon of every job as a PNG. */
export function writeIcons(db: DatDatabase, jobs: IconJob[], outDir: string): number {
  mkdirSync(outDir, { recursive: true });

  let written = 0;
  for (const job of jobs) {
    const data = db.getFileData(job.iconId);
    if (!data) continue;

    const texture = Texture.read(new DatReader(data));

    let rgba = texture.toRGBA();
    if (
      texture.format === SurfacePixelFormat.PFID_P8 ||
      texture.format === SurfacePixelFormat.PFID_INDEX16
    ) {
      const paletteData = texture.defaultPaletteId ? db.getFileData(texture.defaultPaletteId) : null;
      if (paletteData) {
        const colors = Palette.read(new DatReader(paletteData)).colors;
        rgba = texture.toRGBAWithPalette(colors);
      }
    }

    const png = new PNG({ width: texture.width, height: texture.height });
    png.data = Buffer.from(rgba.data);
    writeFileSync(join(outDir, `${job.classId}.png`), PNG.sync.write(png));
    written++;
  }

  return written;
}

/** Read the data file and write the icons. */
export function buildIcons(dataPath: string, portalDat: string, distDir: string): number {
  const data = JSON.parse(readFileSync(dataPath, 'utf8')) as {
    creatures: { variants: { trophies: { classId: number; icon: number | null }[] }[] }[];
  };
  const db = openPortalDat(portalDat);
  return writeIcons(db, iconJobs(data), join(distDir, 'icons'));
}
