// https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript#creating-modules-in-typescript-with-export

/**
 * Persists different BattleStep data in browser's local storage
 */
export class DataStore {
  private readonly HasStorage = typeof localStorage !== "undefined";
  private readonly StorageKeyName = "battleStepName";

  constructor() {
    if (!this.HasStorage) this.log("Local storage is NOT supported!");
  }

  private log(msg: string) {
    console.log(`[DataStore] ${msg}`);
  }

  /**
   * Gets the configured name of the user.
   * @returns The configured name or NULL;
   */
  getName(): string | null {
    if (!this.HasStorage) return null;
    let name = localStorage.getItem(this.StorageKeyName);
    this.log(`Loaded ${this.StorageKeyName}: '${name}'`);
    return name;
  }

  setName(name: string) {
    if (!this.HasStorage) return;
    localStorage.setItem(this.StorageKeyName, name);
    this.log(`Set ${this.StorageKeyName} to: '${name}'`);
  }

  clearName() {
    if (!this.HasStorage) return;
    localStorage.removeItem(this.StorageKeyName);
    this.log(`[LocalStorage] Removed ${this.StorageKeyName}`);
  }
}
