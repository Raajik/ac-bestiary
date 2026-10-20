/**
 * The offscreen draw behind the UI's CreatureMode viewports (the chargen
 * appearance / summary views, the barber's gmCG3DView, the examine
 * portrait): the scene CreatureMode lights — m_clrAmbientLight (0.3, 0.3,
 * 0.3) plus ONE DISTANT_LIGHT (UIElement_Viewport::SetLight) — rendered to
 * a target and copied, sRGB-encoded, into a 2D canvas.
 */
import * as THREE from 'three';
import { currentObjectAmbientScale } from '../models/RetailLighting.js';
import { CREATURE_MODE_AMBIENT } from './ChargenAppearanceView.js';
import { copyRenderTargetToImageData, distantLightPosition, type AcVec3 } from './CreatureViewCamera.js';

/**
 * A CreatureMode scene holding `model`: the viewport's ambient 0.3 (the
 * object materials scale the scene ambient by the world's
 * (amb + 0.2·dir) / amb factor, so it is divided back out) and the
 * DISTANT_LIGHT of `intensity` travelling along the AC `direction`.
 */
export function buildCreatureModeScene(model: THREE.Object3D, direction: AcVec3, intensity: number): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = null;
  const ambientScale = currentObjectAmbientScale();
  scene.add(new THREE.AmbientLight(0xffffff, CREATURE_MODE_AMBIENT / (ambientScale > 0 ? ambientScale : 1)));
  const dir = new THREE.DirectionalLight(0xffffff, intensity);
  const lp = distantLightPosition(direction);
  dir.position.set(lp[0], lp[1], lp[2]);
  dir.target.position.set(0, 0, 0);
  scene.add(dir);
  scene.add(dir.target);
  scene.add(model);
  return scene;
}

/**
 * The renderer's WebGL context is lost right now (a GPU reset, a driver
 * crash, the browser reclaiming the context). Its draws and reads are
 * no-ops then: a readback returns zeros.
 */
export function rendererContextLost(renderer: Pick<THREE.WebGLRenderer, 'getContext'>): boolean {
  try {
    return renderer.getContext()?.isContextLost?.() === true;
  } catch {
    return false;
  }
}

/**
 * Render `scene` from `camera` offscreen at the canvas size and copy it into
 * the canvas (transparent clear). False, and the canvas untouched, while the
 * renderer's context is lost: the readback would be all zeros and would wipe
 * the last good frame. The view redraws when the context comes back
 * (GameUI.redrawRendererViews).
 */
/**
 * A Modern DOM canvas has no width/height of its own, so its drawing buffer
 * stays 300x150 and the CSS box stretches it. Match the buffer to the box,
 * supersampled by the device pixel ratio (at most 2). Retail canvases keep their DAT size.
 */
export function fitCanvasToBox(canvas: HTMLCanvasElement): void {
  const box = canvas.getBoundingClientRect?.();
  const ratio = Math.min(2, typeof devicePixelRatio === 'number' && devicePixelRatio > 0 ? devicePixelRatio : 1);
  const w = Math.round((box?.width ?? 0) * ratio), h = Math.round((box?.height ?? 0) * ratio);
  if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
    canvas.width = w;
    canvas.height = h;
  }
}

export function renderSceneToCanvas(
  renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, canvas: HTMLCanvasElement,
  /** MSAA samples. Retail views keep 0. The Modern chargen preview passes 4 to smooth the edges. */
  samples = 0,
): boolean {
  if (rendererContextLost(renderer)) return false;
  const w = canvas.width, h = canvas.height;
  const renderTarget = new THREE.WebGLRenderTarget(w, h, { format: THREE.RGBAFormat, samples });
  const prevTarget = renderer.getRenderTarget();
  const prevAlpha = renderer.getClearAlpha();
  renderer.setClearAlpha(0);
  renderer.setRenderTarget(renderTarget);
  renderer.clear();
  renderer.render(scene, camera);
  renderer.setRenderTarget(prevTarget);
  renderer.setClearAlpha(prevAlpha);

  const pixels = new Uint8Array(w * h * 4);
  renderer.readRenderTargetPixels(renderTarget, 0, 0, w, h, pixels);
  renderTarget.dispose();
  // Lost during the draw: keep what the canvas showed.
  if (rendererContextLost(renderer)) return false;
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;
  const imageData = ctx.createImageData(w, h);
  // VISUAL.paperdoll-doll-dark — the target holds linear colour.
  copyRenderTargetToImageData(pixels, w, h, imageData.data);
  ctx.putImageData(imageData, 0, 0);
  return true;
}
