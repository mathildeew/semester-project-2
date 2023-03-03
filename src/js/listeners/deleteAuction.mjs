import { baseUrl } from "../api/apiUrls.mjs";
import { deleteAPI } from "../api/apiCalls/auctions/delete.mjs";
import { getParams } from "../func/params.mjs";

export async function deleteAuction() {
  const deleteBtn = document.getElementById("deleteBtn");
  const errorMessage = document.querySelector("deleteMessage");

  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const id = getParams("id");
    const response = await deleteAPI(`${baseUrl}/auction/listings/${id}`);

    if (response.errors) {
      errorMessage.innerText = "Something went wrong! Try again later.";
    }
  });
}
