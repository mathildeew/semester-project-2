import * as storage from "../storage/localStorage.mjs";

export function unauth() {
  const token = storage.get("token");
  const newAuctionBtn = document.getElementById("newAuctionModalBtn");
  const loginBtn = document.getElementById("loginBtnHome");
  const filterContainer = document.getElementById("filter");

  if (token === undefined || token === null || token === "") {
    newAuctionBtn.style.display = "none";
    loginBtn.style.display = "inline";
    filterContainer.style.display = "none";
  }
}
