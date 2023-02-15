import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");
const avatar = storage.get("avatar");
const token = storage.get("token");

export function nav() {
  const navCollapse = document.getElementById("navbarCollapse");
  const loginBtn = document.getElementById("loginNav");

  navCollapse.querySelector("a:nth-child(1)").href = `/profile/?name=${name}`;
  navBtn.style.backgroundImage = `url(${avatar})`;

  if (token === undefined || token === null || token === []) {
    navBtn.style.display = "none";
  } else {
    loginBtn.style.display = "none";
  }
}
