import { errorMessage } from "../../../templates/errorMessage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";
import * as loader from "../../../components/loader.mjs";

/**
 * Sends a GET request to the server
 * @param {url} url All auction Url
 * @returns The API json
 * @example
 * ```
 * // Sends a GET request to the server
 * // Returns json if the response.ok
 * // Shows error message if !response.ok
 *   const profile = await getProfile(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true`
  );
 * ```
 */
export async function getProfile(url) {
  const [getData, postData] = fetchOptions;
  const response = await fetch(url, getData);
  const json = await response.json();

  if (response.ok) {
    loader.hideLoader();
    return json;
  } else {
    const main = document.querySelector("main");
    const errorMessageContent = errorMessage();
    main.innerHTML = errorMessageContent;
  }
}
