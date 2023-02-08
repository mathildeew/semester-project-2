import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import { displayAuction } from "./display.mjs";

export async function getAuction() {
  const [getData, postData] = fetchOptions;
  const response = await fetch(
    `${baseUrl}/auction/listings/672b1f78-375e-4b49-b5de-9ab906e8872a?_seller=true&_bids=true`,
    getData
  );
  const json = await response.json();

  displayAuction(json);
}

getAuction();
