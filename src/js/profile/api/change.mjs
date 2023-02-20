import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import * as storage from "../../storage/localStorage.mjs";

const name = storage.get("name");
const changeAvatarForm = document.getElementById("changeAvatar");
const errorMessage = document.querySelector(".errorMessage");

export function changeAvatar() {
  changeAvatarForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    changeAvatarForm.querySelector("button").innerText = "Please wait...";

    async function changeAvatarAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      putData["body"] = JSON.stringify(putContent);
      const response = await fetch(url, putData);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        storage.set("avatar", json.avatar);
        window.location.href = `/profile/?name=${name}`;
      } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = json.errors[0].message;
        changeAvatarForm.querySelector("button").innerText = "Update";
      }
    }
    setTimeout(() => {
      changeAvatarAPI(`${baseUrl}/auction/profiles/${name}/media`, putContent);
    }, "1000");
  });
}
