export function profileAuctions(link, image, title, timer) {
  const auctionCard = document.createElement("div");
  auctionCard.id = "auctionCardProfile";
  auctionCard.innerHTML = `
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
  auctionCard.querySelector("a").href = link;
  auctionCard.querySelector("#auctionsImg").src = image;
  auctionCard.querySelector("#auctionsImg").alt = title;
  auctionCard.querySelector(".auctionCardTitle").innerText = title;
  auctionCard.querySelector(".auctionCardEnds").innerText = timer;
  return auctionCard;
}
