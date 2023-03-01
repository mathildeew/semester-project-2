import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "./display.mjs";

export async function filter() {
  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  );

  const popularFilter = document.querySelector("#filterOne");
  const endedFilter = document.querySelector("#filterTwo");
  const noTestFilter = document.querySelector("#filterThree");
  const allAuctions = document.querySelector("#filterFour");

  const loadMoreBtn = document.getElementById("loadAuctions");

  //Filter by popularity
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

  //Filter no test
  noTestFilter.addEventListener("click", (event) => {
    const filter = "test";

    const auctionWithoutTest = auctions.filter((auction) => {
      if (auction.title.toLowerCase().includes(filter)) {
        return false;
      } else {
        return true;
      }
    });
    display(auctionWithoutTest);
  });

  //Filter ended auctions
  endedFilter.addEventListener("click", async (event) => {
    const endedAuctions = await get(
      `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true`
    );
    const today = new Date().getTime();
    const endedAuctionsSorted = endedAuctions.filter((auction) => {
      if (new Date(auction.endsAt).getTime() < today) {
        return true;
      }
    });
    display(endedAuctionsSorted);
    loadMoreBtn.style.display = "none";
    console.log(endedAuctionsSorted);
  });

  allAuctions.addEventListener("click", () => {
    display(auctions);
  });
}
