import { calcEndTime } from "../func/timers/timer.mjs";
import { auction } from "../path/auction/auction.mjs";
import * as storage from "../storage/localStorage.mjs";
import { auctionsTemplate } from "../templates/auctionsTemplate.mjs";
const token = storage.get("token");

let pageIndex = 0;
let limit = 12;

export function display(auctions) {
  const auctionsContainer = document.getElementById("auctions");
  auctionsContainer.innerHTML = "";

  for (let i = pageIndex * limit; i < pageIndex * limit + limit; i++) {
    const id = auctions[i].id;
    const link = `/auction/?id=${id}`;
    const title = auctions[i].title;
    let image = auctions[i].media[0];
    const seller = auctions[i].seller.name;
    const bids = auctions[i].bids;

    if (image === undefined || image === "") {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    }

    const ends = auctions[i].endsAt;
    let timer = calcEndTime(ends);

    let highestBids;
    if (bids.length === 0) {
      highestBids = "No bids";
    } else {
      highestBids = `Highest bid: $${bids[bids.length - 1].amount}`;
    }

    if (!auctions[i]) {
      break;
    }
    const auctionCard = auctionsTemplate(
      link,
      image,
      title,
      timer,
      seller,
      highestBids
    );

    auctionsContainer.append(auctionCard);
    loadNav(auctions);
  }

  function loadNav(auctions) {
    const loadNav = document.getElementById("pagesNav");

    loadNav.innerHTML = "";

    for (let i = 0; i < auctions.length / limit; i++) {
      const loadButton = document.createElement("div");
      loadButton.className =
        "loadButtons d-flex align-items-center justify-content-center rounded-circle border border-2 border-secondary";
      loadButton.innerHTML = `<p class="fs-5 text-secondary mb-0">${i + 1}</p>`;
      loadButton.addEventListener("click", (e) => {
        pageIndex = e.target.innerHTML - 1;
        display(auctions);
      });
      loadNav.append(loadButton);
    }
  }
}
