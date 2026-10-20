// The build time page that renders the still images of the tiles.
//
// The page runs in a headless browser. It reads the model bundle, builds each
// creature model and renders the retail examine picture of it. The picture
// goes back to the build script.

import * as THREE from 'three';

import { buildCreatureModeScene, renderSceneToCanvas } from '../../vendor/asheron-web/packages/renderer/src/ui/CreatureViewRender.js';
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

import { unpackBundle } from '../lib/bundle.js';
import { CreatureModels } from '../lib/creature-model.js';

interface ModelJob {
  name: string;
  setupId: number;
  clothingTableId?: number;
  paletteId?: number;
  paletteTemplate?: number;
  shade?: number;
}

declare global {
  interface Window {
    builderDone?: boolean;
    builderError?: string;
  }
}

const status = document.getElementById('status') as HTMLParagraphElement;
const out = document.getElementById('out') as HTMLCanvasElement;
const gl = document.getElementById('gl') as HTMLCanvasElement;

async function run(): Promise<void> {
  const jobs = (await (await fetch('models.json')).json()) as ModelJob[];
  const bundle = unpackBundle(await (await fetch('models.bin')).arrayBuffer());

  const models = new CreatureModels(bundle);
  const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, stencil: true });
  installMirrorAwareCulling(renderer as never);

  for (const job of jobs) {
    status.textContent = `rendering ${job.name}`;

    const model = models.build({
      setupId: job.setupId,
      clothingTableId: job.clothingTableId,
      paletteId: job.paletteId,
      paletteTemplate: job.paletteTemplate,
      shade: job.shade,
    });
    if (!model) {
      await fetch(`still/${encodeURIComponent(job.name)}`, { method: 'POST', body: new Blob([]) });
      continue;
    }

    const scene = buildCreatureModeScene(model, EXAMINE_LIGHT_DIRECTION, EXAMINE_LIGHT_INTENSITY);
    setCellLighting(model, false, true);
    model.rotation.set(0, headingToModelYaw(EXAMINE_HEADING_DEG), 0);
    model.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(model).expandByPoint(new THREE.Vector3(0, 0, 0));
    const { min, max } = threeBoxToAc(box);
    const camera = buildCreatureModeCamera(
      examineCameraPosition(min, max, out.width, out.height),
      out.width,
      out.height,
      CREATURE_MODE_FOV_DEGREES,
      200,
    );

    renderSceneToCanvas(renderer, scene, camera, out, 4);

    const blob = await new Promise<Blob | null>((resolve) => out.toBlob(resolve, 'image/png'));
    await fetch(`still/${encodeURIComponent(job.name)}`, { method: 'POST', body: blob ?? new Blob([]) });
  }

  status.textContent = 'done';
  window.builderDone = true;
}

run().catch((error) => {
  status.textContent = `failed: ${error}`;
  window.builderError = String(error);
});
