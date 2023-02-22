import { register } from "../auth/register.mjs";

const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const errorMessage = document.querySelector(".errorMessage");

export function registerListener() {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    registerBtn.innerHTML = "Please wait...";

    const response = register(postContent);

    response.ok
      ? (window.location.replace = "/")
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText = "Profile already exist"),
      (registerBtn.innerHTML = "Register");
  });
}
