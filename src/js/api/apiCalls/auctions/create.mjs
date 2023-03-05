import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Create auction url
 * @param {object} postContent The body of the request
 * @returns The json from the request
 * @example
 * ```
 * // Sends a POST request with the data of the new auction
 * // Location is replaced with the new auction
 * const response = await createAuction(`${baseUrl}/auction/listings`, postContent)
 *```
 */
export async function createAuction(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok === true) {
    window.location.href = `/auction/?id=${json.id}`;
  }
  return json;
}
