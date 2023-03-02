import { logoutListener } from "../handlers/logoutListener.mjs";
import * as storage from "../storage/localStorage.mjs";

export function nav() {
  const name = storage.get("name");
  const avatar = storage.get("avatar");
  const token = storage.get("token");
  const credits = storage.get("credits");

  const navBtn = document.getElementById("navBtn");
  const profileLink = document.getElementById("profileLink");
  const navCredits = document.getElementById("navCredits");

  navBtn.style.backgroundImage = `url(${avatar})`;
  profileLink.href = `/profile/?name=${name}`;
  navCredits.innerText = `$${credits}`;

  logoutListener();
}
