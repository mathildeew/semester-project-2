import { unauthorizedBtn } from "./unauth/auctionBtn.mjs";
import { unauthorizedNav } from "./unauth/nav.mjs";

export function auth() {
  unauthorizedNav();
  unauthorizedBtn();
}
