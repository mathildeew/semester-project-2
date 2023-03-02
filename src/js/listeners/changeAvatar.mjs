import { baseUrl } from "../api/apiUrls.mjs";
import { updateAvatar } from "../api/apiCalls/profile/update.mjs";
import * as storage from "../storage/localStorage.mjs";

export async function updateAvatarListener() {
  const changeAvatarForm = document.getElementById("changeAvatar");
  const errorMessage = document.querySelector(".errorMessage");

  changeAvatarForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    changeAvatarForm.querySelector("button").innerText = "Please wait...";

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    const name = storage.get("name");
    const json = await updateAvatar(
      `${baseUrl}/auction/profiles/${name}/media`,
      putContent
    );

    if (json.errors) {
      errorMessage.style.display = "inline";
      errorMessage.innerHTML = "Please try another link";
      changeAvatarForm.querySelector("button").innerText =
        "Please try another link";
    }
  });
}
