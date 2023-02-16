import { calcEndTime } from "../timer.mjs";

export function displayAuction(auction) {
  console.log(auction);
  const placeBidBtn = document.getElementById("placeBid");

  // Calculate auction ends time
  const today = new Date();
  const ends = auction.endsAt;
  let timer = calcEndTime(today, ends);

  if (timer === `Ended`) {
    placeBidBtn.style.display = "none";
  }

  // Display auction
  const auctionCard = document.getElementById("auctionCards");
  const auctionContainer = document.getElementById("auction");
  auctionContainer.querySelector("img").src = auction.media;
  auctionContainer.querySelector("h2").innerText = auction.title;
  auctionContainer.querySelector("div p").innerText = timer;
  if (auction.bids.length > 0) {
    auctionContainer.querySelector("#highestBid").innerText = `Highest bid: $${
      auction.bids[auction.bids.length - 1].amount
    }`;
  }
  auctionContainer.querySelector("#auctionDesc").innerText =
    auction.description;
  auctionContainer.querySelector("#sellerCard img").src = auction.seller.avatar;
  auctionContainer.querySelector("#sellerCard h3").innerText =
    auction.seller.name;

  // Sort and show bids
  const bids = auction.bids;
  const bidsContainer = document.getElementById("bidsHistory");
  const bidsSection = document.getElementById("bids");
  if (bids.length <= 0) {
    bidsSection.style.display = "none";
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
