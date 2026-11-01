import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// The page, the build time page and the wiki app share the model code of
// asheron-web, so all need its path aliases. The target picks which one the
// build makes: `--mode app` is the wiki app (spec wiki-app.md).
const asheronWeb = resolve(import.meta.dirname, 'vendor/asheron-web');
const OUT_DIRS = { page: '../../dist', builder: '../../.builder', app: '../../dist-app' };

export default defineConfig(({ mode }) => {
  const target = mode === 'app' ? 'app' : process.env.AC_VITE_TARGET === 'builder' ? 'builder' : 'page';
  return {
    root: `src/${target}`,
    base: './',
    build: {
      outDir: OUT_DIRS[target],
      emptyOutDir: false,
      target: 'es2022',
    },
    server: {
      // Tauri's dev window loads the app from this port (src-tauri/tauri.conf.json).
      ...(target === 'app' ? { port: 5174, strictPort: true } : {}),
      fs: {
        allow: [resolve(import.meta.dirname), asheronWeb],
      },
    },
    resolve: {
      alias: [
        {
          // One three.js for the page and for the model code of asheron-web.
          find: /^three$/,
          replacement: resolve(import.meta.dirname, 'node_modules/three/build/three.module.js'),
        },
        {
          find: /^@ac\/shared$/,
          replacement: resolve(asheronWeb, 'packages/shared/src/index.ts'),
        },
        {
          find: /^@ac\/shared\/(.*)\.js$/,
          replacement: resolve(asheronWeb, 'packages/shared/src/$1.ts'),
        },
        {
          find: /^@ac\/dat-parser$/,
          replacement: resolve(asheronWeb, 'packages/dat-parser/src/index.ts'),
        },
        {
          find: /^@ac\/dat-parser\/(.*)\.js$/,
          replacement: resolve(asheronWeb, 'packages/dat-parser/src/$1.ts'),
        },
        {
          find: /^@ac\/dat-parser\/(.*)$/,
          replacement: resolve(asheronWeb, 'packages/dat-parser/src/$1'),
        },
        {
          find: /^@ac\/renderer\/(.*)\.js$/,
          replacement: resolve(asheronWeb, 'packages/renderer/src/$1.ts'),
        },
        {
          find: /^@ac\/renderer\/(.*)$/,
          replacement: resolve(asheronWeb, 'packages/renderer/src/$1'),
        },
      ],
    },
  };
});
