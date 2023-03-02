import * as storage from "../storage/localStorage.mjs";

export function nav() {
  const name = storage.get("name");
  const avatar = storage.get("avatar");
  const token = storage.get("token");

  const navMenu = document.getElementById("navMenu");
  const navBtn = document.getElementById("navBtn");

  if (token === [] || token === undefined || token === null) {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
    navBtn.style.backgroundImage = `url(${avatar})`;
    navBtn.href = `/profile/?name=${name}`;
  }
}
