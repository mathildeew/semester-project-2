//UI
import { redirect } from "./ui/auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { logout } from "./ui/logout.mjs";
import { auth } from "./ui/auth/auth.mjs";

//Accounts
import { register } from "./auth/register/register.mjs";
import { login } from "./auth/login/login.mjs";

// Home
import { openNewAuctionModal } from "./home/newAuctionModal.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { changeAvatar } from "./profile/changeAvatar.mjs";
import { getAuction } from "./auction/get.mjs";
import { getProfileAPI } from "./profile/get.mjs";
import { openUnauthModal } from "./home/unauthModal.mjs";
import { createAuction } from "./home/create.mjs";
import { placeBid } from "./auction/placeBid.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    auth();
    nav();
    logout();
    openNewAuctionModal();
    getAuctions();
    openUnauthModal();
    createAuction();
    break;

  case "/profile/":
    redirect();
    nav();
    auth();
    logout();
    changeAvatar();
    getProfileAPI();
    break;

  case "/profile/auction/":
    redirect();
    nav();
    auth();
    logout();
    getAuction();
    placeBid();
    break;

  case "/accounts/login/":
    login();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
