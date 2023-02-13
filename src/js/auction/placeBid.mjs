import { fetchOptions } from "../api/fetchOptions.mjs";

export async function placeBid() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(url, postData);
  const json = await response.json();
  console.log(json);
}
