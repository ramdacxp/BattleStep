// https://docs.astro.build/en/recipes/sharing-state/
// https://github.com/nanostores/nanostores?tab=readme-ov-file#maps
// https://github.com/nanostores/persistent?tab=readme-ov-file#map-store

import { persistentMap } from "@nanostores/persistent";

export type BattleStepSettings = {
  name: string
  sidebar: "show" | "hide",
}

export const settings = persistentMap<BattleStepSettings>(
  "bs-settings-",
  {
    name: "You",
    sidebar: "show"
  });
