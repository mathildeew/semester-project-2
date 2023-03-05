import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a POST request to the server
 * @param {url} url Place bid url
 * @param {object} postContent The body of the request
 * @returns The response from the request
 * @example
 * ```
 * // Sends a POST request to place a bid on an auction
 * // Location is reloaded if successfull
 * const response = await placeBid( `${baseUrl}/auction/listings/${id}/bids`, postContent)
 *```
 */
export async function placeBid(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);

  if (response.ok) {
    window.location.reload();
  }
}
