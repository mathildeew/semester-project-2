export function auctionCarousel(auction) {
  const images = auction.media;

  const slideOne = document.querySelector(".slideOne");
  const slideTwo = document.querySelector(".slideTwo");
  const slideThree = document.querySelector(".slideThree");

  if (images.length > 1) {
    slideOne.querySelector("img").src = images[0];
    slideTwo.querySelector("img").src = images[1];
  }
  if (images.length > 2) {
    slideThree.querySelector("img").src = images[2];
  }
}
