import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";

/**
 *  Register to auction site
 * @param {*} postContent Entries from register form
 * @returns Response
 */
export async function register(postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(`${baseUrl}/auction/auth/register`, postData);

  return response;
}
