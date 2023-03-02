import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";
import { filter } from "../../func/filter.mjs";
import { search } from "../../func/search.mjs";
import { nav } from "../../components/nav.mjs";
import { header } from "../../render/header.mjs";
import { unauth } from "../../auth/unauthHome.mjs";
import { getAll } from "../../api/apiCalls/auctions/get.mjs";

export async function home() {
  nav();
  header();
  unauth();
  const loader = document.getElementById("loader");

  loader.style.display = "none";

  let limit = 24;
  const auctions = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
  );
  display(auctions);

  const loadMoreBtn = document.getElementById("loadAuctions");

  loadMoreBtn.addEventListener("click", async () => {
    limit = limit + 6;
    const auctions = await getAll(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
    );
    display(auctions);
  });

  // const allAuctions = await get(
  //   `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  // );
  // const endedAuctions = await get(
  //   `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true`
  // );

  // search();
  // filter(auctions, allAuctions, endedAuctions);
}
