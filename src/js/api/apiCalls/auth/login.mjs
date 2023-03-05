import { setStorage } from "../../../storage/setStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Log in url
 * @param {object} postContent The body of the request
 * @returns The returned response json
 * @example
 * ```
 * // Sends a POST request with log in credentials.
 * // Stores the json in localStorage if successfull.
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
  return json;
}
