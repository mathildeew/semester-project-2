import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";

export function createAuction() {
  const auctionForm = document.getElementById("createAuction");

  auctionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("auctionTitle");
    const description = document.getElementById("auctionDesc");
    const mediaOne = document.getElementById("mediaOne");
    const mediaTwo = document.getElementById("mediaTwo");
    const mediaThree = document.getElementById("mediaThree");
    const media = [{ mediaOne }, { mediaTwo }, { mediaThree }];
    // Send empty string if no images

    // Set end time for auction
    const today = new Date();
    let optionValue;
    const optionOne = document.getElementById("optionOne");
    const optionTwo = document.getElementById("optionTwo");

    if (optionOne.checked) {
      today.setHours(today.getHours() + 6);
      optionValue = today.toISOString();
    } else if (optionTwo.checked) {
      today.setHours(today.getHours() + 12);
      optionValue = today.toISOString();
    }

    const postContent = {
      title: title.value,
      description: description.value,
      media: [mediaOne.value, mediaTwo.value, mediaThree.value],
      endsAt: `${optionValue}`,
    };

    async function createAuctionAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(json);
      console.log(postContent);
    }
    createAuctionAPI(`${baseUrl}/auction/listings`, postContent);
  });
}
