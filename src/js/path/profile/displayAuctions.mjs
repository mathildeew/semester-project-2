import { calcEndTime } from "../../globals/timer.mjs";

export function displayAuctions(auctions) {
  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    const id = auctions[i].id;

    let image;

    // Placeholder if auction image is missing
    if (auctions[i].media.length === 0) {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    } else {
      image = auctions[i].media[0];
    }

    // Calculate auction end time
    const today = new Date();
    const ends = auctions[i].endsAt;
    const timer = calcEndTime(today, ends);

    // Display auctions
    const auctionsContainer = document.getElementById("auctionsProfile");
    const auctionCard = document.createElement("div");
    auctionCard.className =
      " bg-light rounded col-12 col-sm-9 col-md-5 col-lg-5 mb-3";
    auctionCard.innerHTML += `
                                      <a class="d-flex my-auto justify-content-start py-2">
                                        <img id="auctionsImg" class="rounded" />
                                        <div class="ms-3">
                                          <p class="auctionCardTitle fw-bold mb-0"></p>
                                          <p class="auctionCardSeller fw-light mb-3"></p>
                                          <div class="d-flex mb-3">
                                            <i class="bi bi-clock-fill me-1"></i>
                                            <p class="auctionCardEnds mb-0"></p>
                                          </div>
                                          <p class="auctionCardHighestBid fs-5 fw-bold mb-0"></p>
                                        </div>  
                                      </a>
                                    `;

    auctionCard.querySelector("a").href = `/auction/?id=${id}`;
    auctionCard.querySelector("#auctionsImg").src = image;
    auctionCard.querySelector(".auctionCardTitle").innerText = title;
    auctionCard.querySelector(".auctionCardEnds").innerText = timer;
    auctionsContainer.append(auctionCard);
  }
}
