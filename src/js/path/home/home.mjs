import { baseUrl } from "../../api/apiUrls.mjs";
import { get } from "../../api/apiCalls/get.mjs";
import { display } from "../../render/renderAuctions.mjs";
import { filter } from "../../func/filter.mjs";
import { search } from "../../func/search.mjs";
import { nav } from "../../components/nav.mjs";
import { header } from "../../render/header.mjs";
import { unauth } from "../../auth/unauthHome.mjs";

export async function home() {
  nav();
  header();
  unauth();
  const loadMoreBtn = document.getElementById("loadAuctions");
  const loader = document.getElementById("loader");
  const errorMessage = document.getElementById("errorMessageAPI");

  loader.style.display = "none";
  errorMessage.style.display = "none";

  try {
    let limit = 24;
    const auctions = await get(
      `${baseUrl}/auctionPP/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
    );
    // const allAuctions = await get(
    //   `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
    // );
    // const endedAuctions = await get(
    //   `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true`
    // );

    display(auctions);
    search();
    // filter(auctions, allAuctions, endedAuctions);
    loadMoreBtn.addEventListener("click", async () => {
      limit = limit + 6;
      const auctions = await get(
        `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
      );
      display(auctions);
    });
  } catch (error) {
    errorMessage.style.display = "inline";
    loadMoreBtn.style.display = "none";
    console.log(error);
  }
}
