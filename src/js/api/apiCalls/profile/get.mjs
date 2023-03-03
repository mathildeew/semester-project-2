import { fetchOptions } from "../../fetchOptions.mjs";

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

  const errorMessage = document.getElementById("errorMessageAPI");
  if (response.ok) {
    return json;
  } else {
    errorMessage.style.display = "flex";
  }
}
