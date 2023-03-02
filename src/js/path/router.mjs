// Auth
import { redirect } from "../auth/redirect.mjs";
import { nav } from "../components/nav.mjs";
import { loginListener } from "../handlers/loginListener.mjs";

//Accounts
import { registerListener } from "../handlers/registerListener.mjs";

// Home

// Auction
import { updateAuctionListener } from "../handlers/updateAuctionListener.mjs";
import { deleteAuctionListener } from "../handlers/deleteAuctionListener.mjs";
import { placeBidListener } from "../handlers/placeBidListener.mjs";
import { frontAnimation } from "../components/logregAnimation.mjs";
import { home } from "./home/home.mjs";
import { profile } from "./profile/profile.mjs";
import { auction } from "./auction/auction.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/" || "/semester-project-2/":
    home();
    break;

  case "/profile/":
    redirect();
    nav();
    profile();
    break;

  case "/auction/":
    redirect();
    // nav();
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
