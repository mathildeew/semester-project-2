import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";
import { displayProfile } from "./display.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const profileName = params.get("name");

export async function getProfileAPI() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/profiles/${profileName}?_listings=true&_count.listings=true`,
    getData
  );
  const json = await response.json();
  console.log(json);
  displayProfile(json);
}
