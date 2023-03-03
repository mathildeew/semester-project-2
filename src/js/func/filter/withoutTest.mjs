import { display } from "../../render/renderAuctions.mjs";

export function allAuctionsFilter(auctions) {
  const allAuctions = document.querySelector("#filterFour");
  const loadMoreBtn = document.getElementById("loadAuctions");

  allAuctions.addEventListener("click", () => {
    loadMoreBtn.style.display = "block";
    display(auctions);
  });
}
