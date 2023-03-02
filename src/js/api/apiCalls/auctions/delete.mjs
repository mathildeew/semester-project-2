import { fetchOptions } from "../../fetchOptions.mjs";
import * as storage from "../../../storage/localStorage.mjs";

/**
 * Sends a DELETE request to the server
 * @param {url} url API URL
 * @returns The API response
 * @example
 * ```
 * // Deletes an auction.
 * // User is sent to profile page if the request is successfull.
 *  const response = await deleteAPI(`${baseUrl}/auction/listings/${id}`);
 * ```
 */
export async function deleteAPI(url) {
  const userName = storage.get("name");

  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(url, deleteData);

  if (response.ok) {
    window.location.href = `/profile/?name=${userName}`;
  }
  return response;
}
