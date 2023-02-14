import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");
const avatar = storage.get("avatar");
const avatarContainer = document.getElementById("navBtn");

export function nav() {
  const navCollapse = document.getElementById("navbarCollapse");
  navCollapse.querySelector("a:nth-child(1)").href = `/profile/?name=${name}`;
  navBtn.style.backgroundImage = `url(${avatar})`;
}
