import { baseUrl } from "../../api/apiUrls.mjs";
import { display } from "../../render/renderAuctions.mjs";
import { filter } from "../../func/filter.mjs";
import { search } from "../../func/search.mjs";
import { nav } from "../../components/nav.mjs";
import { header } from "../../render/header.mjs";
import { unauth } from "../../auth/unauthHome.mjs";
import { getAll } from "../../api/apiCalls/auctions/get.mjs";
import { loadMoreListener } from "../../listeners/loadMoreListener.mjs";

export async function home() {
  nav();
  header();
  unauth();
  search();

  let auctions = await getAll(
    `${baseUrl}/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true&limit=6`
  );
  display(auctions);

  loadMoreListener();
  search(auctions);
}
