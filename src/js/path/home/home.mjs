import { baseUrl } from "../../api/apiUrls.mjs";
import { get } from "../../api/apiCalls/get.mjs";
import { display } from "./display.mjs";
import { filter } from "./filter.mjs";
import { search } from "./search.mjs";
import * as storage from "../../storage/localStorage.mjs";

export async function home() {
  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true`
  );

  setTimeout(() => {
    display(auctions);
  }, "1000");

  search(auctions);

  const token = storage.get("token");
  const filterContainer = document.getElementById("filter");

  token ? filter(auctions) : (filterContainer.style.display = "none");
}
