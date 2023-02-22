import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";

export async function createAuction(postContent) {
  const [getData, postData] = fetchOptions;
  postData["body"] = JSON.stringify(postContent);
  const response = await fetch(`${baseUrl}/auction/listings`, postData);
  const json = await response.json();
  console.log(json);

  return json;
}
