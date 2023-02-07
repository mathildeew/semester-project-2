const avatarMdl = document.getElementById("avatarMdl");
const avatarBtn = document.getElementById("avatarBtn");

export function changeAvatarModal() {
  avatarMdl.addEventListener("shown.bs.modal", () => {
    changeAvatarBtn.focus();
  });
}
