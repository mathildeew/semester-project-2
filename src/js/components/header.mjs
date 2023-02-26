export function getRandom() {
  const headerContent = [
    {
      image: "../../../assets/animationHeader/headerCatBorder.png",
      text: "cat?",
    },
    {
      image: "../../../assets/animationHeader/headerBooksBorder.png",
      text: "books?",
    },
    {
      image: "../../../assets/animationHeader/headerJacketBorder.png",
      text: "jacket?",
    },

    {
      image: "../../../assets/animationHeader/headerShoeBorder.png",
      text: "shoes?",
    },
    {
      image: "../../../assets/animationHeader/headerArtBorder.png",
      text: "art?",
    },
  ];

  const randomIndex = Math.floor(Math.random() * headerContent.length);
  const randomContent = headerContent[randomIndex];
  return randomContent;
}

export function headerRandom() {
  const header = document.querySelector("header");
  const headerText = document.getElementById("headerOutline");
  const randomContent = getRandom();

  header.style.backgroundImage = `url(${randomContent.image})`;
  headerText.innerHTML = randomContent.text;
}
