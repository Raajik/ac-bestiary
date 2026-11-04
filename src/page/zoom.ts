// The scroll-wheel zoom of the live 3D view. Pure maths, so a test can check it without WebGL.

export const MIN_ZOOM = 0.4;
export const MAX_ZOOM = 5;

/** The zoom after one wheel event: scrolling up zooms in. A line-mode wheel (Firefox) counts about 33 pixels a line. */
export function zoomAfterWheel(zoom: number, deltaY: number, deltaMode = 0): number {
  const pixels = deltaMode === 1 ? deltaY * 33 : deltaMode === 2 ? deltaY * 400 : deltaY;
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * Math.exp(-pixels * 0.0015)));
}

/** Move the camera along the line to the target: zoom 2 stands half as far away. */
export function zoomedPosition(
  position: readonly [number, number, number],
  target: readonly [number, number, number],
  zoom: number,
): [number, number, number] {
  return [
    target[0] + (position[0] - target[0]) / zoom,
    target[1] + (position[1] - target[1]) / zoom,
    target[2] + (position[2] - target[2]) / zoom,
  ];
}
