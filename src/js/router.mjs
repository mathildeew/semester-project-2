// Auth
import { redirect } from "./auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { logout } from "./auth/logout.mjs";

//Accounts
import { register } from "./auth/register/register.mjs";
import { login } from "./auth/login/login.mjs";

// Home
import { unauth } from "./home/unauth/unauth.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { changeAvatar } from "./profile/changeAvatar.mjs";
import { getAuction } from "./auction/get.mjs";
import { getProfileAPI } from "./profile/get.mjs";
import { createAuction } from "./home/create.mjs";
import { placeBid } from "./auction/placeBid.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    nav();
    unauth();
    logout();
    getAuctions();
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
