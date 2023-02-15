import * as storage from "../storage/localStorage.mjs";
import { calcEndTime } from "../timer.mjs";
const token = storage.get("token");

export function displayAuctions(auctions) {
  // console.log(auctions);

  const auctionsContainer = document.getElementById("auctions");
  auctionsContainer.innerHTML = "";

  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    let image = auctions[i].media[0];
    const id = auctions[i].id;

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
      "bg-light rounded m-1 mb-3  col-sm-4 col-md-3 col-lg-2";
    // Logged in
    if (token !== null) {
      auctionCard.innerHTML += `
                                <div class="p-2">
                                  <a>
                                    <div class="wrapper overflow-hidden rounded">
                                      <img class="mb-2" />
                                    </div>
                                    <p class=""></p>
                                    <div class="d-flex">
                                      <i class="bi bi-tag-fill me-1"></i>
                                      <p class="mb-1">Tag tag</p>
                                    </div>
                                    <div class="d-flex">
                                      <i class="bi bi-clock-fill me-1"></i>
                                      <p class="mb-0"></p>
                                    </div>
                                    <p class="fs-5 fw-bold text-end mb-0"></p>
                                  </a>
                                </div>  
                            `;

      auctionCard.querySelector("a").href = `/profile/auction/?id=${id}`;
    } else {
      // Not logged in
      auctionCard.classList.add("unauthBtn");
      auctionCard.setAttribute("data-bs-toggle", "modal");
      auctionCard.setAttribute("data-bs-target", "#unauthModal");
      auctionCard.innerHTML += `
                                <div class="p-2">
                                  <div class="wrapper overflow-hidden rounded">
                                    <img class="mb-2" />
                                  </div>
                                  <p class="mb-0 fw-semibold"></p>
                                  <div class="d-flex">
                                    <i class="bi bi-tag-fill me-1"></i>
                                    <p class="mb-1">Tag tag</p>
                                  </div>
                                  <div class="d-flex">
                                    <i class="bi bi-clock-fill me-1"></i>
                                    <p class="mb-0"></p>
                                  </div>
                                  <p class="fs-5 fw-bold text-end mb-0"></p>
                                </div>  
                              `;
    }

    auctionCard.querySelector("img").src = image;
    auctionCard.querySelector("p:nth-child(2)").innerText = title;
    auctionCard.querySelector("div:nth-child(4) p").innerText = timer;
    auctionCard.querySelector("p:nth-child(5)").innerText = highestBids;

    auctionsContainer.append(auctionCard);
  }
}
