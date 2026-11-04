// The scroll-wheel zoom of the live 3D view.

import { describe, expect, it } from 'vitest';

import { MAX_ZOOM, MIN_ZOOM, zoomAfterWheel, zoomedPosition } from '../src/page/zoom.js';

describe('zoomAfterWheel', () => {
  it('zooms in when the wheel scrolls up and out when it scrolls down', () => {
    expect(zoomAfterWheel(1, -100)).toBeGreaterThan(1);
    expect(zoomAfterWheel(1, 100)).toBeLessThan(1);
  });

  it('stays between the limits', () => {
    expect(zoomAfterWheel(1, -100000)).toBe(MAX_ZOOM);
    expect(zoomAfterWheel(1, 100000)).toBe(MIN_ZOOM);
  });

  it('counts a line-mode wheel as more than the same number of pixels', () => {
    expect(zoomAfterWheel(1, -3, 1)).toBeGreaterThan(zoomAfterWheel(1, -3, 0));
  });
});

describe('zoomedPosition', () => {
  it('keeps the camera on the line to the target and divides its distance by the zoom', () => {
    expect(zoomedPosition([0, -10, 0], [0, 0, 0], 2)).toEqual([0, -5, 0]);
    expect(zoomedPosition([3, -10, 1], [1, 0, 1], 1)).toEqual([3, -10, 1]);
  });
});
