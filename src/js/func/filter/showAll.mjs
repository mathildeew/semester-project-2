import { getAll } from "../../api/apiCalls/auctions/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";

export function showAll() {
  const allAuctions = document.querySelector("#filterFour");

  allAuctions.addEventListener("click", async () => {
    let limit = 6;
    const auctions = await getAll(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
    );

    const heading = document.querySelector("h2");
    heading.innerHTML = "Latest auctions";
    const auctionsContainer = document.getElementById("auctions");
    auctionsContainer.innerHTML = "";

    display(auctions);
  });
}
