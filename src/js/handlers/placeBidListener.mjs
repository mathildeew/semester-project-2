import { placeBid } from "../api/auction/placeBid.mjs";

export function placeBidListener() {
  const bidForm = document.getElementById("makeBid");
  const errorMessage = document.querySelector(".errorMessage");

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    bidForm.querySelector("button").innerText = "Please wait...";

    const postContent = {
      amount: parseInt(document.querySelector("input").value),
    };

    const response = await placeBid(postContent);

    response.ok
      ? window.location.reload()
      : (errorMessage.style.display = "block"),
      (errorMessage.innerText =
        "Your bid must be higher then current highest bid"),
      (bidForm.querySelector("button").innerText = "Place bid");
  });
}
