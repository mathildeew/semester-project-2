import { baseUrl } from "../apiUrls.mjs";
import { fetchOptions } from "../fetchOptions.mjs";

export async function getAuctions() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true`,
    getData
  );
  const json = await response.json();

  return json;
}
