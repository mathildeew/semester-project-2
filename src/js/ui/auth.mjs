import * as storage from "../storage/localStorage.mjs";
import { unauthorizedBtn } from "./unauth.mjs/auctionBtn.mjs";
import { unauthorizedNav } from "./unauth.mjs/nav.mjs";

const token = storage.get("token");

export function authorizedVisibility() {
  if (token === undefined || token === null || token === "") {
    unauthorizedNav();
    unauthorizedBtn();
  }
}
