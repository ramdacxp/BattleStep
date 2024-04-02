// =============================================================================
// Persists different BattleStep data in browser's local storage
// =============================================================================

export function StorageGetName(): string {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("battleStepName") ?? "n/a";
    }
    return "n/a";
  }

  export function StorageSetName(name: string) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("battleStepName", name);
    }
  }
