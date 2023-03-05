import { endedFilter } from "./filter/ended.mjs";
import { notestFilter } from "./filter/noTest.mjs";
import { popular } from "./filter/popular.mjs";
import { allAuctionsFilter } from "./filter/withoutTest.mjs";

export function filter() {
  popular();
  endedFilter();
  // notestFilter(allAuctions);
  // allAuctionsFilter(auctions);
}
