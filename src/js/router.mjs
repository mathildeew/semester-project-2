// Auth
import { redirect } from "./auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { logout } from "./auth/logout.mjs";
import { loginListener } from "./handlers/loginListener.mjs";

//Accounts
import { register } from "./auth/register/register.mjs";

// Home
import { headerAnimation } from "./home/header.mjs";
import { unauth } from "./home/unauth/unauth.mjs";
import { getAuctions } from "./home/auctions/get.mjs";

// Profile
import { changeAvatar } from "./profile/api/change.mjs";
import { getAuction } from "./auction/api/get.mjs";
import { getProfileAPI } from "./profile/api/get.mjs";
import { createAuction } from "./home/auctions/create.mjs";
import { placeBid } from "./auction/api/placeBid.mjs";

// Auction
import { deleteAuction } from "./auction/api/delete.mjs";
import { updateAuction } from "./auction/api/update.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    nav();
    unauth();
    setTimeout(() => {
      getAuctions();
    }, "1000");
    headerAnimation();
    createAuction();
    break;

  case "/profile/":
    redirect();
    nav();
    logout();
    changeAvatar();
    getProfileAPI();
    break;

  case "/profile/auction/":
    redirect();
    nav();
    getAuction();
    placeBid();
    deleteAuction();
    updateAuction();
    break;

  case "/accounts/login/":
    loginListener();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
