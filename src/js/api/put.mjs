import { baseUrl } from "./apiUrls.mjs";
import { fetchOptions } from "./fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

export async function put(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();

  return json;
}
