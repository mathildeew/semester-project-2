export function header() {
  const headerContent = [
    {
      image: "../../../assets/header/catHeader.png",
      text: "cat?",
      alt: "Grey cat profile view",
    },
    {
      image: "../../../assets/header/headerBooks.png",
      text: "books?",
      alt: "Stable of books",
    },
    {
      image: "../../../assets/header/jacketHeader.png",
      text: "jacket?",
      alt: "Jacket on coat hanger held by hand",
    },

    {
      image: "../../../assets/header/headerShoe.png",
      text: "shoes?",
      alt: "Shoe dropped from hand",
    },
    {
      image: "../../../assets/header/headerArt.png",
      text: "art?",
      alt: "Two hands holding images",
    },
  ];

  const randomIndex = Math.floor(Math.random() * headerContent.length);
  const random = headerContent[randomIndex];

  const header = document.querySelector("header");
  const headerText = document.getElementById("headerOutline");

  header.style.backgroundImage = `url(${random.image})`;
  headerText.innerHTML = random.text;
}
