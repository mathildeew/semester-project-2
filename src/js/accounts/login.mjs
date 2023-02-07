import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { set } from "../storage/localStorage.mjs";
import { setStorage } from "../storage/setStorage.mjs";

const loginForm = document.getElementById("loginForm");

export function login() {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function loginAPI(url, postContent) {
      const [getdata, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();

      console.log(json);
      setStorage(json);
    }
    loginAPI(`${baseUrl}/auction/auth/login`, postContent);
  });
}
