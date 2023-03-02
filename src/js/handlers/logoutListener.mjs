import { logout } from "../auth/logout.mjs";

export function logoutListener() {
  const logoutBtnS = document.getElementById("logoutBtnSmall");
  const logoutBtnB = document.getElementById("logoutBtnBig");

  logoutBtnS.addEventListener("click", () => {
    logout();
    window.location.href = "/";
  });

  logoutBtnB.addEventListener("click", () => {
    logout();
    window.location.href = "/";
  });
}
