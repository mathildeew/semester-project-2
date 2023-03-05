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
 * // Error messages is shown if not successfull
 * const response = await placeBid( `${baseUrl}/auction/listings/${id}/bids`, postContent)
 *```
 */
export async function placeBid(url, postContent) {
  const errorMessage = document.querySelector(".errorMessage");
  const bidForm = document.getElementById("makeBid");

  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok) {
    window.location.reload();
  }

  if (json.errors) {
    errorMessage.style.display = "block";
    errorMessage.innerText = `${json.errors[0].message}`;
    bidForm.querySelector("button").innerText = "Place bid";
  }
}
