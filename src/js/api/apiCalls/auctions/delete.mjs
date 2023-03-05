import { fetchOptions } from "../../fetchOptions.mjs";
import * as storage from "../../../storage/localStorage.mjs";

/**
 * Sends a DELETE request to the server
 * @param {url} url API URL
 * @returns The API response
 * @example
 * ```
 * // Deletes an auction
 * // Redirects to profile page if the request is successfull
 * // Shows error message if something went wrong
 *  const response = await deleteAPI(`${baseUrl}/auction/listings/${id}`);
 * ```
 */
export async function deleteAPI(url) {
  const errorMessage = document.querySelector("deleteMessage");
  const userName = storage.get("name");

  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(url, deleteData);

  if (response.ok) {
    window.location.href = `/profile/?name=${userName}`;
  }

  if (json.errors) {
    errorMessage.innerText = "Something went wrong! Try again later.";
  }
}
