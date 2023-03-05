import * as storage from "../storage/localStorage.mjs";
import { profileTemplate } from "../templates/profileTemplate.mjs";
import { renderProfileAuctions } from "./renderProfileAuctions.mjs";
import { renderProfileBids } from "./renderProfileBids.mjs";
const userName = storage.get("name");

export function renderProfile(profile, bids) {
  const profileDetails = {
    name: profile.name,
    avatar: profile.avatar,
    credits: profile.credits,
    auctions: profile.listings,
    wins: profile.wins,
  };

  document.title += ` ${profileDetails.name}`;

  const profileContainer = document.getElementById("profile");
  profileContainer.innerHTML = profileTemplate();

  const userNameContainer = document.getElementById("username");
  userNameContainer.innerText = `${profileDetails.name}`;

  const avatarContainer = document.getElementById("avatar");
  avatarContainer.src = profile.avatar;
  avatarContainer.alt = `${profileDetails.name}'s avatar`;

  const creditsContainer = document.getElementById("credits");
  const settings = document.getElementById("settingsProfile");

  if (userName !== profile.name) {
    creditsContainer.style.display = "none";
    settings.style.display = "none";
  } else if (userName === profile.name) {
    creditsContainer.innerText += ` $${profileDetails.credits}`;
  }

  const winsContainer = document.getElementById("wins");
  winsContainer.innerText += ` ${profileDetails.wins.length}`;
  const listingsContainer = document.getElementById("listingsProfile");
  listingsContainer.innerText += ` ${profileDetails.auctions.length}`;

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

  if (bids.length === 0) {
    const bidsContainer = document.getElementById("bidsProfile");
    const noBids = document.createElement("div");
    noBids.className = "d-flex justify-content-center";
    noBids.innerHTML = `<p>No bids yet</p>`;
    bidsContainer.append(noBids);
  } else {
    renderProfileBids(bids);
  }
}
