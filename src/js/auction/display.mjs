import { calcEndTime } from "../handlers/globals/timer.mjs";
import { getAuction } from "../api/auction/get.mjs";
import { hideButtons } from "./auth/auth.mjs";
import { auctionCarousel } from "./carousel.mjs";

export async function displayAuction() {
  const auction = await getAuction();

  hideButtons(auction);

  // Calculate auction ends time
  const placeBidBtn = document.getElementById("placeBidModalBtn");
  const today = new Date();
  const ends = auction.endsAt;
  let timer = calcEndTime(today, ends);

  if (timer === `Ended`) {
    placeBidBtn.style.display = "none";
  }

  // Display auction
  const auctionContainer = document.getElementById("auction");
  const auctionTitle = document.getElementById("singleAuctionTitle");
  const auctionSeller = document.getElementById("singleAuctionSeller");
  const auctionTimer = document.getElementById("singleAuctionTimer");
  const highestBid = document.getElementById("highestBid");
  const auctionDesc = document.getElementById("singleAuctionDesc");

  // // Run image carousel & placeholder image
  const carouselContainer = document.getElementById("carouselExample");
  const singleImageContainer = document.getElementById("auctionImg");

  console.log(auction.media);
  if (auction.media.length === 1) {
    singleImageContainer.src = auction.media[0];
    carouselContainer.style.display = "none";
  } else if (auction.media.length > 1) {
    auctionCarousel(auction);
    singleImageContainer.style.display = "none";
  } else if ((auction.media = [] || auction.media.length === 0)) {
    singleImageContainer.src = "/assets/placeholder/placeholder_Gavel.png";
  }

  auctionTitle.innerText = auction.title;
  auctionSeller.innerText = `${auction.seller.name}`;
  auctionSeller.href = `/profile/?name=${auction.seller.name}`;

  auctionTimer.innerText = timer;

  // Sort and show bids
  const bidsContainer = document.getElementById("bidsHistory");
  const bids = auction.bids;

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
  auctionDesc.innerText = auction.description;

  // Display current auction as placeholder in update form
  const newTitle = document.getElementById("newTitle");
  const newDesc = document.getElementById("newAuctionDesc");
  const newMediaOne = document.getElementById("newMediaOne");
  const newMediaTwo = document.getElementById("newMediaTwo");
  const newMediaThree = document.getElementById("newMediaThree");

  newTitle.value = auction.title;
  newDesc.value = auction.description;

  if (auction.media.length > 0) {
    newMediaOne.value = auction.media[0];
  }
  if (auction.media.length > 1) {
    newMediaTwo.value = auction.media[1];
  }
  if (auction.media.length > 2) {
    newMediaThree.value = auction.media[2];
  }
}
