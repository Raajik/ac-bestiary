import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config.js';

export default defineConfig({
  // The vendored asheron-web files import each other through the same aliases as the page build.
  resolve: { alias: viteConfig.resolve?.alias },
  test: {
    include: ['tests/**/*.test.ts'],
    testTimeout: 120_000,
  },
});
