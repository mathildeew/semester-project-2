import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

// const changeAvatarForm = document.getElementById("changeAvatarForm");

// export function changeAvatar() {
//   changeAvatarForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);
//     const putContent = Object.fromEntries(formData.entries());

//     async function changeAvatarAPI() {
//       const [getData, postData, putData] = fetchOptions;
//       putData["body"] = JSON.stringify(putContent);
//       const response = await fetch(url, putData);
//       const json = await response.json();
//       console.log(json);
//     }
//     changeAvatarAPI(`${baseUrl}/auction/profiles/onkel/media`), putContent;
//   });
// }
