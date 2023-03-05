export function profileTemplate() {
  const profileContent = `
                          <div class="row justify-content-center">
                          
                            <!-- User info column -->
                            <section class="rounded py-4 my-5 d-flex flex-column mx-md-0 col-11 col-md-6">
                                <div class="d-flex flex-column">
                                  <div class="d-flex align-items-center mb-2">
                                    <img id="avatar" class="rounded-circle me-2" />

                                    <div class="d-flex flex-column align-items-center flex-lg-column">
                                      <h2 id="username" class="fw-bol me-3"></h2>

                                      <!-- Log out & update avatar -->
                                      <div id="settingsProfile" class="dropdown">
                                        <button
                                        class="rounded btn bg-secondary text-white dropdown-toggle p-1"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        >
                                        Settings
                                        </button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <p
                                            class="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#myModal"
                                            >
                                            Update avatar
                                            </p>
                                          </li>
                                          <li>
                                            <p id="logoutBtnBig" class="dropdown-item mb-2">
                                            Log out
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                <hr />

                                <div class="d-flex justify-content-around">
                                    <p id="credits" class="fw-bold">Credits:</p>
                                    <p id="wins" class="fw-bold">Wins:</p>
                                    <p id="listingsProfile" class="fw-bold">Auctions:</p>
                                </div>
                                </div>
                            </section>

                            <section class="d-flex flex-column justify-content-between justify-content-lg-around col-12 col-md-9">
                                  <div class="d-flex justify-content-around">
                                    <h3 id="showAuctionsBtn" class="text-center mb-4">Auctions</h3>
                                    <h3 id="showBidsBtn" class="text-center mb-4">Bids</h3>
                                  </div>

                                <!-- Auctions & bids carousel-->
                                <div>
                                  <div id="auctionsProfile"></div>
                                </div>

                                <div id="bidsProfile"></div>
                            </section>
                          </div>  
                         `;

  return profileContent;
}
