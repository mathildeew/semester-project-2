import * as storage from "../storage/localStorage.mjs";
import { calcEndTime } from "../timer.mjs";
const userName = storage.get("name");

export function displayProfile(profile) {
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
      const image = auctions[i].media;

      // Calculate auction end time
      const today = new Date();
      const ends = auctions[i].endsAt;
      const timer = calcEndTime(today, ends);

      // Display auctions
      const auctionsContainer = document.getElementById("auctionsProfile");
      const auctionCard = document.createElement("div");
      auctionCard.className = "bg-light rounded mb-3 p-2";
      auctionCard.innerHTML += `
                                <img id="auctionImg" class="rounded border-dark mb-2" />
                                <p class="card-title fs-5 fw-semibold">title</p>
                                  <div class="d-flex">
                                    <i class="bi bi-clock-fill me-1"></i>
                                    <p class="mb-0"></p>
                                  </div>
                              `;

      auctionCard.querySelector("img").src = image;
      auctionCard.querySelector("p").innerText = title;
      auctionCard.querySelector("div:nth-child(3) p").innerText = timer;
      auctionsContainer.append(auctionCard);
    }
  }
}
