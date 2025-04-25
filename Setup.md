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

### Add Tailwind v4

While upgrading to Tailwind v4, remove all previous tailwind components (`npm uninstall xxx`) and references in code (`tailwind.config.mjs` is no longer used, `@astrojs/tailwind` is deprecated).

Add [Tailwind v4](https://docs.astro.build/en/guides/styling/#tailwind):

* Execute `npx astro add tailwind`
* Add `@import "tailwindcss";` to `src\layouts\Global.css`

Add [Tailwind Forms Plugin](https://github.com/tailwindlabs/tailwindcss/discussions/15816#discussioncomment-12085950):

* `npm i -D @tailwindcss/forms`
* add `@plugin "@tailwindcss/forms";` to `src\layouts\Global.css`

### Add FlowBite

As [described here](https://flowbite.com/docs/getting-started/astro/#install-flowbite):

* `npm install flowbite`
* Add the 3 FlowBite statements after Tailwind to `src\layouts\Global.css`:

  ```css
  @import "tailwindcss";
  @plugin "@tailwindcss/forms";
  @import "flowbite/src/themes/default";
  @plugin "flowbite/plugin";
  @source "../../node_modules/flowbite";
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

### Check for NPM updates

Also checks for new major versions.

```cmd
npx npm-check-updates
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
