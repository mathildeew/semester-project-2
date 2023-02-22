import { baseUrl } from "../api/apiUrls.mjs";
import { put } from "../api/put.mjs";
import * as storage from "../storage/localStorage.mjs";

// const name = storage.get("name");
const changeAvatarForm = document.getElementById("changeAvatar");
const errorMessage = document.querySelector(".errorMessage");

export function changeAvatarListener() {
  changeAvatarForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    changeAvatarForm.querySelector("button").innerText = "Please wait...";

    const name = storage.get("name");
    const json = await put(
      `${baseUrl}/auction/profiles/${name}/media`,
      putContent
    );
    console.log(json);

    json.ok
      ? (window.location.reload(), storage.set("avatar", json.avatar))
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText = "Please try another UR link"),
      (changeAvatarForm.querySelector("button").innerText = "Update");
  });
}
