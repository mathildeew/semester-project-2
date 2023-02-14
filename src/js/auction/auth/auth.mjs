import * as storage from "../../storage/localStorage.mjs";

export function hideButtons(auction) {
  const updateBtn = document.getElementById("update");
  const deleteBtn = document.getElementById("delete");
  const placeBidBtn = document.getElementById("placeBid");
  const userName = storage.get("name");

  if (userName === auction.seller.name) {
    placeBidBtn.style.display = "none";
  } else if (userName !== auction.seller.name) {
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
  }
}
