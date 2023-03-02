import { getParams } from "../func/params.mjs";
import { renderProfileBids } from "../render/renderProfileBids.mjs";
import * as storage from "../storage/localStorage.mjs";

export function auctionAndBids() {
  renderProfileBids();

  const auctionsBtn = document.getElementById("showAuctionsBtn");
  const auctionsContainer = document.getElementById("auctionsProfile");
  const bidsBtn = document.getElementById("showBidsBtn");
  const bidsContainer = document.getElementById("bidsProfile");

  bidsContainer.style.display = "none";
  auctionsBtn.style.textDecoration = "underline";

  auctionsBtn.addEventListener("click", () => {
    auctionsBtn.style.textDecoration = "underline";
    bidsBtn.style.textDecoration = "none";
    bidsContainer.style.display = "none";
    auctionsContainer.style.display = "grid";
  });

  bidsBtn.addEventListener("click", () => {
    bidsBtn.style.textDecoration = "underline";
    auctionsBtn.style.textDecoration = "none";
    auctionsContainer.style.display = "none";
    bidsContainer.style.display = "grid";
  });

  const userName = storage.get("name");
  const profileName = getParams("name");
  if (profileName !== userName) {
    bidsBtn.style.display = "none";
  }
}
