export function auctionCarousel(auction) {
  const carouselContainer = document.getElementById("carouselContainer");
  const images = auction.media;

  console.log(images);

  carouselContainer.innerHTML = `
                                      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                          <div class="carousel-inner">
                                              <div class="carousel-item slideOne active">
                                                  <img class="">
                                              </div>
                                              <div class="carousel-item slideTwo">
                                                  <img class="">
                                              </div>
                                              <div class="carousel-item slideThree">
                                                  <img class="">
                                              </div>
                                          </div>
                                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Previous</span>
                                          </button>
                                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Next</span>
                                          </button>
                                      </div>
                                      `;

  const carouselSlider = carouselContainer.querySelector(".carousel-inner");
  if (images.length > 1) {
    carouselSlider.querySelector(".slideOne img").src = images[0];
    carouselSlider.querySelector(".slideTwo img").src = images[1];
  }
  if (images.length > 2) {
    carouselSlider.querySelector(".slideThree img").src = images[2];
  }
}
