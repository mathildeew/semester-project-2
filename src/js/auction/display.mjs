import * as storage from "../storage/localStorage.mjs";

const auctionCard = document.getElementById("auctionCard");

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
  } else {
  }

  auctionCard.innerHTML = `
      <img id="auctionImg" src="${auction.media}" class="rounded border-dark  mb-2" />
      <a
      href="/profile/${auction.seller.name}" 
      class="bg-grey rounded-pill d-flex align-items-center">
        <img id="sellerAvatar" src="${auction.seller.avatar}" class="rounded-circle border border-grey" />
        <p class="mb-0 ps-2">${auction.seller.name}</p>
      </a>
      <p class="card-title fs-5 fw-semibold">${auction.title}</p>
      <div class="d-flex justify-content-between align-items-center">
          <div>
              <div class="d-flex">
                  <i class="bi bi-tag-fill me-1"></i>
               <p class="me-4">Tag tag</p>
              </div>
              <div class="d-flex">
                  <i class="bi bi-clock-fill me-1"></i>
                  <p class="">${timer}</p>
              </div>
          </div>
      </div>
      <p class="">${auction.description}</p>
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
    <div class=" bg-grey rounded-pill d-flex flex-column mb-2 p-2 col-sm-4">
        <div class="d-flex justify-content-between">
            <p class="mb-0">${sortedBids[i].bidderName}</p>
            <p class="fw-bold mb-0">$${sortedBids[i].amount}</p>
        </div>
        <p class="mb-0">${created}</p>
    </div>
    `;
  }
}
