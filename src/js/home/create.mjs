import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

const token = storage.get("token");

export function createAuction() {
  const auctionForm = document.getElementById("createAuction");

  auctionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector(".auctionTitle");
    const description = document.querySelector(".auctionDescp");
    const mediaOne = document.querySelector(".mediaOne");
    const mediaTwo = document.querySelector(".mediaTwo");
    const mediaThree = document.querySelector(".mediaThree");

    // Send end time for auction
    const today = new Date();
    let optionValue;
    const optionOne = document.getElementById("sixHours");
    const optionTwo = document.getElementById("twelveHours");

    if (optionOne.checked) {
      today.setHours(today.getHours() + 6);
      optionValue = today.toISOString();
    } else if (optionTwo.checked) {
      today.setHours(today.getHours() + 12);
      optionValue = today.toISOString();
    }

    // const form = event.target;
    // const formData = new FormData(form);
    // const postContent = Object.fromEntries(formData.entries());

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
    }
    createAuctionAPI(`${baseUrl}/auction/listings`, postContent);
  });
}
