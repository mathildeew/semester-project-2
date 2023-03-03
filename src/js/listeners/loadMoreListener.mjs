import { loadMore } from "../api/apiCalls/auctions/loadMore.mjs";

export async function loadMoreListener() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.addEventListener("click", () => {
    loadMore();
  });
}
