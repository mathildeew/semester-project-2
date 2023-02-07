import * as apiUrl from "./api/apiUrls.mjs";

// Home
import { newAuctionModal } from "./home/newAuctionModal.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { register } from "./accounts/register.mjs";
import { login } from "./accounts/login.mjs";
// import { auctionsBidsModal } from "./profile/auctionsBidsModal.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    newAuctionModal();
    getAuctions(apiUrl.allAuctions);
    break;

  //   case "/profile/":
  //     auctionsBidsModal();
  //     break;

  case "/profile/auction/":
    break;

  case "/accounts/login/":
    login();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
