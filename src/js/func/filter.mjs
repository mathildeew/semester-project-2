import { endedFilter } from "./filter/ended.mjs";
import { notestFilter } from "./filter/noTest.mjs";
import { popularityFilter } from "./filter/popular.mjs";
import { allAuctionsFilter } from "./filter/withoutTest.mjs";

export function filter(auctions, allAuctions, endedAuctions) {
  // popularityFilter(allAuctions);
  endedFilter(endedAuctions);
  // notestFilter(allAuctions);
  // allAuctionsFilter(auctions);
}
