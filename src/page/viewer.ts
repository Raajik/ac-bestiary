// The live 3D view of an open tile.

import * as THREE from 'three';

import { buildCreatureModeScene } from '../../vendor/asheron-web/packages/renderer/src/ui/CreatureViewRender.js';
import {
  buildCreatureModeCamera,
  CREATURE_MODE_FOV_DEGREES,
  EXAMINE_HEADING_DEG,
  EXAMINE_LIGHT_DIRECTION,
  EXAMINE_LIGHT_INTENSITY,
  examineCameraPosition,
  headingToModelYaw,
  threeBoxToAc,
} from '../../vendor/asheron-web/packages/renderer/src/ui/CreatureViewCamera.js';
import { setCellLighting } from '../../vendor/asheron-web/packages/renderer/src/models/RetailLighting.js';
import { installMirrorAwareCulling } from '../../vendor/asheron-web/packages/renderer/src/scene/WorldMirror.js';

import type { CreatureModelSpec, CreatureModels } from '../lib/creature-model.js';

/** The live model view. The drag turns the model. */
export class ModelViewer {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(CREATURE_MODE_FOV_DEGREES, 1, 0.1, 200);
  private model: THREE.Group | null = null;
  private dragging = false;
  private lastX = 0;
  private frame = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    installMirrorAwareCulling(this.renderer as never);
    this.scene.background = null;

    canvas.addEventListener('pointerdown', (event) => {
      this.dragging = true;
      this.lastX = event.clientX;
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener('pointermove', (event) => {
      if (!this.dragging || !this.model) return;
      this.model.rotation.y += (event.clientX - this.lastX) * 0.01;
      this.lastX = event.clientX;
    });
    const stop = (event: PointerEvent) => {
      this.dragging = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
  }

  /** Show a model. The model is built by the caller from the bundle. */
  setModel(model: THREE.Group | null): void {
    this.model = model;
    if (!model) return;

    setCellLighting(model, false, true);

    // The retail examine portrait: the same light and the same heading.
    model.rotation.set(0, headingToModelYaw(EXAMINE_HEADING_DEG), 0);
    model.updateMatrixWorld(true);

    this.scene = buildCreatureModeScene(model, EXAMINE_LIGHT_DIRECTION, EXAMINE_LIGHT_INTENSITY);
    this.scene.background = null;
  }

  /** Build a model of a creature from the bundle. */
  setCreature(models: CreatureModels, spec: CreatureModelSpec): void {
    this.setModel(models.build(spec));
    this.frameModel();
  }

  /** Point the camera at the model, the way the retail portrait does. */
  frameModel(): void {
    if (!this.model) return;

    const width = this.canvas.width;
    const height = this.canvas.height;
    const box = new THREE.Box3().setFromObject(this.model).expandByPoint(new THREE.Vector3(0, 0, 0));
    const { min, max } = threeBoxToAc(box);

    this.camera = buildCreatureModeCamera(
      examineCameraPosition(min, max, width, height),
      width,
      height,
      CREATURE_MODE_FOV_DEGREES,
      200,
    );
  }

  /** Match the drawing buffer to the box of the canvas. */
  resize(): void {
    const box = this.canvas.getBoundingClientRect();
    const ratio = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(box.width * ratio));
    const height = Math.max(1, Math.round(box.height * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      // The renderer draws into its own viewport, which the canvas size sets.
      this.renderer.setSize(width, height, false);
    }
    this.frameModel();
  }

  /** Draw the model. */
  draw(): void {
    if (!this.model) return;
    this.renderer.setClearAlpha(0);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }

  /** Draw the model on every frame, until the viewer is closed. */
  start(): void {
    const loop = () => {
      this.frame = requestAnimationFrame(loop);
      this.draw();
    };
    this.frame = requestAnimationFrame(loop);
  }

  /** Stop the draw loop. */
  stop(): void {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = 0;
  }
}
