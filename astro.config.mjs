// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical, Open Graph, robots.txt and sitemap URLs are built from this.
  // SITE_URL overrides it (e.g. a preview deploy). Astro doesn't load .env before the config, so
  // set it in the shell or CI environment.
  site: process.env.SITE_URL || 'https://awsscd-mindanao.org',
  // Inline the CSS so the first paint doesn't wait on three stylesheet requests. One page, so
  // there's no cross-page caching to lose.
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()]
  }
});