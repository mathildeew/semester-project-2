import { getAllAuctions } from "../../api/apiCalls/auctions/search.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";

export function endedFilter() {
  const endedFilter = document.querySelector("#filterTwo");
  const heading = document.querySelector("h2");

  endedFilter.addEventListener("click", async (event) => {
    const allAuctions = await getAllAuctions(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true`
    );

    const endedAuctions = allAuctions.filter((auction) => {
      if (new Date(auction.endsAt).getTime() < new Date().getTime()) {
        return true;
      }
    });

    const auctionsContainer = document.getElementById("auctions");
    auctionsContainer.innerHTML = "";
    heading.innerHTML = "Ended auctions";

    display(endedAuctions);
  });
}
