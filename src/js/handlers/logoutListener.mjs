import { logout } from "../auth/logout.mjs";

const logoutBtn = document.getElementById("logoutBtn");

export function logoutListener() {
  logoutBtn.addEventListener("click", (event) => {
    logout();
    window.location.href = "/";
  });
}
