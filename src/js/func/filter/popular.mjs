import { display } from "../../render/renderAuctions.mjs";

export function popularityFilter(auctions) {
  const popularFilter = document.querySelector("#filterOne");
  const loadMoreBtn = document.getElementById("loadAuctions");

  const auctionsWithBids = auctions.filter((auctions) => {
    if (auctions._count.bids === 0) {
      return false;
    } else {
      return true;
    }
  });

  popularFilter.addEventListener("click", () => {
    const mostPopular = auctionsWithBids.sort(function (a, b) {
      return b._count.bids - a._count.bids;
    });
    loadMoreBtn.style.display = "none";
    display(mostPopular);
  });
}
