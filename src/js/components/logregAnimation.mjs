import { getRandom } from "./header.mjs";

export function frontAnimation() {
  const animationContainer = document.getElementById("logRegAnim");
  const text = document.getElementById("animText");
  const image = document.getElementById("animImg");

  const random = getRandom();

  // animationContainer.style.backgroundImage = `url(${random.image})`;
  image.src = random.image;
  text.innerHTML = random.text;
}
