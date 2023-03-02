import { fetchOptions } from "../fetchOptions.mjs";

/**
 * Sends a get request to the server
 * @param {url} url
 * @returns The API json
 */
export async function get(url) {
  const [getData, postData] = fetchOptions;
  const response = await fetch(url, getData);
  const json = await response.json();

  return json;
}
