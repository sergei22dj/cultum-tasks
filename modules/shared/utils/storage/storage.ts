/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string): string | null {
  return localStorage.getItem(key);
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string): boolean {
  localStorage.setItem(key, value);
  return true;
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load(key: string): any {
  const almostThere = localStorage.getItem(key);
  return JSON.parse(almostThere as string);
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: any): boolean {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string): void {
  localStorage.removeItem(key);
}

/**
 * Burn it all to the ground.
 */
export function clear(): void {
  localStorage.clear();
}
