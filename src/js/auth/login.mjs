import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { setStorage } from "../storage/setStorage.mjs";

/**
 * Sends API request to url with login credentials and saves response to localStorage
 * @param {*} postContent Entries from login form
 * @returns Response
 */
export async function login(postContent) {
  const [getdata, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(`${baseUrl}/auction/auth/login`, postData);

  if (response.ok) {
    const json = await response.json();
    setStorage(json);
  }
  return response;
}
