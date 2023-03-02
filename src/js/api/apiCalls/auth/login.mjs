import { setStorage } from "../../../storage/setStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Log in url
 * @param {object} postContent The body of the request
 * @returns The response from the request
 * @example
 * ```
 * // Sends a POST request with log in credentials.
 * // Returns the json as response
 * const response = await login(`${baseUrl}/auction/auth/login`, postContent)
 *```
 */
export async function login(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok === true) {
    setStorage(json);
    window.location.href = "/";
  }
  return json;
}
