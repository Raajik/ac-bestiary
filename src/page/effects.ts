// The effects an item model plays in the game: the particles of its setup's default script (the glow of a Quiddity
// weapon) and its setup's default animation. The code is asheron-web's own script player and particle system.

import * as THREE from 'three';

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { Animation } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Animation.js';
import { ParticleEmitterInfo } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/ParticleEmitterInfo.js';
import { PhysicsScript } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/PhysicsScript.js';
import { resolveEmitterSprite } from '../../vendor/asheron-web/packages/renderer/src/effects/EmitterSprite.js';
import { PhysicsScriptPlayer } from '../../vendor/asheron-web/packages/renderer/src/effects/PhysicsScriptPlayer.js';
import { SpellEffects } from '../../vendor/asheron-web/packages/renderer/src/effects/SpellEffects.js';
import type { ParticleSpriteOptions, ParticleView } from '../../vendor/asheron-web/packages/renderer/src/effects/ParticleSystem.js';
import { StaticAnimationDriver, tagStaticDefaultAnimation } from '../../vendor/asheron-web/packages/renderer/src/world/StaticAnimationDriver.js';

import type { CreatureModels } from '../lib/creature-model.js';

/** A cache of parsed files by id; a file the bundle lacks gives null. */
function cached<T>(parse: (id: number) => T | null): (id: number) => T | null {
  const seen = new Map<number, T | null>();
  return (id) => {
    if (!seen.has(id)) {
      try {
        seen.set(id, parse(id));
      } catch {
        seen.set(id, null);
      }
    }
    return seen.get(id) ?? null;
  };
}

export class ModelEffects {
  private readonly spellEffects: SpellEffects;
  private readonly scripts: PhysicsScriptPlayer;
  private readonly animation: StaticAnimationDriver | null;
  private readonly view: ParticleView = { viewer: new THREE.Vector3() };
  private readonly scene: THREE.Scene;
  private readonly patched = new WeakSet<THREE.Material>();

  private constructor(
    private readonly model: THREE.Group,
    private readonly camera: () => THREE.Camera,
    models: CreatureModels,
    setupId: number,
    withAnimation: boolean,
  ) {
    const { db, textures, setup } = models.effectSources(setupId);
    const file = (id: number) => db.getFileData(id);

    const loadScript = cached((id) => {
      const data = file(id);
      return data ? PhysicsScript.read(new DatReader(data)) : null;
    });
    const loadEmitter = cached((id) => {
      const data = file(id);
      return data ? new ParticleEmitterInfo(new DatReader(data)) : null;
    });
    const sprites = new Map<number, ParticleSpriteOptions | null>();
    const loadAnimation = cached((id) => {
      const data = file(id);
      return data ? new Animation(new DatReader(data)) : null;
    });

    this.scene = this.sceneOf(model);
    this.spellEffects = new SpellEffects(this.scene);
    this.spellEffects.setParticleView(this.view);
    this.scripts = new PhysicsScriptPlayer({
      spellEffects: this.spellEffects,
      // The views play no sound.
      soundPlayer: { playPositionalSound: () => Promise.resolve(), effectsVolume: 0 } as never,
      loadEmitterInfo: loadEmitter,
      getListenerPos: () => ({ x: 0, y: 0, z: 0 }),
      loadScript,
      resolveEmitterSprite: (info) => {
        if (!sprites.has(info.id)) sprites.set(info.id, resolveEmitterSprite(info, db, textures));
        return sprites.get(info.id) ?? null;
      },
    });

    // CPhysicsObj::InitDefaults: the setup's default script plays from the start.
    const script = setup?.defaultScript ? loadScript(setup.defaultScript) : null;
    if (script) this.scripts.play(script, model);

    // A model with a motion table of its own is posed by that; the default animation is for the rest.
    this.animation =
      withAnimation && setup?.defaultAnimation
        ? new StaticAnimationDriver({
            loadAnimation,
            onHook: (hook, anchor) => this.scripts.executeHook(hook, anchor),
          })
        : null;
    if (this.animation && setup) {
      tagStaticDefaultAnimation(model, setupId, setup.defaultAnimation);
      this.animation.attach(model);
    }
  }

  private sceneOf(model: THREE.Object3D): THREE.Scene {
    let node: THREE.Object3D = model;
    while (node.parent) node = node.parent;
    return node as THREE.Scene;
  }

  /**
   * The game draws into a buffer with no alpha, so an additive particle only adds light. The canvas here has alpha
   * and the page shows through it: an additive quad that also adds alpha would paint its black corners opaque.
   */
  private keepCanvasAlpha(node: THREE.Object3D, inParticles: boolean): void {
    const particles = inParticles || node.name.startsWith('particles_');
    const material = (node as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
    if (particles && material) {
      for (const one of Array.isArray(material) ? material : [material]) {
        const additive = one.blending === THREE.AdditiveBlending || (one.blending === THREE.CustomBlending && one.blendDst === THREE.OneFactor);
        if (!additive || this.patched.has(one)) continue;
        one.blending = THREE.CustomBlending;
        one.blendEquation = THREE.AddEquation;
        one.blendSrc = THREE.SrcAlphaFactor;
        one.blendDst = THREE.OneFactor;
        one.blendSrcAlpha = THREE.ZeroFactor;
        one.blendDstAlpha = THREE.OneFactor;
        one.needsUpdate = true;
        this.patched.add(one);
      }
    }
    for (const child of node.children) this.keepCanvasAlpha(child, particles);
  }

  /** Effects for a model already in its scene; null when the setup has nothing to play. */
  static create(
    models: CreatureModels,
    setupId: number,
    model: THREE.Group,
    camera: () => THREE.Camera,
    withAnimation: boolean,
  ): ModelEffects | null {
    const setup = models.effectSources(setupId).setup;
    if (!setup || (!setup.defaultScript && !(withAnimation && setup.defaultAnimation))) return null;
    return new ModelEffects(model, camera, models, setupId, withAnimation);
  }

  /** Advance the animation, the script and the particles by `dt` seconds. */
  update(dt: number): void {
    this.camera().getWorldPosition(this.view.viewer);
    this.animation?.update(dt);
    this.scripts.update(dt);
    this.spellEffects.update(dt);
    this.keepCanvasAlpha(this.scene, false);
  }

  dispose(): void {
    this.animation?.detach(this.model);
    this.scripts.stopForAnchor(this.model);
    this.spellEffects.dispose();
  }
}
