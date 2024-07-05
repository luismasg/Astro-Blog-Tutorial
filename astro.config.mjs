import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://bright-pegasus-2be2b3.netlify.app",
  integrations: [preact()]
});