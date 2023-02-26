// Auth
import { redirect } from "./auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { loginListener } from "./handlers/loginListener.mjs";

//Accounts
import { registerListener } from "./handlers/registerListener.mjs";

// Home
import { headerRandom } from "./components/header.mjs";

import { unauth } from "./path/home/unauth/unauth.mjs";
import { createAuctionListener } from "./handlers/createAuctionListener.mjs";

// Profile
// import { display } from "./path/profile/display.mjs";
import { changeAvatarListener } from "./handlers/changeAvatarListener.mjs";
import { logoutListener } from "./handlers/logoutListener.mjs";

// Auction
import { updateAuctionListener } from "./handlers/updateAuctionListener.mjs";
import { deleteAuctionListener } from "./handlers/deleteAuctionListener.mjs";
import { placeBidListener } from "./handlers/placeBidListener.mjs";
import { frontAnimation } from "./components/logregAnimation.mjs";
import { home } from "./path/home/home.mjs";
import { profile } from "./path/profile/profile.mjs";
import { auction } from "./path/auction/auction.mjs";

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
    profile();
    // displayProfile();
    changeAvatarListener();
    break;

  case "/auction/":
    redirect();
    nav();
    auction();
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
