import { baseUrl } from "../api/apiUrls.mjs";
import { fetchOptions } from "../api/fetchOptions.mjs";
import * as storage from "../storage/localStorage.mjs";

const token = storage.get("token");

export function createAuction() {
  const auctionForm = document.getElementById("createAuction");

  auctionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Send end time for auction
    const today = new Date();

    // const bbb = addHours(today, 12);
    // console.log(bbb);

    let endsAt;
    const optionOne = document.getElementById("sixHours");
    const optionTwo = document.getElementById("twelveHours");

    if (optionOne.checked) {
      today.setHours(today.getHours() + 6);
      optionOne.value = today.toISOString();
    } else if (optionTwo.checked) {
      today.setHours(today.getHours() + 12);
      optionTwo.value = today.toISOString();
    }

    console.log(optionOne.value);
    console.log(optionTwo.value);

    const form = event.target;
    const formData = new FormData(form);
    const postContent = Object.fromEntries(formData.entries());

    async function createAuctionAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(postContent);
      console.log(json);
    }
    createAuctionAPI(`${baseUrl}/auction/listings`, postContent);
  });
}
