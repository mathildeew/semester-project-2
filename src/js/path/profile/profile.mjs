import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../func/params.mjs";
import { renderProfileAuctions } from "../../render/renderProfileAuctions.mjs";
import { renderProfileBids } from "../../render/renderProfileBids.mjs";
import { renderProfile } from "../../render/renderProfile.mjs";
import * as storage from "../../storage/localStorage.mjs";
import { logoutListener } from "../../listeners/logout.mjs";
import { auctionAndBids } from "../../listeners/auctionsAndBids.mjs";
import { updateAvatarListener } from "../../listeners/changeAvatar.mjs";

export async function profile() {
  logoutListener();
  const profileName = getParams("name");

  const profile = await get(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true&_count.listings=true&_bids=true`
  );

  renderProfile(profile);
  auctionAndBids();
  updateAvatarListener();

  const auctions = profile.listings;
  if (auctions.length === 0) {
    auctionsContainer.innerHTML = `<p>No auctions yet</p>`;
  } else {
    renderProfileAuctions(auctions);
  }
}
