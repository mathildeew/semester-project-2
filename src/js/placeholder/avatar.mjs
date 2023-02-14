import * as storage from "../storage/localStorage.mjs";

let avatar = storage.get("avatar");

export function placeholderAvatar() {
  if (avatar === null) {
    avatar = "../../../assets/placeholder/";
  }
}
