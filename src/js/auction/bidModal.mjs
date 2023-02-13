export function openBidModal() {
  const bidModal = document.getElementById("makeBidModal");
  const bidModalBtn = document.getElementById("placeBid");

  bidModal.addEventListener("shown.bs.modal", () => {
    bidModalBtn.focus();
  });
}
