import { baseUrl } from "../../api/apiUrls.mjs";
import { get } from "../../api/apiCalls/get.mjs";
import { display } from "./display.mjs";
import { filter } from "./filter.mjs";
import { search } from "./search.mjs";
import * as storage from "../../storage/localStorage.mjs";
import { auction } from "../auction/auction.mjs";

export async function home() {
  // Load more
  const loadMoreBtn = document.getElementById("loadAuctions");

  let limit = 5;

  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
  );

  display(auctions);

  loadMoreBtn.addEventListener("click", async () => {
    limit = limit + 5;
    const auctions = await get(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
    );
    display(auctions);
  });

  // Run search
  search();

  // Run filter function if user are logged in
  const token = storage.get("token");
  const filterContainer = document.getElementById("filter");
  token ? filter(auctions) : (filterContainer.style.display = "none");
}
