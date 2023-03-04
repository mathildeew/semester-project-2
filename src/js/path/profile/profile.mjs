import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../func/params.mjs";
import { renderProfileAuctions } from "../../render/renderProfileAuctions.mjs";
import { renderProfileBids } from "../../render/renderProfileBids.mjs";
import { renderProfile } from "../../render/renderProfile.mjs";
import { logoutListener } from "../../listeners/logout.mjs";
import { auctionAndBids } from "../../listeners/auctionsAndBids.mjs";
import { updateAvatarListener } from "../../listeners/changeAvatar.mjs";
import { getProfile } from "../../api/apiCalls/profile/get.mjs";

export async function profile() {
  const profileName = getParams("name");

  const profile = await getProfile(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true`
  );
  const bids = await getProfile(
    `${baseUrl}/auction/profiles/${profileName}/bids?_listings=true`
  );

  renderProfile(profile, bids);
  auctionAndBids();
  updateAvatarListener();
  logoutListener();
}
