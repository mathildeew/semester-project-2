import * as storage from "../storage/localStorage.mjs";

export function auctionsTemplate(
  link,
  image,
  title,
  timer,
  seller,
  highestBids
) {
  const token = storage.get("token");

  const auctionCard = document.createElement("div");
  auctionCard.id = "auctionCard";
  if (token !== null) {
    auctionCard.innerHTML = `
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
    auctionCard.querySelector("a").href = link;
    auctionCard.querySelector(".auctionCardSeller").innerText = seller;
    auctionCard.querySelector(".auctionCardHighestBid").innerText = highestBids;
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
                                      </div>
                                    </div>
                                `;
  }
  auctionCard.querySelector("#auctionsImg").src = image;
  auctionCard.querySelector("#auctionsImg").alt = title;
  auctionCard.querySelector(".auctionCardTitle").innerText = title;
  auctionCard.querySelector(".auctionCardEnds ").innerText = timer;

  return auctionCard;
}
