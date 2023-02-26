import { display } from "./display.mjs";

export function search(auctions) {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", (event) => {
    const filter = event.target.value.trim().toLowerCase();

    const filteredAuctions = auctions.filter(function (auction) {
      if (auction.title.toLowerCase().includes(filter)) {
        return true;
      }
    });
    display(filteredAuctions);
  });
}
