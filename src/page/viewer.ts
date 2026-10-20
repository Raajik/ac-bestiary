// The live 3D view of an open tile.

import * as THREE from 'three';

import { AnimatedEntity } from '../../vendor/asheron-web/packages/renderer/src/animation/AnimatedEntity.js';
import { MotionCommand } from '../../vendor/asheron-web/packages/renderer/src/animation/MotionCommands.js';
import { MotionManager } from '../../vendor/asheron-web/packages/renderer/src/animation/MotionManager.js';
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
import { attackMotion, motionButtons, type MotionButton, type MotionName } from './motions.js';

/** The share of the idle pose's size added on each side of the framed box. */
const FRAME_MARGIN = 0.12;

/** The live model view. The drag turns the model, the motion table plays it. */
export class ModelViewer {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(CREATURE_MODE_FOV_DEGREES, 1, 0.1, 200);
  private model: THREE.Group | null = null;
  private entity: AnimatedEntity | null = null;
  private buttons: MotionButton[] = [];
  private playing: MotionName = 'idle';
  private dragging = false;
  private lastX = 0;
  private frame = 0;
  private lastTime = 0;

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
      // Minus: a drag to the right turns the front of the model to the right (the plus felt reversed, user 2026-10-20).
      this.model.rotation.y -= (event.clientX - this.lastX) * 0.01;
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

  /** Build a model of a creature from the bundle, and let it play its idle. */
  setCreature(models: CreatureModels, spec: CreatureModelSpec): void {
    const model = models.build(spec);
    this.setModel(model);

    this.entity = model ? models.animate(model, spec) : null;
    this.buttons = motionButtons(this.entity?.motionManager.activeMotionTable ?? null);
    this.playing = 'idle';

    // The first frame of the idle, so the camera frames the pose the model
    // shows and not the rest pose.
    this.entity?.update(0);
    this.frameModel();
  }

  /** The buttons the motion table of the creature gives. */
  get motionButtonList(): MotionButton[] {
    return this.buttons;
  }

  /** The motion that plays now. */
  get currentMotion(): MotionName {
    return this.playing;
  }

  /**
   * Play a motion until another one is chosen (spec "Open tile").
   *
   * Walk and run are cycles, so they keep going. The attack is an action, so
   * it is queued again each time it ends. The death falls and holds the dead
   * pose. Idle is the ready stance of the table's default style.
   */
  playMotion(name: MotionName): void {
    const manager = this.entity?.motionManager;
    const table = manager?.activeMotionTable;
    if (!manager || !table) return;

    this.playing = name;
    // Every motion starts from the ready stance, because the table only links the motions from there.
    manager.revive();
    manager.overrideStyleId(table.defaultStyle);
    manager.setDefaultStance(1.0);

    if (name === 'idle') {
      return;
    } else if (name === 'walk' || name === 'run') {
      // The table keys its cycles by style and motion, as the game client asks for them.
      const command = name === 'walk' ? MotionCommand.WalkForward : MotionCommand.RunForward;
      manager.setForwardMotion(MotionManager.compositeKey(table.defaultStyle, command & 0xfffff), 1.0);
    } else if (name === 'attack') {
      const attack = attackMotion(table);
      if (!attack) return;
      // The attack links live in the combat style of the table.
      const again = () => {
        if (this.playing !== 'attack') return;
        manager.overrideStyleId(attack.style);
        manager.queueAction(attack.command, 1.0, again);
      };
      again();
    } else {
      manager.playDeath(MotionCommand.Dead & 0xffff, 1.0);
    }
  }

  /** Point the camera at the model, the way the retail portrait does. */
  frameModel(): void {
    if (!this.model) return;

    const width = this.canvas.width;
    const height = this.canvas.height;
    const box = new THREE.Box3().setFromObject(this.model).expandByPoint(new THREE.Vector3(0, 0, 0));
    // Room around the idle pose, so the arms of an attack and the fall of a death stay in the frame.
    box.expandByVector(box.getSize(new THREE.Vector3()).multiplyScalar(FRAME_MARGIN));
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
    this.lastTime = performance.now();
    const loop = () => {
      this.frame = requestAnimationFrame(loop);

      const now = performance.now();
      const delta = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;

      this.entity?.update(delta);
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
