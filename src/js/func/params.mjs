export function getParams(urlParam) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);

  const value = params.get(urlParam);

  return value;
}
