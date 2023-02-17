import { displayAuctions } from "./display.mjs";

export function filter(auctions) {
  console.log(auctions);
  const popularFilter = document.querySelector("#filterOne");
  const noTestFilter = document.querySelector("#filterTwo");
  const endedFilter = document.querySelector("#filterThree");

  //Filter by popularity
  noTestFilter.addEventListener("click", (event) => {
    const filter = "test";

    const auctionWithoutTest = auctions.filter((auction) => {
      if (auction.title.toLowerCase().includes(filter)) {
        return false;
      } else {
        return true;
      }
    });
    displayAuctions(auctionWithoutTest);
  });
}
