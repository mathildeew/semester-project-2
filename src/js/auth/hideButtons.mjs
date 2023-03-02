import * as storage from "../storage/localStorage.mjs";

export function hideButtons(auction) {
  const settingsBtn = document.getElementById("settingsBtn");
  const placeBidBtn = document.getElementById("placeBidModalBtn");
  const userName = storage.get("name");

  if (userName === auction.seller.name) {
    placeBidBtn.style.display = "none";
  }
  if (userName !== auction.seller.name) {
    settingsBtn.style.display = "none";
  }
}
