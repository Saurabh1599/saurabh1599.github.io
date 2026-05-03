// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://saurabh1599.github.io',
  base: '/SaurabhSawant.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});