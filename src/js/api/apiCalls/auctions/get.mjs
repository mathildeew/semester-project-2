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
 * const json = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  );
 * ```
 */
export async function getAll(url) {
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
