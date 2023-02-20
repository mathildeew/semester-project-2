import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");
const avatar = storage.get("avatar");
const token = storage.get("token");

export function nav() {
  const navBtn = document.getElementById("profileLink");

  if (token !== undefined || token !== null || token !== []) {
    navBtn.querySelector("button").style.backgroundImage = `url(${avatar})`;
    navBtn.href = `/profile/?name=${name}`;
  }
  if (token === undefined || token === null || token === []) {
    navBtn.querySelector("button").style.backgroundImage =
      "url(/assets/placeholder/placeholder_Gavel_avatar.png)";
    navBtn.href = "/accounts/login/";
  }
}
