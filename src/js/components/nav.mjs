import { logoutListener } from "../handlers/logoutListener.mjs";
import * as storage from "../storage/localStorage.mjs";

export function nav() {
  const name = storage.get("name");
  const avatar = storage.get("avatar");
  const token = storage.get("token");

  const navBtn = document.getElementById("navBtn");
  const navIcon = document.querySelector(".bi-house");

  navBtn.style.backgroundImage = `url(${avatar})`;
  navBtn.href = `/profile/?name=${name}`;

  if (token === [] || token === undefined || token === null) {
    navIcon.style.display = "none";
  }
}
