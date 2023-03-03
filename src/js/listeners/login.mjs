import { baseUrl } from "../api/apiUrls.mjs";
import { login } from "../api/apiCalls/auth/login.mjs";

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.querySelector(".errorMessage");

export async function loginListener() {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    loginBtn.innerHTML = "Logging in...";

    const response = await login(`${baseUrl}/auction/auth/login`, postContent);
    console.log(response);

    if (response.errors) {
      errorMessage.style.display = "block";
      errorMessage.innerText = "Invalid email or password";
      loginBtn.innerHTML = "Log in";
    }
  });
}
