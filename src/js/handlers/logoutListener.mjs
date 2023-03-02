import { logout } from "../auth/logout.mjs";

export function logoutListener() {
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", () => {
    logout();
    window.location.href = "/";
  });
}
