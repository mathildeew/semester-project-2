import * as storage from "../../storage/localStorage.mjs";

export function unauthorizedNav() {
  const token = storage.get("token");
  const navBtn = document.getElementById("navBtn");
  const loginBtn = document.getElementById("loginNav");
  loginBtn.style.display = "none";

  if (token === undefined || token === null || token === "") {
    navBtn.style.display = "none";
    loginBtn.style.display = "inline";
  }
}
