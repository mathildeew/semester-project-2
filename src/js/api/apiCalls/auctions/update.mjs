import * as storage from "../../../storage/localStorage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a PUT request to the API server
 * @param {url} url The API url
 * @param {object} putContent The request body
 * @returns The response from the request
 * @example
 * ```
 * // Sends a PUT request with the updated posts content
 * // Auction is reloaded if successfull
 *    const response = await updateAuction(
      `${baseUrl}/auction/listings/${id}`, putContent);
 * ````
 */
export async function updateAuction(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();

  if (response.ok) {
    window.location.reload();
  }
  return json;
}
