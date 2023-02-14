const newAuctionModal = document.getElementById("newAuctionModal");
const newAuctionModalBtn = document.getElementById("newAuctionModalBtn");

export function openNewAuctionModal() {
  newAuctionModalBtn.addEventListener("shown.bs.modal", () => {
    newAuctionModalBtn.focus();
  });
}
