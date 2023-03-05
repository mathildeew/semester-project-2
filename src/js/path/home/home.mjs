import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";
import { filter } from "../../func/filter.mjs";
import { search } from "../../func/search.mjs";
import { nav } from "../../components/nav.mjs";
import { unauth } from "../../auth/unauthHome.mjs";
import { getAll } from "../../api/apiCalls/auctions/get.mjs";
import { loadMoreListener } from "../../listeners/loadMoreListener.mjs";
import { header } from "../../components/header.mjs";

export async function home() {
  nav();
  header();
  unauth();

  let limit = 6;
  const auctions = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=${limit}`
  );

  display(auctions);
  loadMoreListener();
  search();
  filter();
}
