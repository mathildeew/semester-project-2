import { fetchOptions } from "../../fetchOptions.mjs";
import * as storage from "../../../storage/localStorage.mjs";

/**
 * Sends a PUT request to the API server
 * @param {url} url The API url
 * @param {object} putContent The request body
 * @returns The response from the request
 * @example
 * ```
 * // Sends a PUT request with the new avatar.
 * // Profile page is reloaded if successfull and new avatar is saved in localStorage
 *  const json = await changeAvatar(`${baseUrl}/auction/profiles/${name}/media`, putContent);
 * ````
 */
export async function updateAvatar(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();

  if (response.ok) {
    storage.set("avatar", json.avatar);
    window.location.reload();
  }
  return json;
}
