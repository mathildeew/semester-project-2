export function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

export function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "initial";
}
