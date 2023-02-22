import { getParams } from "../../globals/params.mjs";
import { baseUrl } from "../apiUrls.mjs";
import { fetchOptions } from "../fetchOptions.mjs";

// Get params to link

const id = getParams("id");

export async function getAuction() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/listings/${id}?_seller=true&_bids=true`,
    getData
  );
  const json = await response.json();

  return json;
}
