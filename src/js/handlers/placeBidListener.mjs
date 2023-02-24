import { baseUrl } from "../api/apiUrls.mjs";
import { post } from "../api/apiCalls/post.mjs";
import { getParams } from "../globals/params.mjs";

export function placeBidListener() {
  const bidForm = document.getElementById("makeBid");
  const errorMessage = document.querySelector(".errorMessage");

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    bidForm.querySelector("button").innerText = "Please wait...";

    const postContent = {
      amount: parseInt(document.querySelector("input").value),
    };

    // Get ID param to link
    const id = getParams("id");
    const response = await post(
      `${baseUrl}/auction/listings/${id}/bids`,
      postContent
    );

    console.log(response);

    response.id
      ? window.location.reload()
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText =
        "Your bid must be higher then current highest bid"),
      (bidForm.querySelector("button").innerText = "Place bid");
  });
}
