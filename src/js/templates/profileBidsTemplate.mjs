export function profileBids(link, image, title, timer, yourBid) {
  const bidCard = document.createElement("div");
  bidCard.id = "bidCardProfile";
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
                                <p class="auctionCardBid fw-bold"></p>
                              </div>
                            </div>
                          </a>
                       `;

  bidCard.querySelector("a").href = link;
  bidCard.querySelector("#auctionsImg").src = image;
  bidCard.querySelector(".auctionCardTitle").innerText = title;
  bidCard.querySelector(".auctionCardEnds").innerText = timer;
  bidCard.querySelector(".auctionCardBid").innerText = `Your bid: $${yourBid}`;

  return bidCard;
}
