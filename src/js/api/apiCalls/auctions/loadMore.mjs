import { display } from "../../../render/renderAuctions.mjs";
import { errorMessage } from "../../../templates/errorMessage.mjs";
import { baseUrl } from "../../apiUrls.mjs";
import * as loader from "../../../components/loader.mjs";
import * as loadMoreBtn from "../../../func/loadMoreButton.mjs";

/**
 * Sends a request to the server to load more content
 * Limit controls how many objects that's returned
 * Offset controls how many objects thats's skipped in the returned array
 */
let limit = 6;
let offset = 6;

export async function loadMore() {
  loader.showLoader();
  loadMoreBtn.hideLoadMore();

  const link = `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}&offset=${offset}`;

  const response = await fetch(link);
  const json = await response.json();

  offset = offset + limit;

  if (response.ok) {
    display(json);
    loader.hideLoader();
    loadMoreBtn.showLoadMore();
  } else {
    const main = document.querySelector("main");
    const errorMessageContent = errorMessage();
    main.innerHTML = errorMessageContent;
  }
}
