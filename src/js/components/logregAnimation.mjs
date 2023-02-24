import { getRandom } from "./header.mjs";

setInterval(frontAnimation, 1500);
export function frontAnimation() {
  const animationContainer = document.getElementById("logRegAnim");
  const text = document.getElementById("animText");

  const random = getRandom();

  animationContainer.style.backgroundImage = `url(${random.image})`;
  text.innerHTML = random.text;
}
