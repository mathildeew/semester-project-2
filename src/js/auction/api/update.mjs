import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";
import * as storage from "../../storage/localStorage.mjs";

// Get params to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export function updateAuction() {
  const updateAuctionForm = document.getElementById("updateAuctionForm");

  updateAuctionForm.addEventListener("submit", (event) => {
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

    async function updateAuctionAPI(url, putContent) {
      const [getData, postData, putData] = fetchOptions;
      putData["body"] = JSON.stringify(putContent);
      const response = await fetch(url, putData);
      const json = await response.json();
      console.log(json);
      //   window.location.reload;
    }
    updateAuctionAPI(`${baseUrl}/auction/listings/${id}`, putContent);
  });
}
