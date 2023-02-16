import * as storage from "../storage/localStorage.mjs";
import { calcEndTime } from "../timer.mjs";
const token = storage.get("token");

export function displayAuctions(auctions) {
  console.log(auctions);

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
      "col-11 col-sm-7 col-md-5 mx-md-2 col-lg-4 mx-lg-3 col-xl-3 mx-xl-4 mb-4 mb-xl-5 py-3 bg-light rounded ";
    // Logged in
    if (token !== null) {
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
