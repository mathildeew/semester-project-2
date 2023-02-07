import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

const changeAvatarBtn = document.getElementById("changeAvatarBtn");

export function changeAvatar() {}

export async function changeAvatarAPI() {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();
}
