import { getProfileAPI } from "../api/profile/get.mjs";
import * as storage from "../storage/localStorage.mjs";
import { calcEndTime } from "../handlers/globals/timer.mjs";
const userName = storage.get("name");
const avatar = storage.get("avatar");

export async function displayProfile() {
  const profile = await getProfileAPI();

  //Update avatar modal
  const modalPlaceholderText = document.querySelector("#changeAvatar input");
  modalPlaceholderText.placeholder = avatar;

  // User info
  document.title += ` ${profile.name}`;

  const userNameContainer = document.getElementById("username");
  userNameContainer.innerText = `${profile.name}`;

  const avatarContainer = document.getElementById("avatar");
  avatarContainer.src = profile.avatar;
  avatarContainer.alt = `${profile.name}'s avatar`;

  // Unauth
  const creditsContainer = document.getElementById("credits");
  const changeAvatarBtn = document.getElementById("myInput");

  if (userName !== profile.name) {
    creditsContainer.style.display = "none";
    changeAvatarBtn.style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
  } else if (userName === profile.name) {
    creditsContainer.innerText = `Credits: $${profile.credits}`;
  }

  const winsContainer = document.getElementById("wins");
  winsContainer.innerText = `Wins: ${profile.wins.length}`;

  // Auctions
  const auctions = profile.listings;
  if (auctions.length === 0) {
    auctionsContainer.innerHTML = `<p>No auctions yet</p>`;
  } else {
    for (let i = 0; i < auctions.length; i++) {
      const title = auctions[i].title;
      const id = auctions[i].id;

      let image;

      // Placeholder if auction image is missing
      if (auctions[i].media.length === 0) {
        image = "../../../assets/placeholder/placeholder_Gavel.png";
      } else {
        image = auctions[i].media[0];
      }

      // Calculate auction end time
      const today = new Date();
      const ends = auctions[i].endsAt;
      const timer = calcEndTime(today, ends);

      // Display auctions
      const auctionsContainer = document.getElementById("auctionsProfile");
      const auctionCard = document.createElement("div");
      auctionCard.className =
        " bg-light rounded col-12 col-sm-9 col-md-5 col-lg-5 mb-3";
      auctionCard.innerHTML += `
                                <a class="d-flex my-auto justify-content-start py-2">
                                  <img id="auctionsImg" class="rounded" />
                                  <div class="ms-3">
                                    <p class="auctionCardTitle fw-bold mb-0"></p>
                                    <p class="auctionCardSeller fw-light mb-3"></p>
                                    <div class="d-flex mb-3">
                                      <i class="bi bi-clock-fill me-1"></i>
                                      <p class="auctionCardEnds mb-0"></p>
                                    </div>
                                    <p class="auctionCardHighestBid fs-5 fw-bold mb-0"></p>
                                  </div>  
                                </a>
                              `;

      auctionCard.querySelector("a").href = `/auction/?id=${id}`;
      auctionCard.querySelector("#auctionsImg").src = image;
      auctionCard.querySelector(".auctionCardTitle").innerText = title;
      auctionCard.querySelector(".auctionCardEnds").innerText = timer;
      auctionsContainer.append(auctionCard);
    }
  }
}
