import * as storage from "../../storage/localStorage.mjs";
const token = storage.get("token");
const userName = storage.get("name");

export function auth() {
  const loginBtn = document.getElementById("loginNav");
  const createAuctionBtn = document.querySelector(".createAuctionBtn");
  const navAvatar = document.getElementById("navBtn");

  loginBtn.style.display = "none";
  if (token === undefined || token === null || token === "") {
    loginBtn.style.display = "inline";
    createAuctionBtn.style.display = "none";
    navAvatar.style.display = "none";
  }
}
