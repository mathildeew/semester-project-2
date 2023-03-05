import { setStorage } from "../../../storage/setStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

const errorMessage = document.querySelector(".errorMessage");
const loginBtn = document.getElementById("loginBtn");

/**
 * Sends a POST request to the server
 * @param {url} url Log in url
 * @param {object} postContent The body of the request
 * @returns The returned response json
 * @example
 * ```
 * // Sends request with log in credentials.
 * // Stores the json in localStorage if successfull and redirects to home.
 * // Shows error message if invalid email or password.
 * const response = await login(`${baseUrl}/auction/auth/login`, postContent)
 *```
 */
export async function login(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok) {
    setStorage(json);
    window.location.href = "/";
  }

  if (json.errors) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Invalid email or password";
    loginBtn.innerHTML = "Log in";
  }
}
