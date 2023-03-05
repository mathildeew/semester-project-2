import { baseUrl } from "../api/apiUrls.mjs";
import { getParams } from "../func/params.mjs";
import { placeBid } from "../api/apiCalls/auctions/placeBid.mjs";

export function placeBidListener() {
  const bidForm = document.getElementById("makeBid");

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    bidForm.querySelector("button").innerText = "Please wait...";

    const postContent = {
      amount: parseInt(document.querySelector("#makeBidModal input").value),
    };

    const id = getParams("id");
    await placeBid(`${baseUrl}/auction/listings/${id}/bids`, postContent);
  });
}
