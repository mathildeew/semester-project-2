export function frontAnimation() {
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
      alt: "Jacket on coat hanger held by hand",
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
  const random = headerContent[randomIndex];
  const text = document.getElementById("animText");
  const image = document.getElementById("animImg");

  image.src = random.image;
  image.alt = random.alt;
  text.innerHTML = random.text;
}
