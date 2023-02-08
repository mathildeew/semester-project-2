import * as apiUrl from "./api/apiUrls.mjs";

//UI
import { logout } from "./ui/nav.mjs";
import { auth } from "./ui/auth.mjs";
import { redirect } from "./ui/unauth/redirect.mjs";

// Home
import { openModal } from "./ui/modal.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { register } from "./accounts/register.mjs";
import { login } from "./accounts/login.mjs";
import { changeAvatar } from "./profile/changeAvatar.mjs";
import { getAuction } from "./auction/get.mjs";
import { getProfileAPI } from "./profile/get.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    auth();
    logout();
    openModal();
    getAuctions();
    break;

  case "/profile/":
    openModal();
    changeAvatar();
    logout();
    redirect();
    getProfileAPI();
    break;

  case "/profile/auction/":
    logout();
    redirect();
    getAuction();
    break;

  case "/accounts/login/":
    login();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
