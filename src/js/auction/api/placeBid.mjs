import { baseUrl } from "../../api/apiUrls.mjs";
import { fetchOptions } from "../../api/fetchOptions.mjs";

// Get ID param to link
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export function placeBid() {
  const bidForm = document.getElementById("makeBid");
  const errorMessage = document.querySelector(".errorMessage");

  bidForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const postContent = {
      amount: parseInt(document.querySelector("input").value),
    };

    bidForm.querySelector("button").innerText = "Please wait...";

    console.log(postContent);

    async function placeBidAPI(url, postContent) {
      const [getData, postData] = fetchOptions;
      postData["body"] = JSON.stringify(postContent);
      const response = await fetch(url, postData);
      const json = await response.json();
      console.log(response);
      console.log(json);

      if (response.ok) {
        window.location.href = `/profile/auction/?id=${id}`;
      } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = json.errors[0].message;
        bidForm.querySelector("button").innerText = "Place bid";
      }
    }
    setTimeout(() => {
      placeBidAPI(`${baseUrl}/auction/listings/${id}/bids`, postContent);
    }, "1000");
  });
}
