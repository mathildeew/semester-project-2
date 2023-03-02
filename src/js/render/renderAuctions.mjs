import { calcEndTime } from "../func/timers/timer.mjs";
import * as storage from "../storage/localStorage.mjs";
const token = storage.get("token");

export function display(auctions) {
  const auctionsContainer = document.getElementById("auctions");

  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    let image = auctions[i].media[0];
    const id = auctions[i].id;
    const seller = auctions[i].seller.name;
    const bids = auctions[i].bids;

    // Placeholder image
    if (image === undefined || image === "") {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    }

    // Calculate auctions end time
    const ends = auctions[i].endsAt;
    let timer = calcEndTime(ends);

    // If no bids
    let highestBids;

    if (bids.length === 0) {
      highestBids = "No bids";
    } else {
      highestBids = `Highest bid: $${bids[bids.length - 1].amount}`;
    }

    // Display auctions
    let auctionCard = document.createElement("div");
    auctionCard.id = "auctionCard";
    auctionCard.className = "";
    // Logged in
    if (token !== null) {
      auctionCard.innerHTML += `
                                <a>
                                  <div class="card h-100 bg-light  border-secondary">
                                    <div class="overflow-hidden  d">
                                      <img id="auctionsImg" class="card-img-top" />
                                    </div>
                                    <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                      <h3 class="auctionCardTitle card-title"></h3>
                                      <p class="auctionCardSeller fw-light mb-2"></p>
                                      <div class="d-flex mb-3">
                                        <i class="bi bi-clock-fill me-1"></i>
                                        <p class="auctionCardEnds mb-0"></p>
                                      </div>
                                      </div>
                                        <p class="auctionCardHighestBid fw-bold"></p>
                                    </div>
                                  </div>
                                 </a>
                                
                                `;
      auctionCard.querySelector("a").href = `/auction/?id=${id}`;
      auctionCard.querySelector(".auctionCardSeller").innerText = seller;
      auctionCard.querySelector(".auctionCardHighestBid").innerText =
        highestBids;
    } else {
      // Not logged in
      auctionCard.classList.add("unauthBtn");
      auctionCard.setAttribute("data-bs-toggle", "modal");
      auctionCard.setAttribute("data-bs-target", "#unauthModal");
      auctionCard.innerHTML += `
                                <div class="card h-100 bg-light border border-2 border-secondary">
                                  <div class="overflow-hidden rounded">
                                    <img id="auctionsImg" class="card-img-top rouded" />
                                  </div>
                                  <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                      <h3 class="auctionCardTitle card-title"></h3>
                                      <div class="d-flex mb-3">
                                        <i class="bi bi-clock-fill me-1"></i>
                                        <p class="auctionCardEnds mb-0"></p>
                                      </div>
                                    </div>
                                    <p class="auctionCardHighestBid fw-bold"></p>
                                    </div>
                                  </div>
                              `;
    }
    auctionCard.querySelector("#auctionsImg").src = image;
    auctionCard.querySelector(".auctionCardTitle").innerText = title;
    auctionCard.querySelector(".auctionCardEnds ").innerText = timer;
    auctionCard.querySelector(".auctionCardHighestBid").innerText = highestBids;

    auctionsContainer.append(auctionCard);
  }
}
