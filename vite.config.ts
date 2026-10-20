import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// The page and the build time page share the model code of asheron-web, so
// both need its path aliases. The target picks which of the two pages the
// build makes.
const asheronWeb = resolve(import.meta.dirname, '../../asheron-web');
const target = process.env.AC_VITE_TARGET === 'builder' ? 'builder' : 'page';

export default defineConfig({
  root: `src/${target}`,
  base: './',
  build: {
    outDir: target === 'builder' ? '../../.builder' : '../../dist',
    emptyOutDir: false,
    target: 'es2022',
  },
  server: {
    fs: {
      allow: [resolve(import.meta.dirname), asheronWeb],
    },
  },
  resolve: {
    alias: [
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
});
