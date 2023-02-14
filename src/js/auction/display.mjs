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
  // const auctionImg = document.getElementById("auctionImg");
  // auctionImg.src = auction.media[0];
  // const sellerBtn = document.getElementById("sellerButton");
  // sellerBtn.href = `/profile/?name=${auction.seller.name}`;
  // sellerBtn.querySelector("img").src = `${auction.seller.avatar}`;
  // sellerBtn.querySelector("p").innerText = `${auction.seller.name}`;
  // const auctionInfo = document.getElementById("auctionInfo");
  // auctionInfo.querySelector("p").innerText = auction.title;
  // const timeLeftContainer = document.getElementById("timeLeft");
  // timeLeftContainer.querySelector("p").innerText = timer;
  // auctionInfo.querySelector("p:nth-child(3)").innerText = auction.description;

  function showBids(auction) {
    const bids = auction.bids;

    for (let i = 0; i < bids.length; i++) {
      const sortedBids = bids.sort((a, b) => {
        return b.amount - a.amount;
      });

      const created = new Date(sortedBids[i].created).toLocaleString();

      const bidsContainer = document.getElementById("bidsHistory");
      if (bids.length <= 0) {
        // bidsContainer.style.display = "none";
      }

      const bidsHistory = document.createElement("div");
      bidsHistory.className =
        "bg-grey d-flex align-items-center justify-content-between px-4 mb-2 rounded-pill";
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
  showBids(auction);
}
