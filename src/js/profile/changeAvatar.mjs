import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");
const changeAvatarForm = document.getElementById("changeAvatar");

export function changeAvatar() {
  changeAvatarForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const putContent = Object.fromEntries(formData.entries());

    async function changeAvatarAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      putData["body"] = JSON.stringify(putContent);
      const response = await fetch(url, putData);
      const json = await response.json();
      console.log(json);
      storage.set("avatar", json.avatar);
    }
    changeAvatarAPI(`${baseUrl}/auction/profiles/${name}/media`, putContent);
  });
}
