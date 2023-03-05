import { errorMessage } from "../../../templates/errorMessage.mjs";
import * as loadMoreBtn from "../../../func/loadMoreButton.mjs";
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
 * const json = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  );
 * ```
 */
export async function getAllAuctions(url) {
  loader.showLoader();
  loadMoreBtn.hideLoadMore();

  const response = await fetch(url);
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
