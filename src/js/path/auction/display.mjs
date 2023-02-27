import { calcEndTime } from "../../globals/timer.mjs";
import { auctionCarousel } from "./carousel.mjs";

export function displayAuction(auction) {
  document.title += ` ${auction.title}`;
  document.head.querySelector("meta[name=description]").content =
    auction.description;

  // Calculate auction end time
  const placeBidBtn = document.getElementById("placeBidModalBtn");
  const today = new Date();
  const ends = auction.endsAt;
  let timer = calcEndTime(today, ends);

  if (timer === `Ended`) {
    placeBidBtn.style.display = "none";
  }

  // Display auction
  const auctionTitle = document.getElementById("singleAuctionTitle");
  const auctionSeller = document.getElementById("singleAuctionSeller");
  const auctionTimer = document.getElementById("singleAuctionTimer");
  const highestBid = document.getElementById("highestBid");
  const auctionDesc = document.getElementById("singleAuctionDesc");

  auctionTitle.innerText = auction.title;
  auctionSeller.innerText = `${auction.seller.name}`;
  auctionSeller.href = `/profile/?name=${auction.seller.name}`;
  auctionDesc.innerText = auction.description;
  auctionTimer.innerText = timer;
  const media = auction.media;
  const bids = auction.bids;

  // Run image carousel & placeholder image
  const carouselContainer = document.getElementById("carouselExample");
  const singleImageContainer = document.getElementById("auctionImg");

  if (media.length === 1) {
    singleImageContainer.src = media[0];
    carouselContainer.style.display = "none";
  } else if (media.length > 1) {
    auctionCarousel(auction);
    singleImageContainer.style.display = "none";
  } else if ((media = [] || media.length === 0)) {
    singleImageContainer.src = "/assets/placeholder/placeholder_Gavel.png";
  }

  // Sort and show bids
  const bidsContainer = document.getElementById("bidsHistory");

  if (bids.length > 0) {
    highestBid.innerText = `Highest bid: $${
      auction.bids[auction.bids.length - 1].amount
    }`;

    for (let i = 0; i < bids.length; i++) {
      const sortedBids = bids.sort((a, b) => {
        return b.amount - a.amount;
      });

      const created = new Date(sortedBids[i].created).toLocaleString();

      const bidsHistory = document.createElement("div");
      bidsHistory.className =
        "bg-light d-flex align-items-center justify-content-between px-4 mb-3 rounded-pill";

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
  } else {
    highestBid.innerText = "No bids";
    bidsHistory.style.display = "none";
  }
}
