import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import * as storage from "../../storage/localStorage.mjs";

// Get params to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const userName = storage.get("name");

export function deleteAuction() {
  const deleteBtn = document.getElementById("deleteBtn");

  deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    async function deleteAPI(url) {
      const [getData, postData, putData, deleteData] = fetchOptions;
      const response = await fetch(url, deleteData);
      window.location.href = `/profile/?name=${userName}`;
    }
    deleteAPI(`${baseUrl}/auction/listings/${id}`);
  });
}
