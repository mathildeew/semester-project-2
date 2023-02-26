import * as storage from "../../../storage/localStorage.mjs";

export function unauth() {
  const token = storage.get("token");
  const newAuctionBtn = document.getElementById("newAuctionModalBtn");
  const navBtn = document.getElementById("navBtn");
  const loginBtn = document.getElementById("loginBtn");

  if (token === undefined || token === null || token === "") {
    newAuctionBtn.style.display = "none";
    navBtn.style.display = "none";
    loginBtn.style.display = "inline";
  }
}
