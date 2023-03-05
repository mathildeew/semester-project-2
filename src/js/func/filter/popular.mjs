import { getAllAuctions } from "../../api/apiCalls/auctions/search.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";

export function popular() {
  const popularFilter = document.querySelector("#filterOne");
  const heading = document.querySelector("h2");

  popularFilter.addEventListener("click", async (event) => {
    const allAuctions = await getAllAuctions(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
    );

    const auctionsWithBids = allAuctions.filter((auctions) => {
      if (auctions._count.bids === 0) {
        return false;
      } else {
        return true;
      }
    });

    const mostPopular = auctionsWithBids.sort(function (a, b) {
      return b._count.bids - a._count.bids;
    });

    const mostPopularLimit = mostPopular.slice(0, 18);

    const auctionsContainer = document.getElementById("auctions");
    auctionsContainer.innerHTML = "";
    heading.innerHTML = "Most popular auctions";
    display(mostPopularLimit);
  });
}
