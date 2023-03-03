import { loadMore } from "../api/apiCalls/auctions/loadMore.mjs";
import * as loader from "../components/loader.mjs";

export async function loadMoreListener() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.addEventListener("click", () => {
    loadMore();
  });
}
