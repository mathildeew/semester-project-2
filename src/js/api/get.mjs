import { baseUrl } from "./apiUrls.mjs";
import { fetchOptions } from "./fetchOptions.mjs";

export async function get(url) {
  const [getData, postData] = fetchOptions;
  const response = await fetch(url, getData);
  const json = await response.json();

  return json;
}
