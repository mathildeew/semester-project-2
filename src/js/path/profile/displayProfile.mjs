import * as storage from "../../storage/localStorage.mjs";
const userName = storage.get("name");
const avatar = storage.get("avatar");

export function displayProfile(profile) {
  //Update avatar modal
  const modalPlaceholderText = document.querySelector("#changeAvatar input");
  modalPlaceholderText.placeholder = avatar;

  // User info
  document.title += ` ${profile.name}`;

  const userNameContainer = document.getElementById("username");
  userNameContainer.innerText = `${profile.name}`;

  const avatarContainer = document.getElementById("avatar");
  avatarContainer.src = profile.avatar;
  avatarContainer.alt = `${profile.name}'s avatar`;

  // Unauth
  const creditsContainer = document.getElementById("credits");
  const changeAvatarBtn = document.getElementById("myInput");

  if (userName !== profile.name) {
    creditsContainer.style.display = "none";
    changeAvatarBtn.style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
  } else if (userName === profile.name) {
    creditsContainer.innerText = `Credits: $${profile.credits}`;
  }

  const winsContainer = document.getElementById("wins");
  winsContainer.innerText = `Wins: ${profile.wins.length}`;
}
