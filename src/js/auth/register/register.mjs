import { baseUrl } from "../../api/apiUrls.mjs";
import { registerAPI } from "./registerAPI.mjs";

const registerForm = document.getElementById("registerForm");

export function register() {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    registerAPI(`${baseUrl}/auction/auth/register`, postContent);
  });
}
