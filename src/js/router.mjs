// Auth
import { redirect } from "./auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { loginListener } from "./handlers/loginListener.mjs";

//Accounts
import { registerListener } from "./handlers/registerListener.mjs";

// Home
import { headerRandom } from "./components/header.mjs";

import { unauth } from "./path/home/unauth/unauth.mjs";
import { display } from "./path/home/display.mjs";
import { createAuctionListener } from "./handlers/createAuctionListener.mjs";

// Profile
import { displayProfile } from "./profile/display.mjs";
import { changeAvatarListener } from "./handlers/changeAvatarListener.mjs";
import { logoutListener } from "./handlers/logoutListener.mjs";

// Auction
import { displayAuction } from "./auction/display.mjs";
import { updateAuctionListener } from "./handlers/updateAuctionListener.mjs";
import { deleteAuctionListener } from "./handlers/deleteAuctionListener.mjs";
import { placeBidListener } from "./handlers/placeBidListener.mjs";
import { frontAnimation } from "./components/logregAnimation.mjs";
import { home } from "./path/home/home.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/" || "/semester-project-2/":
    nav();
    home();
    headerRandom();
    unauth();

    createAuctionListener();
    break;

  case "/profile/":
    redirect();
    nav();
    logoutListener();
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
    setInterval(frontAnimation, 1500);

    break;

  case "/accounts/register/":
    registerListener();
    setInterval(frontAnimation, 1500);
    break;
}
