// The files an item model's effects need, read from the retail client data.

import { existsSync, openSync, readSync, closeSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { RangedDat } from '../vendor/asheron-web/packages/dat-parser/src/RangedDat.js';
import { PORTAL_DAT } from '../src/lib/paths.js';
import { modelDependencies } from '../src/lib/model-files.js';

const BOW_SETUP = 0x02000a77;
const BOW_DEFAULT_SCRIPT = 0x33000b11;

describe.skipIf(!existsSync(PORTAL_DAT) && !process.env.CI)('model effects files', () => {
  async function filesOf(effects: boolean): Promise<Set<number>> {
    const fd = openSync(PORTAL_DAT, 'r');
    try {
      const dat = await RangedDat.open(async (offset, length) => {
        const bytes = Buffer.alloc(length);
        const n = readSync(fd, bytes, 0, length, offset);
        return new Uint8Array(bytes.subarray(0, n));
      });
      const read = await dat.readSubset([BOW_SETUP], modelDependencies(BOW_SETUP, effects));
      return new Set(read.fileIds);
    } finally {
      closeSync(fd);
    }
  }

  it("reads the Bow of the Quiddity's default script and its particle emitters, and only with effects on", async () => {
    const without = await filesOf(false);
    expect(without.has(BOW_DEFAULT_SCRIPT)).toBe(false);

    const files = await filesOf(true);
    expect(files.has(BOW_DEFAULT_SCRIPT)).toBe(true);
    expect([...files].some((id) => id >>> 24 === 0x32)).toBe(true);
    expect(files.size).toBeGreaterThan(without.size);
  });
});
