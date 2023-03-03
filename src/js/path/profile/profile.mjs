import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../func/params.mjs";
import { renderProfileAuctions } from "../../render/renderProfileAuctions.mjs";
import { renderProfileBids } from "../../render/renderProfileBids.mjs";
import { renderProfile } from "../../render/renderProfile.mjs";
import { logoutListener } from "../../listeners/logout.mjs";
import { auctionAndBids } from "../../listeners/auctionsAndBids.mjs";
import { updateAvatarListener } from "../../listeners/changeAvatar.mjs";
import { getAll } from "../../api/apiCalls/auctions/get.mjs";
import { getProfile } from "../../api/apiCalls/profile/get.mjs";

export async function profile() {
  logoutListener();
  const profileName = getParams("name");

  const profile = await getProfile(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true`
  );

  renderProfile(profile);
  auctionAndBids();
  updateAvatarListener();

  const auctions = profile.listings;
  if (auctions.length === 0) {
    const auctionsContainer = document.getElementById("auctionsProfile");

    const noAuctions = document.createElement("div");
    noAuctions.className = "d-flex justify-content-center";
    noAuctions.innerHTML = `<p>No auctions yet</p>`;
    auctionsContainer.append(noAuctions);
  } else {
    renderProfileAuctions(auctions);
  }

  const profileBids = await getAll(
    `${baseUrl}/auction/profiles/${profileName}/bids?_listings=true`
  );
  if (profileBids.length === 0) {
    const bidsContainer = document.getElementById("bidsProfile");
    const noBids = document.createElement("div");
    noBids.className = "d-flex justify-content-center";
    noBids.innerHTML = `<p>No bids yet</p>`;
    bidsContainer.append(noBids);
  } else {
    renderProfileBids(profileBids);
  }
}
