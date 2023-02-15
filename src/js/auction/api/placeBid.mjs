import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";

// Get ID param to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export function placeBid() {
  const bidForm = document.getElementById("makeBid");

  bidForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // const form = event.target;
    // const formData = new FormData(form);
    // const postContent = Object.fromEntries(formData.entries());

    const postContent = {
      amount: parseInt(document.querySelector("input").value),
    };

    console.log(postContent);

    async function placeBidAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(response);
      console.log(json);
    }
    placeBidAPI(`${baseUrl}/auction/listings/${id}/bids`, postContent);
  });
}
