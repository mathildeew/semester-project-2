// Auth
import { redirect } from "./api/auth/redirect.mjs";
import { nav } from "./components/nav.mjs";
import { logout } from "./api/auth/logout.mjs";
import { loginListener } from "./handlers/loginListener.mjs";

//Accounts
import { registerListener } from "./handlers/registerListener.mjs";

// Home
import { unauth } from "./home/unauth/unauth.mjs";
import { displayAuctions } from "./home/display.mjs";

// Profile
import { getAuction } from "./auction/api/get.mjs";
import { createAuction } from "./home/auctions/create.mjs";
import { placeBid } from "./auction/api/placeBid.mjs";

// Auction
import { deleteAuction } from "./auction/api/delete.mjs";
import { updateAuction } from "./auction/api/update.mjs";
import { displayProfile } from "./profile/display.mjs";
import { changeAvatarListener } from "./handlers/changeAvatarListener.mjs";

// Run function based on pathname
const path = location.pathname;

switch (path) {
  case "/":
    nav();
    unauth();
    setTimeout(() => {
      displayAuctions();
    }, "1000");
    createAuction();
    break;

  case "/profile/":
    redirect();
    nav();
    logout();
    displayProfile();
    changeAvatarListener();
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

  case "/accounts/register/":
    registerListener();
    break;
}
