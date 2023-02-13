import * as storage from "../storage/localStorage.mjs";

export function displayAuction(auction) {
  const placeBidBtn = document.getElementById("placeBid");
  console.log(auction);

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

  let timer = `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  if (difference <= 0) {
    timer = `Ended`;
    placeBidBtn.style.display = "none";
  } else {
  }

  const auctionCard = document.getElementById("auctionCard");
  const auctionImg = document.getElementById("auctionImg");
  auctionImg.src = auction.media[0];
  const sellerBtn = document.getElementById("sellerButton");
  sellerBtn.href = `/profile/?name=${auction.seller.name}`;
  sellerBtn.querySelector("img").src = `${auction.seller.avatar}`;
  sellerBtn.querySelector("p").innerText = `${auction.seller.name}`;
  const auctionInfo = document.getElementById("auctionInfo");
  auctionInfo.querySelector("p").innerText = auction.title;
  const timeLeftContainer = document.getElementById("timeLeft");
  timeLeftContainer.querySelector("p").innerText = timer;

  hideButtons(auction);
  showBids(auction);
}

function hideButtons(auction) {
  const updateBtn = document.getElementById("update");
  const deleteBtn = document.getElementById("delete");
  const placeBidBtn = document.getElementById("placeBid");
  const userName = storage.get("name");

  if (userName === auction.seller.name) {
    placeBidBtn.style.display = "none";
  }
}

function showBids(auction) {
  const bids = auction.bids;

  for (let i = 0; i < bids.length; i++) {
    const sortedBids = bids.sort((a, b) => {
      return b.amount - a.amount;
    });

    const created = new Date(sortedBids[i].created).toLocaleString();

    const bidsContainer = document.getElementById("bidsHistory");

    console.log(sortedBids);
    const bidderName = document.getElementById("bidderName");
    bidderName.innerText = `${sortedBids[i].bidderName}`;
    const bidCreated = document.getElementById("bidCreated");
    bidCreated.innerText = created;
    const bidAmount = document.getElementById("bidAmount");
    bidAmount.innerText = `$${sortedBids[i].amount}`;
  }
}
