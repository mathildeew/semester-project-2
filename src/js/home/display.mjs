const auctionsContainer = document.getElementById("auctions");

export function displayAuctions(auctions) {
  auctionsContainer.innerHTML = "";
  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    const image = auctions[i].media[0];
    const ends = auctions[0].endsAt;

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
      highestBids = "No bids yet";
    } else {
      highestBids = `$${auctions[i]._count.bids}`;
    }

    auctionsContainer.innerHTML += `
                                    <div class="bg-light rounded m-1 col-md-5 col-lg-2 mb-3">
                                        <div class="p-2">
                                            <img src="${image}" class="auctionImg rounded border-dark  mb-2" />
                                            <p class="card-title fs-5 fw-semibold">${title}</p>
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
                                            <p class="fs-5 fw-bold text-end mb-0">${highestBids}</p>
                                        </div>
                                    </div>
                                    `;
  }
}
