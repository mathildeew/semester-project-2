import { baseUrl } from "../../api/apiUrls.mjs";
import { get } from "../../api/apiCalls/get.mjs";
import { display } from "../../render/renderAuctions.mjs";
import { filter } from "../../func/filter.mjs";
import { search } from "../../func/search.mjs";
import * as storage from "../../storage/localStorage.mjs";
import { nav } from "../../components/nav.mjs";
import { header } from "../../render/header.mjs";
import { unauth } from "../../auth/unauthHome.mjs";

export async function home() {
  nav();
  header();
  unauth();
  // Display austions and load more
  const loadMoreBtn = document.getElementById("loadAuctions");
  let limit = 24;
  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
  );
  display(auctions);
  loadMoreBtn.addEventListener("click", async () => {
    limit = limit + 6;
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
  token ? filter() : (filterContainer.style.display = "none");
  const allAuctions = document.querySelector("#filterFour");
  allAuctions.addEventListener("click", () => {
    loadMoreBtn.style.display = "block";
    display(auctions);
  });
}
