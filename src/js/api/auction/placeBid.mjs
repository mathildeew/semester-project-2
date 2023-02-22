import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { getParams } from "../../globals/params.mjs";

// Get ID param to link
const id = getParams("id");

/**
 * Places a bid on an auction
 * @param {*} postContent
 * @returns response
 */
export async function placeBid(postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(
    `${baseUrl}/auction/listings/${id}/bids`,
    postData
  );

  return response;
}
