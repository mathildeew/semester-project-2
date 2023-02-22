import { remove } from "../storage/localStorage.mjs";

export function logout() {
  window.localStorage.clear();
}
