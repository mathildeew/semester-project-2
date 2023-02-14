import * as storage from "../storage/localStorage.mjs";

const name = storage.get("name");

export function nav() {
  const navCollapse = document.getElementById("navbarCollapse");
  navCollapse.querySelector("a:nth-child(1)").href = `/profile/?name=${name}`;
}
