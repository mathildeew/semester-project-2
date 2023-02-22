import { login } from "../api/auth/login.mjs";

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

    const response = await login(postContent);

    response.ok
      ? (window.location.href = "/")
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText = "Invalid email or password"),
      (loginBtn.innerHTML = "Log in");

    // MAYBE USE THIS ?? - - - - - - - - - - - - - - - - - - - -
    // setTimeout(() => {
    //   login(postContent);
    // }, "1000");
  });
}
