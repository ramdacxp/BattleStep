# BattleStep Frontend

## Project Setup

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

  ```cmd
  npm install --location=global @angular/cli
  ng new --routing --minimal --style=scss --directory=frontend BattleStep
  ```

* [Tailwind CSS](https://tailwindcss.com/docs/upgrade-guide) is used for styling (added to Angular webapp by `ngx-tailwind` and upgraded to the latest version 3.1.2.).

  ```cmd
  cd frontend
  ng add ngx-tailwind
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```

* [Flowbite](https://github.com/themesberg/flowbite) Tailwind components are used.

  ```cmd
  npm install -D flowbite
  ```

  Related JavaScript is imported by WebPack (`import 'flowbite';` in `app.module.ts`) and the Flowbite plugin is used by Tailwind (`require('flowbite/plugin')` in `tailwind.config.js`).
