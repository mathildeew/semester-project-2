import { fetchOptions } from "../fetchOptions.mjs";

export async function post(url, postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(url, postData);
  const json = await response.json();

  return response.ok === true ? json : false;
}
