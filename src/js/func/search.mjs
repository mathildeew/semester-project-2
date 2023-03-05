import { getAllAuctions } from "../api/apiCalls/auctions/search.mjs";
import { baseUrl } from "../api/apiUrls.mjs";
import { display } from "../render/renderAuctions.mjs";

export async function search() {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", async (event) => {
    const allAuctions = await getAllAuctions(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
    );
    const filter = event.target.value.trim().toLowerCase();

    const filteredAuctions = allAuctions.filter(function (auction) {
      if (auction.title.toLowerCase().includes(filter)) {
        return true;
      }
    });

    const auctionsContainer = document.getElementById("auctions");
    auctionsContainer.innerHTML = "";

    display(filteredAuctions);
  });
}
