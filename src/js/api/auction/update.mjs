import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";

// Get params to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
/**
 * Updates auction with new content
 * @param {*} putContent Data sent to API
 * @returns Response
 */
export async function updateAuction(putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(`${baseUrl}/auction/listings/${id}`, putData);

  return response;
}
