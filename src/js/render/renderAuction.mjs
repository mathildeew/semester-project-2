import { auctionCarousel } from "./carousel.mjs";
import { initializeCountdown } from "../func/timers/countdown.mjs";
import { auctionTemplate } from "../templates/auctionTemplate.mjs";

export function renderAuction(auction) {
  document.title += ` ${auction.title}`;
  document.head.querySelector("meta[name=description]").content =
    auction.description;

  const auctionDetails = {
    title: auction.title,
    seller: auction.seller,
    desc: auction.description,
    created: auction.created,
    updated: auction.updated,
  };

  const auctionContainer = document.getElementById("auction");
  auctionContainer.innerHTML = auctionTemplate();

  // Display auction
  const auctionTitle = document.getElementById("singleAuctionTitle");
  const auctionSeller = document.getElementById("auctionSellerLink");
  const auctionTimer = document.getElementById("singleAuctionTimer");
  const highestBid = document.getElementById("highestBid");
  const highestBidCar = document.getElementById("highestBidCar");

  const auctionDesc = document.getElementById("singleAuctionDesc");
  const auctionCreated = document.getElementById("singleAuctionCreated");
  const auctionUpdated = document.getElementById("singleAuctionUpdated");

  auctionTitle.innerText = auction.title;
  auctionSeller.href = `/profile/?name=${auction.seller.name}`;
  auctionSeller.innerText = auction.seller.name;

  auctionDesc.innerText = auction.description;
  auctionCreated.innerText += ` ${new Date(auction.created).toLocaleString()}`;
  auctionUpdated.innerText += ` ${new Date(auction.updated).toLocaleString()}`;

  let media = auction.media;
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
    carouselContainer.style.display = "none";
  }

  // Countdown auction end time
  const placeBidBtn = document.getElementById("placeBidModalBtn");
  let ends = auction.endsAt;
  let timer;

  if (Date.parse(ends) - Date.parse(new Date()) <= 0) {
    placeBidBtn.style.display = "none";
    auctionTimer.innerText = "Ended";
  } else {
    timer = initializeCountdown(auctionTimer, ends);
  }

  // Sort and show bids
  const bidsContainer = document.getElementById("bidsHistory");

  if (bids.length > 0) {
    for (let i = 0; i < bids.length; i++) {
      const sortedBids = bids.sort((a, b) => {
        return b.amount - a.amount;
      });

      highestBid.innerText = `Highest bid: $${sortedBids[0].amount}`;
      highestBidCar.innerText = `Highest bid: $${sortedBids[0].amount}`;

      const created = new Date(sortedBids[i].created).toLocaleString();

      const bidsHistory = document.createElement("div");
      bidsHistory.className =
        "bg-light d-flex align-items-center justify-content-between px-4 mb-3 rounded-pill";

      bidsHistory.innerHTML += `
                                    <div>
                                      <a id="bidder" class="fw-bold mb-0"></a>
                                      <p id="bidCreated" class="mb-0"></p>
                                    </div>
                                    <div>
                                    <p id="biddersBid" class="fw-bold mb-0"></p>
                                    </div>
                                    `;

      bidsHistory.querySelector("#bidder").innerText = sortedBids[i].bidderName;
      bidsHistory.querySelector(
        "#bidder"
      ).href = `/profile/?name=${sortedBids[i].bidderName}`;

      bidsHistory.querySelector("#bidCreated").innerText = created;
      bidsHistory.querySelector(
        "#biddersBid"
      ).innerText = `$${sortedBids[i].amount}`;

      bidsContainer.append(bidsHistory);
    }
  } else {
    highestBid.innerText = "No bids";
    bidsHistory.style.display = "none";
  }
}
