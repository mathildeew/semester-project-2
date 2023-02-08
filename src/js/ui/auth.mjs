import * as storage from "../storage/localStorage.mjs";
import { unauthorizedBtn } from "./unauth/auctionBtn.mjs";
import { unauthorizedNav } from "./unauth/nav.mjs";

const token = storage.get("token");

export function auth() {
  unauthorizedNav();
  unauthorizedBtn();
}
