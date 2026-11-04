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
import { ModelEffects } from './effects.js';
import { attackMotion, motionButtons, type MotionButton, type MotionName } from './motions.js';
import { zoomAfterWheel, zoomedPosition } from './zoom.js';

/** The share of the idle pose's size added on each side of the framed box. */
const FRAME_MARGIN = 0.12;

/** The live model view. The drag turns the model, the wheel zooms, the motion table plays it. */
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
  private zoom = 1;
  private source: { models: CreatureModels; spec: CreatureModelSpec } | null = null;
  private effects: ModelEffects | null = null;
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
    // Not passive: the wheel over the view zooms it and must not scroll the page behind it.
    canvas.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
        this.zoom = zoomAfterWheel(this.zoom, event.deltaY, event.deltaMode);
        this.frameModel();
      },
      { passive: false },
    );
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
    this.zoom = 1;
    this.source = null;
    this.dropEffects();
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
    this.source = { models, spec };

    this.entity = model ? models.animate(model, spec) : null;
    this.buttons = motionButtons(this.entity?.motionManager.activeMotionTable ?? null);
    this.playing = 'idle';

    // The first frame of the idle, so the camera frames the pose the model
    // shows and not the rest pose.
    this.entity?.update(0);
    this.frameModel();
    if (this.frame) this.startEffects();
  }

  /**
   * Stand a flat item up (the wiki app's item pages). A weapon's rest pose lies flat, so the examine camera sees it
   * edge-on: turn the model about its longest axis until its thinnest side is the depth, then frame it again.
   */
  standUpFlat(): void {
    if (!this.model) return;
    const yaw = this.model.rotation.y;
    this.model.rotation.set(0, 0, 0);
    this.model.updateMatrixWorld(true);
    const size = new THREE.Box3().setFromObject(this.model).getSize(new THREE.Vector3());
    // Three.js has Y up. Lying flat means the height is the thinnest side.
    if (size.y < size.x && size.y < size.z) {
      // Yaw last, so a drag still turns the model about the up axis.
      this.model.rotation.order = 'YXZ';
      if (size.x >= size.z) this.model.rotation.x = Math.PI / 2;
      else this.model.rotation.z = Math.PI / 2;
    }
    this.model.rotation.y = yaw;
    this.model.updateMatrixWorld(true);
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
  /**
   * Zoom so the model itself (not the room the examine frame leaves around it) fills `share` of the window's
   * smaller side. An item is small in the examine frame, and a thin one more so.
   */
  /** Frame the model alone, not the model plus the point it stands on. */
  centreOnModel = false;

  fitModel(share = 0.72): void {
    if (!this.model) return;
    this.centreOnModel = true;
    this.zoom = 1;
    this.frameModel();
    this.camera.updateMatrixWorld(true);
    this.camera.updateProjectionMatrix();
    const box = new THREE.Box3().setFromObject(this.model);
    if (box.isEmpty()) return;
    let reach = 0;
    for (const x of [box.min.x, box.max.x]) {
      for (const y of [box.min.y, box.max.y]) {
        for (const z of [box.min.z, box.max.z]) {
          const point = new THREE.Vector3(x, y, z).project(this.camera);
          reach = Math.max(reach, Math.abs(point.x), Math.abs(point.y));
        }
      }
    }
    if (reach > 0) this.setZoom(Math.min(4, Math.max(0.6, share / reach)));
  }

  /** Zoom in or out and frame the model again (an item is small in the examine frame). */
  setZoom(zoom: number): void {
    this.zoom = zoom;
    this.frameModel();
  }

  frameModel(): void {
    if (!this.model) return;

    const width = this.canvas.width;
    const height = this.canvas.height;
    const box = new THREE.Box3().setFromObject(this.model);
    if (!this.centreOnModel) box.expandByPoint(new THREE.Vector3(0, 0, 0));
    // Room around the idle pose, so the arms of an attack and the fall of a death stay in the frame.
    box.expandByVector(box.getSize(new THREE.Vector3()).multiplyScalar(FRAME_MARGIN));
    const { min, max } = threeBoxToAc(box);

    const centre: [number, number, number] = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
    this.camera = buildCreatureModeCamera(
      zoomedPosition(examineCameraPosition(min, max, width, height), centre, this.zoom),
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

  /** The game's glow and sparkle on a model; off, the model shows plain (a glow can hide a thin weapon). */
  effectsOn = true;

  setEffects(on: boolean): void {
    this.effectsOn = on;
    if (this.frame) this.startEffects();
  }

  private startEffects(): void {
    this.dropEffects();
    if (!this.effectsOn || !this.model || !this.source) return;
    this.effects = ModelEffects.create(this.source.models, this.source.spec.setupId, this.model, () => this.camera, !this.entity);
  }

  private dropEffects(): void {
    this.effects?.dispose();
    this.effects = null;
  }

  /** Draw the model on every frame, until the viewer is closed. */
  start(): void {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.startEffects();
    this.lastTime = performance.now();
    const loop = () => {
      this.frame = requestAnimationFrame(loop);

      const now = performance.now();
      const delta = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;

      this.entity?.update(delta);
      this.effects?.update(delta);
      this.draw();
    };
    this.frame = requestAnimationFrame(loop);
  }

  /** Stop the draw loop. */
  stop(): void {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.dropEffects();
  }
}
