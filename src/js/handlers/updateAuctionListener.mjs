import { updateAuction } from "../api/auction/update.mjs";

export function updateAuctionListener() {
  const updateAuctionForm = document.getElementById("updateAuctionForm");

  updateAuctionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

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

    const response = await updateAuction(putContent);

    response.ok ? window.location.reload() : window.location.reload;
  });
}
