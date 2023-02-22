import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import { getParams } from "../../globals/params.mjs";
import * as storage from "../../storage/localStorage.mjs";

// Get params to link
const id = getParams("id");

export async function deleteAuction() {
  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(`${baseUrl}/auction/listings/${id}`, deleteData);

  return response;
}
