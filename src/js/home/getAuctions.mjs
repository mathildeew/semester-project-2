import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayAuctions } from "./display.mjs";
import { search } from "./search.mjs";

export async function getAuctions() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(`${baseUrl}/auction/listings`, getData);
  const json = await response.json();
  displayAuctions(json);
  search(json);
  console.log(json);
}
