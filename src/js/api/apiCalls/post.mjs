import { fetchOptions } from "../fetchOptions.mjs";

/**
 * Sends a post request to the server
 * @param {url} url API url
 * @param {object} postContent The request body
 * @returns Json if response is ok
 */
export async function post(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  return response.ok === true ? json : false;
}
