import * as storage from "../storage/localStorage.mjs";

const avatar = storage.get("avatar");
const avatarContainer = document.getElementById("avatar");

export function displayAvatar() {
  avatarContainer.style.backgroundImage = `url(${avatar})`;
}
