import * as storage from "./localStorage.mjs";

export function setStorage(json) {
  const name = json.name;
  storage.set("name", name);
  const credits = json.credits;
  storage.set("credits", credits);
  const avatar = json.avatar;
  storage.set("avatar", avatar);
  const accessToken = json.accessToken;
  storage.set("token", accessToken);
}
