/**
 * Stores item in localStorage.
 * @param {*} key The name of the item
 * @param {*} value The item that is stored
 * @example
 * ```
 * // Stores the name in json
 * localStorage.set("name", json.name)
 * ```
 */
export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieve item from localStorage
 * @param {*} key The name of the item
 * @returns - Item from localStorage
 * @example
 * ```
 * // Retrieves name in localStorage and saves it as a constant
 * const name = localStorage.get("name")
 * ```
 */
export function get(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * Removes an item from localStorage
 * @param {*} key The item thats removed
 * @example
 * ```
 * // Removes name from localStorage
 * localStorage.remove("name")
 * ```
 */
export function remove(key) {
  localStorage.removeItem(key);
}
