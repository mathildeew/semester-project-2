import { baseUrl } from "../api/apiUrls.mjs";
import { post } from "../api/post.mjs";
import { setStorage } from "../storage/setStorage.mjs";

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.querySelector(".errorMessage");

export function loginListener() {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    loginBtn.innerHTML = "Logging in...";

    const json = await post(`${baseUrl}/auction/auth/login`, postContent);
    console.log(json);

    json.accessToken
      ? setStorage(json)((window.location.href = "/"))
      : (errorMessage.style.display = "block")(
          (errorMessage.innerText = "Invalid email or password")
        )((loginBtn.innerHTML = "Log in"));
  });
}
