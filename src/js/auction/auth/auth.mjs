import * as storage from "../../storage/localStorage.mjs";

export function hideButtons(auction) {
  const updateBtn = document.getElementById("updateBtn");
  const deleteBtn = document.getElementById("deleteModalBtn");
  const placeBidBtn = document.getElementById("placeBidModalBtn");
  const userName = storage.get("name");

  if (userName === auction.seller.name) {
    placeBidBtn.style.display = "none";
  }
  if (userName !== auction.seller.name) {
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
  }
}
