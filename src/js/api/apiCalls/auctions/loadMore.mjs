import { display } from "../../../render/renderAuctions.mjs";
import { baseUrl } from "../../apiUrls.mjs";

export async function loadMore() {
  let moreItems = 0;
  let increment = 6;

  const link = `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${increment}&offset=${moreItems}`;
  const response = await fetch(link);
  const json = await response.json();
  moreItems = moreItems + increment;
  console.log(json);
  display(json);
}
