import * as apiUrl from "./api/apiUrls.mjs";

//UI
import { nav } from "./components/nav.mjs";
import { logout } from "./ui/nav.mjs";
import { auth } from "./ui/auth.mjs";
import { redirect } from "./ui/unauth/redirect.mjs";

//Accounts
import { register } from "./accounts/register.mjs";
import { login } from "./accounts/login.mjs";

// Home
import { openModal } from "./ui/modal.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { changeAvatar } from "./profile/changeAvatar.mjs";
import { getAuction } from "./auction/get.mjs";
import { getProfileAPI } from "./profile/get.mjs";
import { openUnauthModal } from "./home/unauth.mjs";
import { createAuction } from "./home/create.mjs";
import { placeBid } from "./auction/placeBid.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    nav();
    auth();
    logout();
    openModal();
    getAuctions();
    openUnauthModal();
    createAuction();
    break;

  case "/profile/":
    nav();
    auth();
    logout();
    redirect();
    openModal();
    changeAvatar();
    getProfileAPI();
    break;

  case "/profile/auction/":
    nav();
    auth();
    logout();
    redirect();
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
