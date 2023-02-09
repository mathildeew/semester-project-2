import * as storage from "../storage/localStorage.mjs";

export function openUnauthModal() {
  const auctionContainers = document.getElementById("auctions");
  const token = storage.get("token");

  if (token === undefined || token === null || token === []) {
    auctionContainers.setAttribute("id", "unauthBtn");
    auctionContainers.setAttribute("data-bs-toggle", "modal");
    auctionContainers.setAttribute("data-bs-target", "#unauthModal");

    const unauthModal = document.getElementById("unauthModal");
    const unauthBtn = document.getElementById("unauthBtn");

    unauthModal.addEventListener("shown.bs.modal", () => {
      unauthBtn.focus();
    });
  }
}
