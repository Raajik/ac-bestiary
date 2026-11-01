// Write the trophy icons of the page.
//
// The icons are the item icons of the retail client data. The build reads
// the texture file of each icon and writes a PNG.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PNG } from 'pngjs';

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { Palette } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Palette.js';
import { SurfacePixelFormat, Texture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Texture.js';
import type { DatDatabase } from '../../vendor/asheron-web/packages/dat-parser/src/DatDatabase.js';

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

/**
 * Make the pure white pixels that touch the transparent background, or the
 * border, through pure white only, transparent (spec "Open tile", trophies).
 * The retail client hides this white outline under an underlay.
 */
export function clearWhiteOutline(data: Uint8Array, width: number, height: number): void {
  const isWhite = (i: number) =>
    data[i * 4] === 255 && data[i * 4 + 1] === 255 && data[i * 4 + 2] === 255 && data[i * 4 + 3] === 255;
  const seen = new Uint8Array(width * height);
  const stack: number[] = [];

  // Seeds: every transparent pixel, and every white pixel on the border.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const border = x === 0 || y === 0 || x === width - 1 || y === height - 1;
      if (data[i * 4 + 3] === 0 || (border && isWhite(i))) {
        seen[i] = 1;
        stack.push(i);
      }
    }
  }

  while (stack.length > 0) {
    const i = stack.pop()!;
    if (isWhite(i)) data[i * 4 + 3] = 0;
    const x = i % width;
    const y = (i - x) / width;
    for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const n = ny * width + nx;
      if (seen[n] || !isWhite(n)) continue;
      seen[n] = 1;
      stack.push(n);
    }
  }
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
    clearWhiteOutline(png.data, texture.width, texture.height);
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
