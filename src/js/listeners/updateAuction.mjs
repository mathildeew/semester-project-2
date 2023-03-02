import { baseUrl } from "../api/apiUrls.mjs";
import { put } from "../api/apiCalls/put.mjs";
import { getParams } from "../func/params.mjs";
import { updateAuction } from "../api/apiCalls/auctions/update.mjs";

export function updateAuctionListener() {
  const updateAuctionForm = document.getElementById("updateAuctionForm");
  const updateBtn = document.getElementById("updateAuctionBtn");

  updateAuctionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    updateBtn.innerText = "Please wait...";

    const title = document.getElementById("newTitle");
    const description = document.getElementById("newAuctionDesc");

    const mediaOne = document.getElementById("newMediaOne");
    const mediaTwo = document.getElementById("newMediaTwo");
    const mediaThree = document.getElementById("newMediaThree");

    // Add images to media object
    let medias = [];

    if (mediaOne.value !== "") {
      medias.push(mediaOne.value);
    }
    if (mediaTwo.value !== "") {
      medias.push(mediaTwo.value);
    }
    if (mediaThree.value !== "") {
      medias.push(mediaThree.value);
    }
    const putContent = {
      title: title.value,
      description: description.value,
      media: medias,
    };

    const id = getParams("id");
    const response = await updateAuction(
      `${baseUrl}/auction/listings/${id}`,
      putContent
    );

    if (response.errors) {
      const errorMessage = document.createElement("p");
      errorMessage.className = "text-danger col-10 mt-3";
      errorMessage.innerHTML = `${response.errors[0].message}`;
      updateAuctionForm.append(errorMessage);
      updateBtn.innerText = "Update";
    }
  });
}
