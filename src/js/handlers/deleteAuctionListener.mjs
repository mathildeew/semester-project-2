import { deleteAuction } from "../api/auction/delete.mjs";
import * as storage from "../storage/localStorage.mjs";

const deleteBtn = document.getElementById("deleteBtn");
const userName = storage.get("name");
const errorMessage = document.querySelector("deleteMessage");

export function deleteAuctionListener() {
  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const response = await deleteAuction();

    response.ok
      ? (window.location.href = `/profile/?name=${userName}`)
      : (errorMessage.innerText = "Something went wrong! Try again later.");
  });
}
