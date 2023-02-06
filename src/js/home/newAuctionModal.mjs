const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

export function newAuctionModal() {
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}
