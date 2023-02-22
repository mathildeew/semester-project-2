import { getParams } from "../../globals/params.mjs";
import { fetchOptions } from "../fetchOptions.mjs";
import { baseUrl } from "../apiUrls.mjs";

// Get params to link
const profileName = getParams("name");

/**
 * Sends API request to server and gets the profile info as response
 */
export async function getProfileAPI() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true&_count.listings=true`,
    getData
  );
  const json = await response.json();

  return json;
}
