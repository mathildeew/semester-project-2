import * as storage from "../storage/localStorage.mjs";
import { unauthorizedBtn } from "./unauth/auctionBtn.mjs";
import { unauthorizedNav } from "./unauth/nav.mjs";

const token = storage.get("token");

export function authorizedVisibility() {
  if (token === undefined || token === null || token === "") {
    unauthorizedNav();
    unauthorizedBtn();
  }
}
