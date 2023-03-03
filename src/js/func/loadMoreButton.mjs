export function hideLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.style.display = "none";
}

export function showLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.style.display = "initial";
}
