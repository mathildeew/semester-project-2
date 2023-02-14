const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

export function openModal() {
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}
