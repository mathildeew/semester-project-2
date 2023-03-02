export function updateModal(auction) {
  const newTitle = document.getElementById("newTitle");
  const newDesc = document.getElementById("newAuctionDesc");
  const newMediaOne = document.getElementById("newMediaOne");
  const newMediaTwo = document.getElementById("newMediaTwo");
  const newMediaThree = document.getElementById("newMediaThree");

  newTitle.value = auction.title;
  newDesc.value = auction.description;

  if (auction.media.length > 0) {
    newMediaOne.value = auction.media[0];
  }
  if (auction.media.length > 1) {
    newMediaTwo.value = auction.media[1];
  }
  if (auction.media.length > 2) {
    newMediaThree.value = auction.media[2];
  }
}
