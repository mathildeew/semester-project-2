import { fetchOptions } from "../../fetchOptions.mjs";

/**
 * Sends a PUT request to the API server
 * @param {url} url The API url t
 * @param {object} putContent The request body
 * @returns The response from the request
 * @example
 * ```
 * // Sends a PUT request with the updated auctions content
 * // Auction is reloaded if successfull
 * // Error messages is showed if not succesfull
 *    const response = await updateAuction(`${baseUrl}/auction/listings/${id}`, putContent);
 * ````
 */
export async function updateAuction(url, putContent) {
  const [getData, postData, putData] = fetchOptions;
  putData["body"] = JSON.stringify(putContent);

  const response = await fetch(url, putData);
  const json = await response.json();

  console.log(json);

  if (response.ok) {
    window.location.reload();
  }

  if (json.errors) {
    const updateBtn = document.getElementById("updateAuctionBtn");
    const errorMessage = document.createElement("p");
    errorMessage.className = "text-danger col-10 mt-3";
    errorMessage.innerHTML = `${json.errors[0].message}`;
    updateAuctionForm.append(errorMessage);
    updateBtn.innerText = "Update";
  }
}
