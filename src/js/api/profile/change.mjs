import { baseUrl } from "../apiUrls.mjs";
import { fetchOptions } from "../fetchOptions.mjs";
import * as storage from "../../storage/localStorage.mjs";

const name = storage.get("name");

export async function changeAvatar(putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(
    `${baseUrl}/auction/profiles/${name}/media`,
    putData
  );
  const json = await response.json();

  if (response.ok) {
    storage.set("avatar", json.avatar);
  }

  return json;
}
