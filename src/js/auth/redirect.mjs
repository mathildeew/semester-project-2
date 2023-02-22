import * as storage from "../storage/localStorage.mjs";
const token = storage.get("token");

export function redirect() {
  if (token === undefined || token === null || token === "") {
    window.location.href = "/";
  }
}
