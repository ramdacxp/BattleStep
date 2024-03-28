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

## Links

* [GitHub status badges](https://shields.io/badges/git-hub-last-commit)

* [Astro Web Framework](https://astro.build/)
  * [Documentation](https://docs.astro.build)

* [Tailwind CSS](https://tailwindcss.com/) & [FlowBite](https://flowbite.com/)
