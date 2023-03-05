import { setStorage } from "../../../storage/setStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Register url
 * @param {object} postContent The body of the request
 * @returns The response json from the request
 * @example
 * ```
 * // Sends a POST request with register credentials.
 * // Returns the json as response
 * const response = await register(`${baseUrl}/auction/auth/register`, postContent)
 *```
 */
export async function register(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  console.log(json);

  if (response.ok === true) {
    setStorage(json);
    window.location.href = "/accounts/login/";
  }
  return json;
}
