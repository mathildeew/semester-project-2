import * as storage from "../../storage/localStorage.mjs";

export function unauthorizedBtn() {
  const newAuctionBtn = document.querySelector(".newAuctionBtn");
  const token = storage.get("token");
  if (token === undefined || token === null || token === "") {
    newAuctionBtn.style.display = "none";
  }
}
