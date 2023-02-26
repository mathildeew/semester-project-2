export function getRandom() {
  const headerContent = [
    {
      image: "../../../assets/animationHeader/headerCatBorder.png",
      text: "cat?",
      alt: "Grey cat profile view",
    },
    {
      image: "../../../assets/animationHeader/headerBooksBorder.png",
      text: "books?",
      alt: "Stable of books",
    },
    {
      image: "../../../assets/animationHeader/headerJacketBorder.png",
      text: "jacket?",
      alt: "Jacket on coat hanger held by hand ",
    },

    {
      image: "../../../assets/animationHeader/headerShoeBorder.png",
      text: "shoes?",
      alt: "Shoe dropped from hand",
    },
    {
      image: "../../../assets/animationHeader/headerArtBorder.png",
      text: "art?",
      alt: "Two hands holding images",
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
