// The pixels of an item icon, from its texture in the client data. Browser
// safe: the build's icon writer and the app both use it.

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { Palette } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Palette.js';
import { SurfacePixelFormat, Texture } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Texture.js';
import type { DatFileSource } from '../../vendor/asheron-web/packages/dat-parser/src/RangedDat.js';

export interface IconPixels {
  width: number;
  height: number;
  /** RGBA, 4 bytes a pixel. */
  data: Uint8Array;
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

/** The icon's RGBA pixels with the white outline cleared, or null when the client data lacks the texture. */
export function iconPixels(source: DatFileSource, iconId: number): IconPixels | null {
  const data = source.getFileData(iconId);
  if (!data) return null;
  const texture = Texture.read(new DatReader(data));

  let rgba = texture.toRGBA();
  if (texture.format === SurfacePixelFormat.PFID_P8 || texture.format === SurfacePixelFormat.PFID_INDEX16) {
    const paletteData = texture.defaultPaletteId ? source.getFileData(texture.defaultPaletteId) : null;
    if (paletteData) rgba = texture.toRGBAWithPalette(Palette.read(new DatReader(paletteData)).colors);
  }

  const pixels = new Uint8Array(rgba.data);
  clearWhiteOutline(pixels, texture.width, texture.height);
  return { width: texture.width, height: texture.height, data: pixels };
}
