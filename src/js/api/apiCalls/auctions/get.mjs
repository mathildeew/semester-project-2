import { errorMessage } from "../../../templates/errorMessage.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";
import * as loadMoreBtn from "../../../func/loadMoreButton.mjs";
import * as loader from "../../../components/loader.mjs";
/**
 * Sends a GET request to the server
 * @param {url} url API url
 * @returns The API json
 * @example
 * ```
 * // Sends a GET request to the server
 * // Returns json if the response.ok. Trigger hide/show loader and load more button.
 * // Shows error message if !response.ok
 * const json = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`
  );
 * ```
 */
export async function getAll(url) {
  loader.showLoader();
  loadMoreBtn.hideLoadMore();

  const response = await fetch(url);
  const json = await response.json();

  if (response.ok) {
    loader.hideLoader();
    loadMoreBtn.showLoadMore();
    return json;
  } else {
    const main = document.querySelector("main");
    const errorMessageContent = errorMessage();
    main.innerHTML = errorMessageContent;
  }
}
