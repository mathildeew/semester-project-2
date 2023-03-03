import { calcEndTime } from "../func/timers/timer.mjs";
import { auctionsTemplate } from "../templates/auctionsTemplate.mjs";

export function display(auctions) {
  const auctionsContainer = document.getElementById("auctions");

  for (let i = 0; i < auctions.length; i++) {
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

    const auctionCard = auctionsTemplate(
      link,
      image,
      title,
      timer,
      seller,
      highestBids
    );

    auctionsContainer.append(auctionCard);
  }
}
