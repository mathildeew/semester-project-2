import * as storage from "../storage/localStorage.mjs";

const userName = storage.get("name");
const userNameContainer = document.getElementById("username");

export function showUserName() {
  userNameContainer.innerHTML = `${userName}`;
}
