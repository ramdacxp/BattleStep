# BattleStep Setup

List of the (important) steps on how this project was set up. Kind of.

## Required Tools

* Install [Git](https://git-scm.com/downloads)
* Install [NodeJS](https://nodejs.org/en/download)
* Install [Visual Studio Code](https://code.visualstudio.com/download)
* Clone the repo: `git clone https://github.com/ramdacxp/BattleStep.git`

## Steps

### Astro

Created project with `npm create astro@latest` while keeping the old README and stuff.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Add Tailwind

```cmd
npx astro add tailwind
```

### Add FlowBite

As [described here](https://flowbite.com/docs/getting-started/astro/#install-flowbite):

```cmd
npm install flowbite
```

Adapt `content` path and `plugins` in `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js", // <== add this
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"), // <== and this
  ],
};
```

### Add Alpine.js & Persist plugin

```cmd
npx astro add alpinejs
npm install @alpinejs/persist
npm install --save-dev @types/alpinejs__persist
```

adapt `astro.config.mjs`:

```javascript
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [
    alpinejs({
      entrypoint: "/src/alpine-entrypoint"
    }),
  ],
});
```

add `src/alpine-entrypoint.ts`:

```ts
import type { Alpine } from 'alpinejs'
import persist from '@alpinejs/persist'

export default (Alpine: Alpine) => {
    Alpine.plugin(persist)
}
```

## Links

* [GitHub status badges](https://shields.io/badges/git-hub-last-commit)

* [Astro Web Framework](https://astro.build/)
  * [Documentation](https://docs.astro.build)
  * [Integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/) for [Tailwind CSS](https://tailwindcss.com/)  
  * [Integration](https://docs.astro.build/en/guides/integrations-guide/alpinejs/) for [Alpine.js](https://alpinejs.dev/)
    * Alpine [Persist plugin](https://alpinejs.dev/plugins/persist)
* [FlowBite](https://flowbite.com/) with [install instructions for Tailwind CSS Astro - Flowbite](https://flowbite.com/docs/getting-started/astro/)
  * Instead of FlowBite's [modal toggling](https://flowbite.com/docs/components/modal/) the Alpine directive [x-show](https://alpinejs.dev/directives/show) is used, as its state can be [persisted](https://alpinejs.dev/plugins/persist#custom-key).
  * Other FlowBite JS methods can be used on demand.
