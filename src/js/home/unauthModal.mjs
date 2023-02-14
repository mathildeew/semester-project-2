import * as storage from "../storage/localStorage.mjs";

export function openUnauthModal() {
  const token = storage.get("token");
  console.log(token);

  if (token === undefined || token === null || token === []) {
    const unauthModal = document.getElementById("unauthModal");
    const unauthBtn = document.querySelector("unauthBtn");

    unauthModal.addEventListener("shown.bs.modal", () => {
      unauthBtn.focus();
    });
  }
}
