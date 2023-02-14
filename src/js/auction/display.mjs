import { hideButtons } from "./auth/auth.mjs";

export function displayAuction(auction) {
  console.log(auction);
  hideButtons(auction);
  const placeBidBtn = document.getElementById("placeBid");

  // Timer
  const today = new Date();
  const ends = auction.endsAt;

  let difference = new Date(ends).getTime() - new Date(today).getTime();

  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  let timer = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;

  if (difference <= 0) {
    timer = `Ended`;
    placeBidBtn.style.display = "none";
  } else {
  }

  const auctionCard = document.getElementById("auctionCard");
  const cardBody = document.createElement("div");
  cardBody.className = "d-flex flex-column";
  cardBody.innerHTML = `
                        <div class="d-flex flex-column">
                          <img />
                          <a id="sellerButton" class="bg-grey d-flex align-items-center rounded-pill mt-1 ms-1">
                            <img class="rounded-circle border border-dark"/>
                            <p class="mb-0 ms-2 me-3"></p>
                          </a>
                        <img class="rounded mb-2" />
                        <p class="fs-4 mb-0"></p>
                        <div class="d-flex">
                          <i class="bi bi-clock-fill me-1"></i>
                          <p><p>
                        </div>
                        <p class=""></p>
  `;
  cardBody.querySelector("a img").src = auction.seller.avatar;
  cardBody.querySelector("a p").innerText = auction.seller.name;

  cardBody.querySelector("img").src = auction.media;
  cardBody.querySelector("p:nth-child(4)").innerText = auction.title;
  cardBody.querySelector("div:nth-child(5) p").innerText = timer;
  cardBody.querySelector("p:nth-child(6)").innerText = auction.description;

  auctionCard.append(cardBody);

  function showBids(auction) {
    const bids = auction.bids;
    const bidsContainer = document.getElementById("bidsHistory");
    if (bids.length <= 0) {
      bidsHistory.innerHTML += `
      <p class="bg-grey px-3 mb-3 rounded-pill">No bids</p>
      `;
    } else {
      for (let i = 0; i < bids.length; i++) {
        const sortedBids = bids.sort((a, b) => {
          return b.amount - a.amount;
        });

        const created = new Date(sortedBids[i].created).toLocaleString();

        const bidsHistory = document.createElement("div");
        bidsHistory.className =
          "bg-grey d-flex align-items-center justify-content-between px-4 mb-3 rounded-pill";

        bidsHistory.innerHTML += `
                                  <div>
                                    <p class="fw-bold mb-0"></p>
                                    <p class="mb-0"></p>
                                  </div>
                                  <div>
                                  <p class="fw-bold mb-0"></p>
                                  </div>
                                  `;

        bidsHistory.querySelector("div p:nth-child(1)").innerText =
          sortedBids[i].bidderName;
        bidsHistory.querySelector("div p:nth-child(2)").innerText = created;
        bidsHistory.querySelector(
          "div:nth-child(2) p"
        ).innerText = `$${sortedBids[i].amount}`;

        bidsContainer.append(bidsHistory);
      }
    }
  }
  showBids(auction);
}
