import { endedFilter } from "./filter/ended.mjs";
import { notestFilter } from "./filter/noTest.mjs";
import { popular } from "./filter/popular.mjs";
import { showAll } from "./filter/showAll.mjs";

export function filter() {
  popular();
  endedFilter();
  showAll();
  // notestFilter(allAuctions);
  // allAuctionsFilter(auctions);
}
