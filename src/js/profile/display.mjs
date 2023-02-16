import * as storage from "../storage/localStorage.mjs";
import { calcEndTime } from "../timer.mjs";
const userName = storage.get("name");

export function displayProfile(profile) {
  console.log(profile);

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
        "col-11 col-sm-7 col-md-5 mx-md-2 col-lg-4 mx-lg-3 col-xl-3 mx-xl-4 mb-4 mb-xl-5 py-3 bg-light rounded";
      auctionCard.innerHTML += `
                                <a class="d-flex align-items-center justify-content-start">
                                  <img id="auctionsImg" class="rounded mb-2" />
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

      auctionCard.querySelector("a").href = `/profile/auction/?id=${id}`;
      auctionCard.querySelector("#auctionsImg").src = image;
      auctionCard.querySelector(".auctionCardTitle").innerText = title;
      auctionCard.querySelector(".auctionCardEnds").innerText = timer;
      auctionsContainer.append(auctionCard);
    }
  }
}
