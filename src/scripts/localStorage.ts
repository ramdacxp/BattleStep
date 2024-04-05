// =============================================================================
// Persists different BattleStep data in browser's local storage
// =============================================================================

const StorageKeyName = "battleStepName";

export function StorageGetName(): string | null {
  if (typeof localStorage !== "undefined") {
    let name = localStorage.getItem(StorageKeyName);
    console.log(`[LocalStorage] Loaded ${StorageKeyName}: '${name}'`);
    return name;
  }

  console.log("[LocalStorage] Browser does not support local storage!");
  return null;
}

export function StorageSetName(name: string) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(StorageKeyName, name);
    console.log(`[LocalStorage] Set ${StorageKeyName} to: '${name}'`);
  }
}

export function StorageClearName() {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(StorageKeyName);
    console.log(`[LocalStorage] Removed ${StorageKeyName}`);
  }
}
