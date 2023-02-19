export function auctionCarousel(auction) {
  const images = auction.media;

  const carousel = document.querySelector(".carousel-inner");
  const slideOne = document.querySelector(".slideOne");
  const slideTwo = document.querySelector(".slideTwo");
  const slideThree = document.querySelector(".slideThree");

  console.log(images.length);

  if (images.length === 2) {
    carousel.innerHTML = `
                          <div class="carousel-item carouselImage slideOne active">
                            <img class="" />
                          </div>
                          <div class="carousel-item carouselImage slideTwo">
                            <img class="" />
                          </div>
                          `;
    carousel.querySelector(".slideOne img").src = images[0];
    carousel.querySelector(".slideTwo img").src = images[1];
  } else if (images.length === 3) {
    carousel.innerHTML = `
                          <div class="carousel-item carouselImage slideOne active">
                            <img class="" />
                          </div>
                          <div class="carousel-item carouselImage slideTwo">
                            <img class="" />
                          </div>
                          <div class="carousel-item carouselImage slideThree">
                            <img class="" />
                          </div>
                          `;
    carousel.querySelector(".slideOne img").src = images[0];
    carousel.querySelector(".slideTwo img").src = images[1];
    carousel.querySelector(".slideThree img").src = images[2];
  }
}
