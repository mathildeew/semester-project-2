import { displayAuctions } from "./display.mjs";

export function filter(auctions) {
  const popularFilter = document.querySelector("#filterOne");
  const endedFilter = document.querySelector("#filterTwo");
  const noTestFilter = document.querySelector("#filterThree");

  //Filter by popularity
  popularFilter.addEventListener("click", () => {
    const mostPopular = auctions.sort(function (a, b) {
      return b._count.bids - a._count.bids;
    });
    displayAuctions(mostPopular);
  });

  //Filter no test
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

  endedFilter.addEventListener("click", (event) => {
    const today = new Date().getTime();
    const onGoing = auctions.filter((auction) => {
      if (new Date(auction.endsAt).getTime() > today) {
        return true;
      }
    });
    displayAuctions(onGoing);
  });
}
