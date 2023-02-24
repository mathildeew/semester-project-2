import { fetchOptions } from "../fetchOptions.mjs";

export async function deleteAPI(url) {
  const [getData, postData, putData, deleteData] = fetchOptions;
  const response = await fetch(url, deleteData);

  return response;
}
