import * as storage from "../storage/localStorage.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const profileName = params.get("name");

export function displayProfile(profile) {
  const avatarBtn = document.querySelector(".newAuctionBtn");
  const userName = storage.get("name");
  if (userName !== profileName) {
    avatarBtn.style.display = "none";
  }

  const avatarContainer = document.getElementById("avatar");
  avatarContainer.style.backgroundImage = `url(${profile.avatar})`;

  const creditsContainer = document.getElementById("credits");
  creditsContainer.innerHTML = `Credits: $${profile.credits}`;

  const winsContainer = document.getElementById("wins");
  winsContainer.innerHTML = `Wins: ${profile.wins.length}`;

  const auctionsContainer = document.getElementById("auctions");
  const auctions = profile.listings;

  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    const image = auctions[i].media[0];
    const ends = auctions[0].endsAt;

    // Timer
    const today = new Date();
    let timer;

    let difference = new Date(ends).getTime() - new Date(today).getTime();

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    timer = `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (difference <= 0) {
      timer = `Ended`;
    } else {
    }

    auctionsContainer.innerHTML += `
                                      <div class="bg-light rounded mb-3">
                                          <div class="p-2">
                                              <img src="${image}" class="auctionImg rounded border-dark mb-2" />
                                              <p class="card-title fs-5 fw-semibold">${title}</p>
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div>
                                                      <div class="d-flex">
                                                          <i class="bi bi-tag-fill me-1"></i>
                                                          <p class="mb-0 me-4">Tag tag</p>
                                                      </div>
                                                      <div class="d-flex">
                                                          <i class="bi bi-clock-fill me-1"></i>
                                                          <p class="mb-0">${timer}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      `;
  }
}
