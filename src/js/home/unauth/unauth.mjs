import * as storage from "../../storage/localStorage.mjs";

export function unauth() {
  const token = storage.get("token");
  const newAuctionBtn = document.getElementById("newAuctionModalBtn");

  if (token === undefined || token === null || token === "") {
    newAuctionBtn.style.display = "none";
  }
}
