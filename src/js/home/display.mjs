import * as storage from "../storage/localStorage.mjs";
const token = storage.get("token");

export function displayAuctions(auctions) {
  const auctionsContainer = document.getElementById("auctions");

  auctionsContainer.innerHTML = "";

  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    const image = auctions[i].media[0];
    const ends = auctions[0].endsAt;
    const id = auctions[i].id;

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

    // If no bids
    let highestBids;

    if (auctions[i]._count.bids === 0) {
      highestBids = "No bids";
    } else {
      highestBids = `$${auctions[i]._count.bids}`;
    }

    let auctionCard = document.createElement("div");
    auctionCard.id = "auctionCard";
    auctionCard.className = "bg-light rounded m-1 col-md-5 col-lg-2 mb-3";
    if (token !== null) {
      auctionCard.innerHTML += `
                                <div class="p-2">
                                  <a>
                                    <div class="wrapper overflow-hidden rounded">
                                      <img class="mb-2" />
                                    </div>
                                    <p class="card-title fs-5 fw-semibold"></p>
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
      auctionCard.classList.add("unauthBtn");
      auctionCard.setAttribute("data-bs-toggle", "modal");
      auctionCard.setAttribute("data-bs-target", "#unauthModal");
      auctionCard.innerHTML += `
                                <div class="p-2">
                                  <div class="wrapper overflow-hidden rounded">
                                    <img class="mb-2" />
                                  </div>
                                  <p class="card-title fs-5 fw-semibold"></p>
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
