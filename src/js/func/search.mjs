import { get } from "../api/apiCalls/get.mjs";
import { baseUrl } from "../api/apiUrls.mjs";
import { display } from "../render/renderAuctions.mjs";

export async function search() {
  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  );

  const searchInput = document.getElementById("search");
  const loadMoreBtn = document.getElementById("loadAuctions");

  searchInput.addEventListener("keyup", (event) => {
    loadMoreBtn.style.display = "none";

    const filter = event.target.value.trim().toLowerCase();
    const filteredAuctions = auctions.filter(function (auction) {
      if (auction.title.toLowerCase().includes(filter)) {
        return true;
      }
    });
    display(filteredAuctions);
  });
}
