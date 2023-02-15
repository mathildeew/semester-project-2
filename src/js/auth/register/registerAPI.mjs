import { fetchOptions } from "../../api/fetchOptions.mjs";

/**
 *  Register to auction site
 * @param url url API register url
 * @param {*} postContent Entries from register form
 * @example
 * // Sends API request to register
 * registerAPI(`${baseUrl}/auction/auth/register`, postContent)
 */
export async function registerAPI(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();
  console.log(postContent);
}