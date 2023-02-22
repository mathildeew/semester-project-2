import { baseUrl } from "./apiUrls.mjs";
import { fetchOptions } from "./fetchOptions.mjs";
import { getParams } from "../globals/params.mjs";

export async function deleteAPI(url) {
  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(url, deleteData);

  return response;
}
