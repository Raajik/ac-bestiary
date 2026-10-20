// Build the three.js model of a creature from the model bundle.
//
// The model code is reused from asheron-web, which is not edited. The model
// is the body setup of the weenie, with the clothes of the clothing table
// and the colours of the palette.

import * as THREE from 'three';

import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { ClothingTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/ClothingTable.js';
import { Palette } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/Palette.js';
import { PaletteSet } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/PaletteSet.js';
import { DatFileSubset } from '../../vendor/asheron-web/packages/dat-parser/src/RangedDat.js';
import type { DatDatabase } from '../../vendor/asheron-web/packages/dat-parser/src/DatDatabase.js';
import { MaterialFactory } from '../../vendor/asheron-web/packages/renderer/src/models/MaterialFactory.js';
import { ModelRenderer } from '../../vendor/asheron-web/packages/renderer/src/models/ModelRenderer.js';
import { SetupModelRenderer } from '../../vendor/asheron-web/packages/renderer/src/models/SetupModelRenderer.js';
import { PLACEMENT_RESTING } from '../../vendor/asheron-web/packages/renderer/src/models/SetupModelGroup.js';
import { TextureManager } from '../../vendor/asheron-web/packages/renderer/src/models/TextureManager.js';

export interface CreatureModelSpec {
  /** The setup of the body, the weenie did 1. */
  setupId: number;
  /** The clothing table of the body, the weenie did 7. */
  clothingTableId?: number;
  /** The palette of the body, the weenie did 6. */
  paletteId?: number;
  /** The palette template of the body, the weenie property int 3. */
  paletteTemplate?: number;
  /** The shade of the body, the weenie property float 12. */
  shade?: number;
}

/** The model builder of one bundle. */
export class CreatureModels {
  private readonly files: DatFileSubset;
  private readonly textures: TextureManager;
  private readonly materials: MaterialFactory;
  private readonly models: ModelRenderer;
  private readonly setups: SetupModelRenderer;

  constructor(files: Map<number, Uint8Array>) {
    const buffers = new Map<number, ArrayBuffer>();
    for (const [id, data] of files) {
      buffers.set(id, data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer);
    }

    this.files = new DatFileSubset(buffers);

    // The model classes only read the file data, so the bundle stands in for
    // the client data.
    const db = this.files as unknown as DatDatabase;

    this.textures = new TextureManager(this.files);
    this.materials = new MaterialFactory(db, this.textures);
    this.models = new ModelRenderer(db, this.materials);
    this.setups = new SetupModelRenderer(db, this.models);
  }

  /** The colours of a palette file, or undefined when the file is missing. */
  private paletteColors(paletteId: number | undefined): number[] | undefined {
    if (!paletteId) return undefined;
    const data = this.files.getFileData(paletteId);
    if (!data) return undefined;
    return Palette.read(new DatReader(data)).colors;
  }

  /**
   * The colours of a body: the base palette with the ranges of the clothing
   * palette over it.
   *
   * The ranges come from the clothing table. The table holds one set of
   * ranges per palette template, and the weenie names the template. The set
   * names a palette set, which holds one palette per shade.
   */
  private compositePalette(spec: CreatureModelSpec): number[] | undefined {
    const base = this.paletteColors(spec.paletteId);
    if (!base) return undefined;
    if (!spec.clothingTableId) return base;

    const data = this.files.getFileData(spec.clothingTableId);
    if (!data) return base;

    const table = new ClothingTable(new DatReader(data));
    if (table.clothingSubPalEffects.size === 0) return base;

    const template = spec.paletteTemplate ?? 0;
    const effect = table.clothingSubPalEffects.get(template) ?? table.clothingSubPalEffects.values().next().value;
    if (!effect) return base;

    const composite = [...base];
    const shade = spec.shade ?? 0;

    for (const subPalette of effect.cloSubPalettes) {
      const setData = this.files.getFileData(subPalette.paletteSet);
      if (!setData) continue;

      const paletteSet = new PaletteSet(new DatReader(setData));
      const colors = this.paletteColors(paletteSet.getPaletteId(shade));
      if (!colors) continue;

      for (const range of subPalette.ranges) {
        const offset = range.offset / 8;
        const length = range.numColors / 8;
        for (let i = 0; i < length && offset + i < composite.length; i++) {
          if (offset + i < colors.length) composite[offset + i] = colors[offset + i];
        }
      }
    }

    return composite;
  }

  /**
   * The clothes of a body: the texture swaps of the parts.
   *
   * The clothing table also holds a model for each part. Those models are
   * clothing tables themselves, not the model of the part, so the build uses
   * only the texture swaps.
   */
  private clothingOverrides(
    clothingTableId: number | undefined,
    setupId: number,
  ): {
    perPartTextureOverrides?: Map<number, Map<number, number>>;
  } {
    if (!clothingTableId) return {};

    const data = this.files.getFileData(clothingTableId);
    if (!data) return {};

    const table = new ClothingTable(new DatReader(data));
    const effect = table.clothingBaseEffects.get(setupId);
    if (!effect) return {};

    const perPartTextureOverrides = new Map<number, Map<number, number>>();

    for (const objectEffect of effect.cloObjectEffects) {
      if (objectEffect.cloTextureEffects.length === 0) continue;

      const textureMap = new Map<number, number>();
      for (const textureEffect of objectEffect.cloTextureEffects) {
        textureMap.set(textureEffect.oldTexture, textureEffect.newTexture);
      }
      perPartTextureOverrides.set(objectEffect.index, textureMap);
    }

    return {
      perPartTextureOverrides: perPartTextureOverrides.size ? perPartTextureOverrides : undefined,
    };
  }

  /** The model of a creature, in the rest pose. */
  build(spec: CreatureModelSpec): THREE.Group | null {
    const clothing = this.clothingOverrides(spec.clothingTableId, spec.setupId);

    return this.setups.createSetupMeshWithOverrides(
      spec.setupId,
      PLACEMENT_RESTING,
      undefined,
      clothing.perPartTextureOverrides,
      this.compositePalette(spec),
    );
  }
}
