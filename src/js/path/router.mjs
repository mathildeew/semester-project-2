// Global
import { nav } from "../components/nav.mjs";
import { redirect } from "../auth/redirect.mjs";
import { createAuctionListener } from "../listeners/createAuction.mjs";

// Paths
import { loginListener } from "../listeners/login.mjs";
import { registerListener } from "../listeners/register.mjs";
import { home } from "./home/home.mjs";
import { profile } from "./profile/profile.mjs";
import { auction } from "./auction/auction.mjs";

// Auction
import { frontAnimation } from "../components/logregAnimation.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    home();
    createAuctionListener();
    break;

  // case "/profile/":
  //   redirect();
  //   nav();
  //   profile();
  //   createAuctionListener();
  //   break;

  case "/auction/":
    redirect();
    nav();
    auction();
    createAuctionListener();
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
