export function auctionTemplate() {
  const auction = ` 
  <div class="col-12 col-sm-10 col-md-6">
                        <div
                        id="imageContainer"
                        class="d-flex justify-content-center mb-3 position-relative"
                      >
                        <span
                          class="position-absolute bottom-0 end-0 p-2 bg-primary rounded fw-bold p-2 mb-2 me-2"
                        >
                          <span id="highestBid" class="highestBid text-secondary"></span>
                        </span>
                        <img id="auctionImg" class="rounded" src="" alt="" />                     

                        <div
                          id="carouselExample"
                          class="carousel slide position-relative"
                        >
                          <div class="carousel-inner"></div>
                          <span
                            class="position-absolute bottom-0 end-0 p-2 bg-primary rounded fw-bold p-2 mb-2 me-2"
                          >
                            <span id="highestBidCar" class="text-secondary"></span>
                          </span>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon bg-secondary rounded"
                              aria-hidden="true"
                            ></span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon bg-secondary rounded"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      </div>
                      </div>
                      <div class="h-100 mb-3 bg-light rounded p-2 col-11 col-md-6">
                      <div class="d-flex align-items-center justify-content-between">
                        <h2 id="singleAuctionTitle" class="mb-0"></h2>
                        <i
                          class="bi bi-three-dots mb-0"
                          id="settingsBtn"
                          type="button"
                          class="text-white fw-bolder rounded bg-secondary border-0 py-2 px-5 mb-3"
                          data-bs-toggle="modal"
                          data-bs-target="#settingsMdl"
                        ></i>
                      </div>
                      <a
                        id="auctionSellerLink"
                        class="d-flex align-items-center mt-0 mb-4"
                      >
                        <img class="rounded-circle" />
                        <p id="singleAuctionSeller" class="fs-5 fw-light my-0 ms-1"></p>
                      </a>                      

                      <button
                        id="placeBidModalBtn"
                        type="button"
                        class="text-white fw-bolder rounded bg-secondary border-0 py-2 px-5 mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#makeBidModal"
                      >
                        Place bid
                      </button>                     

                      <h3 class="fw-bold m">Description</h3>                      

                      <p id="singleAuctionDesc" class=""></p>
                      <div class="d-flex">
                        <i class="bi bi-clock-fill me-1"></i>
                        <p id="singleAuctionTimer"></p>
                      </div>
                      <p id="singleAuctionCreated" class="mt-2 mb-0 text-muted">
                        Created:
                      </p>
                      <p id="singleAuctionUpdated" class="text-muted">Last updated:</p>
                      </div>                      

                      <div id="bidsHistory" class="col-11 col-md-6 offset-md-6 mb-5">
                      <h2 class="ms-3">Bidding history</h2>
                      </div>
                `;
  return auction;
}
