import { baseUrl } from "../api/apiUrls.mjs";
import { getParams } from "../func/params.mjs";
import { deleteAPI } from "../api/apiCalls/auctions/delete.mjs";

export async function deleteAuction() {
  const deleteBtn = document.getElementById("deleteBtn");

  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const id = getParams("id");
    await deleteAPI(`${baseUrl}/auction/listings/${id}`);
  });
}
