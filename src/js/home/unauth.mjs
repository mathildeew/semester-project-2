import * as storage from "../storage/localStorage.mjs";

export function openUnauthModal() {
  const auctionContainers = document.getElementById("auctions");
  const token = storage.get("token");

  if (token === undefined || token === null || token === []) {
    auctionContainers.setAttribute("id", "unauthBtn");
  }
}
