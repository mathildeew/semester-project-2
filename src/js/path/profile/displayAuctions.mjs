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
    const ends = auctions[i].endsAt;
    const timer = calcEndTime(ends);

    // Display auctions
    const auctionsContainer = document.getElementById("auctionsProfile");
    const auctionCard = document.createElement("div");
    auctionCard.id = "auctionCardProfile";

    auctionCard.className = " ";
    auctionCard.innerHTML += `
                              <a>
                              <div class="card h-100 bg-light  border-secondary">
                                <div class="overflow-hidden rounded">
                                 <img id="auctionsImg" class="card-img-top rounded" />
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                  <h3 class="auctionCardTitle card-title"></h3>
                                  <div class="d-flex mb-3">
                                    <i class="bi bi-clock-fill me-1"></i>
                                    <p class="auctionCardEnds mb-0"></p>
                                  </div>
                                  </div>
                                </div>
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
