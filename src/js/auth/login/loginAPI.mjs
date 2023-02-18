import { login } from "./login.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { setStorage } from "../../storage/setStorage.mjs";

const errorMessage = document.querySelector(".errorMessage");

/**
 *
 * @param {URL} url API url
 * @param {*} postContent Entries from login form
 * @example
 * // Logs in to the auction site
 * loginAPI(`${baseUrl}/auction/auth/login`, postContent)
 */
export async function loginAPI(url, postContent) {
  const [getdata, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  console.log(typeof postContent);

  if (response.ok) {
    setStorage(json);
    // window.location.href = "/";
  } else {
    errorMessage.style.display = "block";
  }
}
