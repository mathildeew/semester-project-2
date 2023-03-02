import { display } from "../../render/renderAuctions.mjs";

export function notestFilter(auctions) {
  const noTestFilter = document.querySelector("#filterThree");
  const loadMoreBtn = document.getElementById("loadAuctions");

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
    loadMoreBtn.style.display = "none";
  });
}
