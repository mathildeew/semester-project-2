import { baseUrl } from "../apiUrls.mjs";
import { fetchOptions } from "../fetchOptions.mjs";
import { displayProfile } from "../../profile/display.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const profileName = params.get("name");

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
