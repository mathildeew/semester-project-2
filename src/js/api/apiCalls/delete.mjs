import { fetchOptions } from "../fetchOptions.mjs";

/**
 * Sends a delete request to the server
 * @param {url} url API URL
 * @returns The API response
 */
export async function deleteAPI(url) {
  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(url, deleteData);

  return response;
}
