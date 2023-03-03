import { calcEndTime } from "../func/timers/timer.mjs";
import { profileAuctions } from "../templates/profileAuctionsTemplate.mjs";

export function renderProfileAuctions(auctions) {
  for (let i = 0; i < auctions.length; i++) {
    const title = auctions[i].title;
    const id = auctions[i].id;
    const link = `/auction/?id=${id}`;
    let image;

    if (auctions[i].media.length === 0) {
      image = "../../../assets/placeholder/placeholder_Gavel.png";
    } else {
      image = auctions[i].media[0];
    }

    const ends = auctions[i].endsAt;
    const timer = calcEndTime(ends);

    const auctionsContainer = document.getElementById("auctionsProfile");
    const auctionCard = profileAuctions(link, image, title, timer);
    auctionsContainer.append(auctionCard);
  }
}
