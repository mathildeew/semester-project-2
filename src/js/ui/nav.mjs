import * as storage from "../storage/localStorage.mjs";

const logoutBtn = document.querySelector(".logoutBtn");

export function logout() {
  logoutBtn.addEventListener("click", (event) => {
    localStorage.clear();
  });
}
