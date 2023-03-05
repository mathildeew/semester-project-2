import { setStorage } from "../../../storage/setStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Register url
 * @param {object} postContent The body of the request
 * @example
 * ```
 * // Sends a POST request with register credentials.
 * // Redirects to log in if successfull
 * // Shows error messages if not successfull
 * const response = await register(`${baseUrl}/auction/auth/register`, postContent)
 *```
 */
export async function register(url, postContent) {
  const registerBtn = document.getElementById("registerBtn");
  const errorMessage = document.querySelector(".errorMessage");

  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok) {
    window.location.href = "/accounts/login/";
  }

  if (json.errors) {
    errorMessage.style.display = "block";
    errorMessage.innerText = `${json.errors[0].message}`;
    registerBtn.innerHTML = "Register";
  }
}
