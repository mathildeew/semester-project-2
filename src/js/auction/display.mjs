const auctionCard = document.getElementById("auctionCard");

export function displayAuction(auction) {
  auctionCard.innerHTML = `
    <img id="auctionImg" src="${auction.media}" class="rounded"/>
        <div>
          <h2 class="card-title">${auction.title}</h2>
          <div class="d-flex flex-row align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-tag-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
            <p class="ms-2 mb-0">Tag, tag, tag</p>
          </div>
          <div class="d-flex flex-row align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
              />
            </svg>
            <p class="ms-2 mb-0">Time left</p>
          </div>
        </div>
        <div class="bg-primary rounded fs-5 fw-bold">
          <p class="p-3">Highest bid: $999</p>
        </div>
        <p>
         ${auction.description}
        </p>
    `;
}
