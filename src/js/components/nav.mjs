import * as storage from "../storage/localStorage.mjs";

export function nav() {
  const name = storage.get("name");
  const avatar = storage.get("avatar");
  const token = storage.get("token");
  const navBtn = document.getElementById("navBtn");
  const profileLink = document.getElementById("profileLink");

  navBtn.style.backgroundImage = `url(${avatar})`;
  profileLink.href = `/profile/?name=${name}`;
}
