import { loginAPI } from "./loginAPI.mjs";
import { baseUrl } from "../../api/apiUrls.mjs";

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

export function login() {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());
    loginBtn.innerHTML = `
                          Logging in...
                        `;

    setTimeout(() => {
      loginAPI(`${baseUrl}/auction/auth/login`, postContent);
    }, "1000");
  });
}
