// Home
import { newAuctionModal } from "./home/newAuctionModal.mjs";

// Profile
import { auctionsBidsModal } from "./profile/auctionsBidsModal.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    newAuctionModal();
    break;

  case "/profile/":
    auctionsBidsModal();
    break;

  case "/profile/auction/":
    break;

  case "/accounts/login/":
    break;

  case "/accounts/emailsignup/":
    break;
}
