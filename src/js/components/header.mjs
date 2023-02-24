export function getRandom() {
  const headerContent = [
    {
      image: "../../../assets/catHeader.png",
      text: "cat?",
    },
    {
      image: "../../../assets/headerBooks.png",
      text: "books?",
    },
    {
      image: "../../../assets/headerJacket.png",
      text: "jacket?",
    },
    {
      image: "../../../assets/headerPlant.png",
      text: "plant?",
    },
    {
      image: "../../../assets/headerShoe.png",
      text: "shoes?",
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
