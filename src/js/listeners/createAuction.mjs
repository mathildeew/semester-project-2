import { baseUrl } from "../api/apiUrls.mjs";
import { post } from "../api/apiCalls/post.mjs";

export function createAuction() {
  const auctionForm = document.getElementById("createAuction");
  const errorMessage = auctionForm.querySelector(".errorMessage");

  auctionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    auctionForm.querySelector("button").innerText = "Creating auction...";
    const title = document.getElementById("auctionTitle");
    const description = document.getElementById("auctionDesc");

    const mediaOne = document.getElementById("mediaOne");
    const mediaTwo = document.getElementById("mediaTwo");
    const mediaThree = document.getElementById("mediaThree");

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
      media: medias,
      endsAt: `${optionValue}`,
    };

    console.log(typeof postContent);

    const response = await post(`${baseUrl}/auction/listings`, postContent);

    console.log(response);

    // response.id
    //   ? window.location.reload()
    //   : (errorMessage.style.display = "block"),
    //   console.log(response);
    // errorMessage.innerText = "Something went wrong! Please try again later";
    // auctionForm.querySelector("button").innerText = "Create auction";
  });
}
