import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";

// Get ID param to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function placeBid(postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(
    `${baseUrl}/auction/listings/${id}/bids`,
    postData
  );

  return response;
}
