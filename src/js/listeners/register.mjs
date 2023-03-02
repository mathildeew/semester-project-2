import { baseUrl } from "../api/apiUrls.mjs";
import { register } from "../api/apiCalls/auth/register.mjs";

const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const errorMessage = document.querySelector(".errorMessage");

export async function registerListener() {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    registerBtn.innerHTML = "Please wait...";

    const response = await register(
      `${baseUrl}/auction/auth/register`,
      postContent
    );

    if (response.errors) {
      errorMessage.style.display = "block";
      errorMessage.innerText = `${response.errors[0].message}`;
      registerBtn.innerHTML = "Register";
    }
  });
}
