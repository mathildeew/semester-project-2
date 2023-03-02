import { fetchOptions } from "../fetchOptions.mjs";

/**
 * Sends a put request to the API server
 * @param {url} url The API url
 * @param {object} putContent The request body
 * @returns The json
 */
export async function put(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();

  return json;
}
