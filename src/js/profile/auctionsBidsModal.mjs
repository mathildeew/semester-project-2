const auctionsBtn = document.getElementById("auctionsBtn");
const auctionsCards = document.getElementById("auctionsCard");
const bidsBtn = document.getElementById("bidsBtn");
const bidsCards = document.getElementById("bidsCard");

auctionsBtn.style.textDecoration = "underline";
auctionsCards.style.display = "flex";
bidsCards.style.display = "none";

export function auctionsBidsModal() {
  auctionsBtn.addEventListener("click", () => {
    showAuctions();
  });

  function showAuctions() {
    auctionsBtn.style.textDecoration = "underline";
    bidsBtn.style.textDecoration = "none";
    auctionsCards.style.display = "flex";
    bidsCards.style.display = "none";
  }

  bidsBtn.addEventListener("click", () => {
    showBids();
  });

  function showBids() {
    bidsCards.style.display = "flex";

    bidsBtn.style.textDecoration = "underline";
    auctionsBtn.style.textDecoration = "none";
    auctionsCards.style.display = "none";
  }
}
