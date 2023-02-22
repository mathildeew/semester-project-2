import { baseUrl } from "../apiUrls.mjs";
import { fetchOptions } from "../fetchOptions.mjs";

export async function getAuction() {
  // Get params to link
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/listings/${id}?_seller=true&_bids=true`,
    getData
  );
  const json = await response.json();

  return json;
}
