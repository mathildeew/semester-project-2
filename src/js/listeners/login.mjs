import { baseUrl } from "../api/apiUrls.mjs";
import { login } from "../api/apiCalls/auth/login.mjs";

export async function loginListener() {
  const loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    loginBtn.innerHTML = "Logging in...";

    await login(`${baseUrl}/auction/auth/login`, postContent);
  });
}
