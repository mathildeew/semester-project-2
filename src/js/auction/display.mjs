import * as storage from "../storage/localStorage.mjs";

const auctionCard = document.getElementById("auctionCard");
const placeBidBtn = document.getElementById("placeBid");

export function displayAuction(auction) {
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

  auctionCard.innerHTML = `
                            <img id="auctionImg" src="${auction.media}" class="rounded mb-2" />
                            <a href="/profile/?name=${auction.seller.name}" 
                            id="sellerButton"
                            class="bg-grey rounded-pill d-flex align-items-center mt-1 ms-1">
                                <img src="${auction.seller.avatar}" class="rounded-circle border border-grey" />
                                <p class="mb-0 px-2">${auction.seller.name}</p>
                            </a>
                            <div class="px-2">
                                <p class="card-title fs-5 fw-semibold">${auction.title}</p>
                                <div class="d-flex flex-column">
                                    <div class="d-flex mb-1">
                                        <i class="bi bi-tag-fill me-1"></i>
                                        <p class="me-4 mb-0">Tag tag</p>
                                    </div>
                                    <div class="d-flex">
                                        <i class="bi bi-clock-fill me-1"></i>
                                        <p class="">${timer}</p>
                                    </div>
                                </div>
                                <p class="">${auction.description}</p>
                            </div>
                            `;

  hideButtons(auction);
  showBids(auction);
}

function hideButtons(auction) {
  const updateBtn = document.getElementById("update");
  const deleteBtn = document.getElementById("delete");
  const userName = storage.get("name");

  if (userName !== auction.seller.name) {
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
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
    bidsContainer.innerHTML += `
                                <div class="bg-grey d-flex align-items-center justify-content-between px-4 mb-2 rounded-pill">
                                    <div class="">
                                        <p class="fw-bold mb-0">${sortedBids[i].bidderName}</p>
                                        <p class="mb-0">${created}</p>
                                    </div>    
                                    <p class="fw-bold mb-0">$${sortedBids[i].amount}</p>
                                </div>
    `;
  }
}
