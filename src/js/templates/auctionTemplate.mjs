export function auctionTemplate() {
  const auction = ` 
                    <!-- Images / carousel -->
                    <div class="col-12 col-sm-10 col-md-6">
                      <div id="imageContainer" class="d-flex justify-content-center mb-3">
                        <img id="auctionImg" class="rounded" src="" alt="" />                     
                        <div
                          id="carouselExample"
                          class="carousel slide "
                          >
                          <div class="carousel-inner"></div>
                            <button
                              class="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExample"
                              data-bs-slide="prev"
                              >
                              <span class="carousel-control-prev-icon bg-secondary rounded" aria-hidden="true"></span>
                            </button>
                            <button
                              class="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExample"
                              data-bs-slide="next"
                            >
                              <span class="carousel-control-next-icon bg-secondary rounded" aria-hidden="true"></span>
                            </button>
                          </div>
                        </div>
                      </div>

                    <!-- Auction info -->
                      <div class=" mb-3 bg-light rounded p-2 col-11 col-md-6 d-md-flex flex-column justify-content-md-around">
                        <div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h2 id="singleAuctionTitle" class="mb-2"></h2>
                            <i
                              class="bi bi-three-dots mb-0"
                              id="settingsBtn"
                              type="button"
                              class="text-white fw-bolder rounded bg-secondary border-0 py-2 px-5 mb-3"
                              data-bs-toggle="modal"
                              data-bs-target="#settingsMdl"
                              ></i>
                          </div>
                          <div class="d-flex">
                            <i class="bi bi-clock-fill me-1"></i>
                            <p id="singleAuctionTimer"></p>
                          </div>
                          <p id="highestBid" class="fw-bold bg-primary text-secondary p-2 rounded mb-5 me-5 mx-auto my-4 d-inline"></p>
                          <div class="mt-4">
                            <a id="auctionSellerLink"class="d-inline fw-bold"></a>                      
                            <p id="singleAuctionDesc" class="d-inline mb-"></p>
                          </div>
                        </div>
                      
                        <button
                        id="placeBidModalBtn"
                        type="button"
                        class="d-block text-white fw-bolder rounded bg-secondary border-0 py-2 px-5 my-4 me-md-5 cta-button"
                        data-bs-toggle="modal"
                        data-bs-target="#makeBidModal"
                        >
                          Place bid
                        </button> 

                        <div>
                          <p id="singleAuctionCreated" class="mt-4 mb-0 text-muted">
                            Created:
                          </p>
                          <p id="singleAuctionUpdated" class="text-muted">Last updated:</p>
                        </div>                        
                      </div>           

                      <!-- Bids history -->
                      <div id="bidsHistory" class="col-11 col-md-6 offset-md-6 mb-5">
                        <h2 class="ms-3">Bidding history</h2>
                      </div>
                `;
  return auction;
}
