import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";

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
    }
    loginAPI(`${baseUrl}/auction/auth/login`, postContent);
  });
}
