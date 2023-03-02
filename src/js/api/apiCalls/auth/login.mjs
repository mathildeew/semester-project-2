import { setStorage } from "../../../storage/setStorage.mjs";
import { baseUrl } from "../../apiUrls.mjs";
import { fetchOptions } from "../../fetchOptions.mjs";

export async function login(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  if (response.ok === true) {
    setStorage(json);
    window.location.href = "/";
  }
  return json;
}
