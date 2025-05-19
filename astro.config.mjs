// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://synku20777.github.io',
  base: 'hovedopgave-landing',
  // output: 'server',
  // adapter: node(),
  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [react()]
});