import { get } from "../../api/apiCalls/get.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";
import { getParams } from "../../globals/params.mjs";
import { calcEndTime } from "../../globals/timer.mjs";

export async function displayBids() {
  const profileName = getParams("name");

  const bids = await get(
    `${baseUrl}/auction/profiles/${profileName}/bids?_listings=true`
  );
  console.log(bids);
  for (let i = 0; i < bids.length; i++) {
    const id = bids[i].listing.id;

    let image;
    // Placeholder if auction image is missing
    if (bids[i].listing.media.length === 0) {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    } else {
      image = bids[i].listing.media[0];
    }

    const title = bids[i].listing.title;

    // Calculate auction end time
    const ends = bids[i].listing.endsAt;
    const timer = calcEndTime(ends);

    const bidsContainer = document.getElementById("bidsProfile");
    const bidCard = document.createElement("div");
    bidCard.id = "bidCardProfile";

    bidCard.className = " ";
    bidCard.innerHTML += `
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

    // bidCard.querySelector("a").href = `/auction/?id=${id}`;
    bidCard.querySelector("#auctionsImg").src = image;
    bidCard.querySelector(".auctionCardTitle").innerText = title;
    bidCard.querySelector(".auctionCardEnds").innerText = timer;
    bidsContainer.append(bidCard);
  }
}
