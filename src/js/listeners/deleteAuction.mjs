import { baseUrl } from "../api/apiUrls.mjs";
import { deleteAPI } from "../api/apiCalls/delete.mjs";
import { getParams } from "../globals/params.mjs";
import * as storage from "../storage/localStorage.mjs";

const deleteBtn = document.getElementById("deleteBtn");
const userName = storage.get("name");
const errorMessage = document.querySelector("deleteMessage");

export function deleteAuction() {
  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    // Get params to link
    const id = getParams("id");
    const response = await deleteAPI(`${baseUrl}/auction/listings/${id}`);

    console.log(response);
    response.ok
      ? (window.location.href = `/profile/?name=${userName}`)
      : (errorMessage.innerText = "Something went wrong! Try again later.");
  });
}
