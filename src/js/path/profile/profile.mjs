import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../globals/params.mjs";
import { displayAuctions } from "./displayAuctions.mjs";
import { displayProfile } from "./displayProfile.mjs";

export async function profile() {
  const profileName = getParams("name");

  const profile = await get(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true&_count.listings=true`
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
}
