import { describe, expect, it } from 'vitest';

import { clearWhiteOutline } from '../src/lib/icon-pixels.js';

// Tiny icons: T transparent, W pure white, R the item.
const T = [0, 0, 0, 0];
const W = [255, 255, 255, 255];
const R = [200, 0, 0, 255];

function icon(rows: number[][][]): Uint8Array {
  return new Uint8Array(rows.flat(2));
}

function alpha(data: Uint8Array, width: number, x: number, y: number): number {
  return data[(y * width + x) * 4 + 3];
}

describe('clearWhiteOutline', () => {
  it('clears the white ring around the item and keeps the item', () => {
    const data = icon([
      [T, T, T, T, T, T],
      [T, W, W, W, W, T],
      [T, W, R, R, W, T],
      [T, W, R, R, W, T],
      [T, W, W, W, W, T],
      [T, T, T, T, T, T],
    ]);
    clearWhiteOutline(data, 6, 6);
    expect(alpha(data, 6, 1, 1)).toBe(0);
    expect(alpha(data, 6, 4, 3)).toBe(0);
    expect(alpha(data, 6, 2, 2)).toBe(255);
  });

  it('keeps white that the item encloses', () => {
    const data = icon([
      [T, T, T, T, T],
      [T, R, R, R, T],
      [T, R, W, R, T],
      [T, R, R, R, T],
      [T, T, T, T, T],
    ]);
    clearWhiteOutline(data, 5, 5);
    expect(alpha(data, 5, 2, 2)).toBe(255);
  });

  it('clears white on the border of an icon with no transparent pixel', () => {
    const data = icon([
      [W, W, W],
      [W, R, W],
      [W, W, W],
    ]);
    clearWhiteOutline(data, 3, 3);
    expect(alpha(data, 3, 0, 0)).toBe(0);
    expect(alpha(data, 3, 1, 1)).toBe(255);
  });
});
