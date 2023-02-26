import { baseUrl } from "../../api/apiUrls.mjs";
import { get } from "../../api/apiCalls/get.mjs";
import { display } from "./display.mjs";
import { filter } from "./filter.mjs";
import { search } from "./search.mjs";

export async function home() {
  const auctions = await get(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true`
  );

  setTimeout(() => {
    display(auctions);
  }, "1000");

  //   filter(auctions);
  //   search(auctions);
}
