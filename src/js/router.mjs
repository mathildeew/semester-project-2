// Auth
import { redirect } from "./auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { logout } from "./auth/logout.mjs";
import { loginListener } from "./handlers/loginListener.mjs";

//Accounts
import { registerListener } from "./handlers/registerListener.mjs";

// Home
import { unauth } from "./home/unauth/unauth.mjs";
import { displayAuctions } from "./home/display.mjs";
import { createAuctionListener } from "./handlers/createAuctionListener.mjs";

// Profile
import { displayProfile } from "./profile/display.mjs";
import { changeAvatarListener } from "./handlers/changeAvatarListener.mjs";

// Auction
import { displayAuction } from "./auction/display.mjs";
import { updateAuctionListener } from "./handlers/updateAuctionListener.mjs";
import { deleteAuctionListener } from "./handlers/deleteAuctionListener.mjs";
import { placeBidListener } from "./handlers/placeBidListener.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    nav();
    unauth();
    setTimeout(() => {
      displayAuctions();
    }, "1000");
    createAuctionListener();
    break;

  case "/profile/":
    redirect();
    nav();
    logout();
    displayProfile();
    changeAvatarListener();
    break;

  case "/auction/":
    redirect();
    nav();
    displayAuction();
    placeBidListener();
    deleteAuctionListener();
    updateAuctionListener();
    break;

  case "/accounts/login/":
    loginListener();
    break;

  case "/accounts/register/":
    registerListener();
    break;
}
