import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");
const avatar = storage.get("avatar");
const token = storage.get("token");

export function nav() {
  const navBtn = document.getElementById("profileLink");

  navBtn.querySelector("button").style.backgroundImage = `url(${avatar})`;
  navBtn.href = `/profile/?name=${name}`;
}
