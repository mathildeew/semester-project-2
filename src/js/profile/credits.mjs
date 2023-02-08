import * as storage from "../storage/localStorage.mjs";

const credits = storage.get("credits");
const creditsContainer = document.getElementById("credits");

export function showCredits() {
  creditsContainer.innerHTML += `Credits: $${credits}`;
}
