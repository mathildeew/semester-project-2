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
      "container-fluid h-100 bg-light rounded col-5 col-sm-5 col-md-3 mx-md-1 my-3";
    // Logged in
    if (token !== null) {
      auctionCard.innerHTML += `
                                <div>
                                  <a>
                                    <div class="wrapper overflow-hidden rounded">
                                      <img id="auctionsImg" class="mb-2" />
                                    </div>
                                    <p class="fw-bold"></p>
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
                                <div>
                                  <div class="wrapper overflow-hidden rounded">
                                    <img id="auctionsImg" class="mb-2" />
                                  </div>
                                  <p class="mb-0 fw-bold"></p>
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
    auctionCard.querySelector("div:nth-child(3) p").innerText = timer;
    auctionCard.querySelector("p:nth-child(4)").innerText = highestBids;

    auctionsContainer.append(auctionCard);
  }
}
