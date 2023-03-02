export function auctionCarousel(auction) {
  const images = auction.media;
  const carousel = document.querySelector(".carousel-inner");

  if (images.length === 2) {
    carousel.innerHTML = `
                          <div class="carousel-item slideOne active">
                            <img class="" />
                          </div>
                          <div class="carousel-item slideTwo">
                            <img class="" />
                          </div>
                          `;
    carousel.querySelector(".slideOne img").src = images[0];
    carousel.querySelector(".slideTwo img").src = images[1];
  } else if (images.length === 3) {
    carousel.innerHTML = `
                          <div class="carousel-item slideOne active">
                            <img class="" />
                          </div>
                          <div class="carousel-item slideTwo">
                            <img class="" />
                          </div>
                          <div class="carousel-item slideThree">
                            <img class="" />
                          </div>
                          `;
    carousel.querySelector(".slideOne img").src = images[0];
    carousel.querySelector(".slideTwo img").src = images[1];
    carousel.querySelector(".slideThree img").src = images[2];
  }
}
