import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../globals/params.mjs";
import { displayAuctions } from "./displayAuctions.mjs";
import { displayBids } from "./displayBids.mjs";
import { displayProfile } from "./displayProfile.mjs";

export async function profile() {
  const profileName = getParams("name");

  const profile = await get(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true&_count.listings=true&_bids=true`
  );

  //   Render profile info
  displayProfile(profile);

  //   Render auctions
  const auctions = profile.listings;
  if (auctions.length === 0) {
    auctionsContainer.innerHTML = `<p>No auctions yet</p>`;
  } else {
    displayAuctions(auctions);
  }

  const auctionsBtn = document.getElementById("showAuctionsBtn");
  const auctionsContainer = document.getElementById("auctionsProfile");
  const bidsContainer = document.getElementById("bidsProfile");

  const bidsBtn = document.getElementById("showBidsBtn");

  bidsContainer.style.display = "none";
  auctionsBtn.style.textDecoration = "underline";

  bidsBtn.addEventListener("click", () => {
    bidsBtn.style.textDecoration = "underline";
    auctionsBtn.style.textDecoration = "none";
    auctionsContainer.style.display = "none";
    bidsContainer.style.display = "grid";
    displayBids();
  });

  auctionsBtn.addEventListener("click", () => {
    auctionsBtn.style.textDecoration = "underline";
    bidsBtn.style.textDecoration = "none";
    bidsContainer.style.display = "none";
    auctionsContainer.style.display = "grid";
  });
}
