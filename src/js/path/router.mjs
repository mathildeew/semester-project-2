// Global
import { nav } from "../components/nav.mjs";
import { redirect } from "../auth/redirect.mjs";
import { createAuction } from "../listeners/createAuction.mjs";

// Paths
import { login } from "../listeners/login.mjs";
import { register } from "../listeners/register.mjs";
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
    createAuction();
    break;

  case "/profile/":
    redirect();
    nav();
    profile();
    createAuction();
    break;

  case "/auction/":
    redirect();
    nav();
    auction();
    createAuction();
    break;

  case "/accounts/login/":
    login();
    setInterval(frontAnimation, 1500);
    break;

  case "/accounts/register/":
    register();
    setInterval(frontAnimation, 1500);
    break;
}
