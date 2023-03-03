import { display } from "../../render/renderAuctions.mjs";

export function endedFilter(endedAuctions) {
  const endedFilter = document.querySelector("#filterTwo");
  const loadMoreBtn = document.getElementById("loadAuctions");

  endedFilter.addEventListener("click", async (event) => {
    const today = new Date().getTime();
    const endedAuctionsSorted = endedAuctions.filter((auction) => {
      if (new Date(auction.endsAt).getTime() < today) {
        return true;
      }
    });
    display(endedAuctionsSorted);
    loadMoreBtn.style.display = "none";
  });
}
