import { display } from "../../../render/renderAuctions.mjs";
import { errorMessage } from "../../../templates/errorMessage.mjs";
import { baseUrl } from "../../apiUrls.mjs";

let limit = 6;
let offset = 6;

export async function loadMore() {
  const link = `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}&offset=${offset}`;
  const response = await fetch(link);
  const json = await response.json();
  offset = offset + limit;
  if (response.ok) {
    display(json);
  } else {
    const main = document.querySelector("main");
    const errorMessageContent = errorMessage();
    main.innerHTML = errorMessageContent;
  }
}
