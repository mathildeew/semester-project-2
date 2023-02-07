import * as apiUrl from "./api/apiUrls.mjs";

//UI
import { logout } from "./ui/nav.mjs";
import { authorizedVisibility } from "./ui/auth.mjs";

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
    logout();
    newAuctionModal();
    getAuctions(apiUrl.allAuctions);
    authorizedVisibility();
    break;

  //   case "/profile/":
  //     auctionsBidsModal();
  // logout();
  //     break;

  case "/profile/auction/":
    logout();

    break;

  case "/accounts/login/":
    login();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
