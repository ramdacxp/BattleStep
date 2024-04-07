import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // allow nested CSS
      nesting: true,
      applyBaseStyles: false,
    }),
    alpinejs({
      entrypoint: "/src/alpine-entrypoint"
    }),
  ],
});
