import { baseUrl } from "../api/apiUrls.mjs";
import { put } from "../api/apiCalls/put.mjs";
import { getParams } from "../globals/params.mjs";

export function updateAuction() {
  const updateAuctionForm = document.getElementById("updateAuctionForm");
  const updateBtn = document.getElementById("updateAuctionBtn");
  const errorMessage = document.querySelector(".errorMessage");

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

    // Get params to link
    const id = getParams("id");
    const response = await put(`${baseUrl}/auction/listings/${id}`, putContent);

    response.id ? window.location.reload() : window.location.reload,
      (errorMessage.style.display = "block"),
      (errorMessage.innerText = "Something went wrong. Please try again later"),
      (updateBtn.innerText = "Update");
  });
}
