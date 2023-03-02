import { baseUrl } from "../api/apiUrls.mjs";
import { post } from "../api/apiCalls/post.mjs";

const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const errorMessage = document.querySelector(".errorMessage");

export function register() {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    registerBtn.innerHTML = "Please wait...";

    const response = await post(
      `${baseUrl}/auction/auth/register`,
      postContent
    );

    response.id
      ? (window.location.href = "/accounts/login/")
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText = "Profile already exist"),
      (registerBtn.innerHTML = "Register");
  });
}