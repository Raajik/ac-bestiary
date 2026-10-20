// Render the still images of the tiles from the retail client data.
//
// The build collects the client files of every creature model into a bundle,
// then a headless browser builds the models and draws the retail examine
// picture of each one.

import { createServer } from 'node:http';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';
import { createServer as createViteServer } from 'vite';

import { packBundle } from './bundle.js';
import { openPortalDat } from './dat-facts.js';
import { collectModelFiles } from './model-files.js';

interface VariantFile {
  classId: number;
  setup: number;
  palette: number;
  clothing: number;
  paletteTemplate: number;
  shade: number;
}

interface CreatureFile {
  name: string;
  defaultVariant: number;
  variants: VariantFile[];
}

export interface StillsResult {
  /** The number of stills written. */
  count: number;
  /** The size of the model bundle in bytes. */
  bundleBytes: number;
  /** The number of client files in the bundle. */
  bundleFiles: number;
}

/** Render the still of every creature. */
export async function buildStills(
  dataPath: string,
  portalDat: string,
  distDir: string,
  pageRoot: string,
): Promise<StillsResult> {
  const data = JSON.parse(readFileSync(dataPath, 'utf8')) as { creatures: CreatureFile[] };

  // The still of a tile shows the model of the default variant.
  const jobs = data.creatures.flatMap((creature) => {
    const variant = creature.variants.find((v) => v.classId === creature.defaultVariant);
    if (!variant) return [];
    return [
      {
        name: String(variant.classId),
        setupId: variant.setup,
        clothingTableId: variant.clothing || undefined,
        paletteId: variant.palette || undefined,
        paletteTemplate: variant.paletteTemplate,
        shade: variant.shade,
      },
    ];
  });

  // The bundle holds the files of every model, so the page can show any variant.
  const modelSpecs = new Map<
    string,
    {
      setupId: number;
      clothingTableId?: number;
      paletteId?: number;
      paletteTemplate?: number;
      shade?: number;
    }
  >();
  for (const creature of data.creatures) {
    for (const variant of creature.variants) {
      const key = `${variant.setup}:${variant.clothing}:${variant.palette}`;
      if (!modelSpecs.has(key)) {
        modelSpecs.set(key, {
          setupId: variant.setup,
          clothingTableId: variant.clothing || undefined,
          paletteId: variant.palette || undefined,
          paletteTemplate: variant.paletteTemplate,
          shade: variant.shade,
        });
      }
    }
  }

  const db = openPortalDat(portalDat);

  const fileIds = new Set<number>();
  for (const spec of modelSpecs.values()) {
    for (const id of collectModelFiles(db, spec)) fileIds.add(id);
  }

  const files = new Map<number, Uint8Array>();
  for (const id of fileIds) {
    const fileData = db.getFileData(id);
    if (fileData) files.set(id, new Uint8Array(fileData));
  }

  const bundle = packBundle(files);
  writeFileSync(join(distDir, 'models.bin'), bundle);

  const stillDir = join(distDir, 'stills');
  mkdirSync(stillDir, { recursive: true });

  const vite = await createViteServer({
    configFile: join(pageRoot, '..', 'vite.config.ts'),
    root: join(pageRoot, 'builder'),
    server: { middlewareMode: true },
    appType: 'spa',
  });

  const http = createServer((req, res) => {
    const url = req.url ?? '/';

    if (url === '/models.json') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(jobs));
      return;
    }

    if (url === '/models.bin') {
      res.writeHead(200, { 'content-type': 'application/octet-stream' });
      res.end(bundle);
      return;
    }

    if (req.method === 'POST' && url.startsWith('/still/')) {
      const name = decodeURIComponent(url.slice('/still/'.length));
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(chunk as Buffer));
      req.on('end', () => {
        const body = Buffer.concat(chunks);
        if (body.length > 0) writeFileSync(join(stillDir, `${name}.png`), body);
        res.writeHead(204);
        res.end();
      });
      return;
    }

    vite.middlewares(req, res, () => {
      res.writeHead(404);
      res.end('not found');
    });
  });

  await new Promise<void>((resolve) => http.listen(0, '127.0.0.1', resolve));
  const address = http.address();
  const port = typeof address === 'object' && address ? address.port : 0;

  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader'],
  });

  try {
    const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
    page.on('pageerror', (error) => console.log(`  page error: ${error.message}`));

    await page.goto(`http://127.0.0.1:${port}/`);
    await page.waitForFunction('window.builderDone === true || window.builderError', undefined, {
      timeout: 900_000,
    });

    const error = await page.evaluate('window.builderError');
    if (error) throw new Error(`the builder page failed: ${error}`);
  } finally {
    await browser.close();
    await vite.close();
    http.close();
  }

  return { count: jobs.length, bundleBytes: bundle.byteLength, bundleFiles: files.size };
}
