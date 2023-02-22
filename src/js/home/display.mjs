import { calcEndTime } from "../globals/timer.mjs";
import * as storage from "../storage/localStorage.mjs";
import { filter } from "./filter.mjs";
import { getAuctions } from "../api/home/get.mjs";
import { search } from "./search.mjs";
const token = storage.get("token");

export async function displayAuctions() {
  const auctions = await getAuctions();

  // filter(auctions);
  // search(auctions);

  const auctionsContainer = document.getElementById("auctions");
  auctionsContainer.innerHTML = "";

  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    let image = auctions[i].media[0];
    const id = auctions[i].id;
    const seller = auctions[i].seller.name;

    // Placeholder image
    if (image === undefined || image === "") {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    }

    // Calculate auctions end time
    const today = new Date();
    const ends = auctions[i].endsAt;
    let timer = calcEndTime(today, ends);

    // If no bids
    let highestBids;

    if (auctions[i]._count.bids === 0) {
      highestBids = "No bids";
    } else {
      highestBids = `$${auctions[i]._count.bids}`;
    }

    // Display auctions
    let auctionCard = document.createElement("div");
    auctionCard.id = "auctionCard";
    auctionCard.className =
      "col-12 col-md-5 col-lg-2 mx-lg-1 mb-4 bg-light rounded";
    // Logged in
    if (token !== null) {
      auctionCard.innerHTML += `
                                <a class="p-1 d-flex flex-lg-column justify-content-start align-items-center align-items-lg-start">
                                  <div class="overflow-hidden rounded">
                                    <img id="auctionsImg" class="rounded" />
                                  </div>
                                    <div class="ms-2 ms-sm-4 ms-lg-0">
                                      <p class="auctionCardTitle fw-bold mb-0"></p>
                                      <p class="auctionCardSeller fw-light mb-2"></p>
                                      <div class="d-flex mb-3">
                                        <i class="bi bi-clock-fill me-1"></i>
                                        <p class="auctionCardEnds mb-0"></p>
                                      </div>
                                      <p class="auctionCardHighestBid fs-5 fw-bold"></p>
                                    </div>
                                  </a>
                                `;
      auctionCard.querySelector("a").href = `/auction/?id=${id}`;
      auctionCard.querySelector(".auctionCardSeller").innerText = seller;
    } else {
      // Not logged in

      auctionCard.classList.add("unauthBtn");
      auctionCard.setAttribute("data-bs-toggle", "modal");
      auctionCard.setAttribute("data-bs-target", "#unauthModal");
      auctionCard.innerHTML += `
                                <div class="d-flex align-items-center justify-content-start">
                                  <img id="auctionsImg" class="rounded mb-2" />
                                  <div class="ms-3">
                                    <p class="auctionCardTitle fw-bold mb-0"></p>
                                    <div class="d-flex mb-3">
                                      <i class="bi bi-clock-fill me-1"></i>
                                      <p class="auctionCardEnds mb-0"></p>
                                    </div>
                                    <p class="auctionCardHighestBid fs-5 fw-bold mb-0"></p>
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
