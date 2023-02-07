import * as apiUrl from "./api/apiUrls.mjs";

//UI
import { logout } from "./ui/nav.mjs";
import { auth } from "./ui/auth.mjs";
import { redirect } from "./ui/unauth/redirect.mjs";

// Home
import { newAuctionModal } from "./home/newAuctionModal.mjs";
import { getAuctions } from "./home/getAuctions.mjs";

// Profile
import { register } from "./accounts/register.mjs";
import { login } from "./accounts/login.mjs";
import { changeAvatarModal } from "./profile/changeAvatarModal.mjs";
// import { changeAvatar } from "./profile/avatar.mjs";

import { auctionsBidsModal } from "./profile/auctionsBidsModal.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    auth();
    logout();
    newAuctionModal();
    getAuctions();
    break;

  case "/profile/":
    auctionsBidsModal();
    logout();
    redirect();
    changeAvatarModal();
    // changeAvatar();

    break;

  case "/profile/auction/":
    logout();
    redirect();

    break;

  case "/accounts/login/":
    login();
    break;

  case "/accounts/emailsignup/":
    register();
    break;
}
