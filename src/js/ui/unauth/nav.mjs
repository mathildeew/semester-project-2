import * as storage from "../../storage/localStorage.mjs";

const token = storage.get("token");
const navBtn = document.getElementById("navBtn");
const loginBtn = document.getElementById("login");

loginBtn.style.display = "none";

export function unauthorizedNav() {
  if (token === undefined || token === null || token === "") {
    navBtn.style.display = "none";
    loginBtn.style.display = "inline";
  }
}
