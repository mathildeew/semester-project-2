import { calcEndTime } from "../func/timers/timer.mjs";
import { profileBids } from "../templates/profileBids.mjs";

export async function renderProfileBids(bidsUnSort) {
  for (let i = 0; i < bidsUnSort.length; i++) {
    const bids = bidsUnSort.sort((a, b) => {
      return new Date(b.listing.endsAt) - new Date(a.listing.endsAt);
    });

    const id = bids[i].listing.id;
    const link = `/auction/?id=${id}`;
    const title = bids[i].listing.title;
    const yourBid = bids[i].amount;
    let image;

    if (bids[i].listing.media.length === 0) {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    } else {
      image = bids[i].listing.media[0];
    }

    const ends = bids[i].listing.endsAt;
    const timer = calcEndTime(ends);

    const bidsContainer = document.getElementById("bidsProfile");
    const bidCard = profileBids(link, image, title, timer, yourBid);
    bidsContainer.append(bidCard);
  }
}
