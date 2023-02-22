import { fetchOptions } from "../fetchOptions.mjs";

export async function put(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);
  const response = await fetch(url, putData);
  const json = await response.json();

  return json;
}
