const auctionsBtn = document.getElementById("auctionsBtn");
const auctionsCards = document.getElementById("auctions");
const bidsBtn = document.getElementById("bidsBtn");
const bidsCards = document.getElementById("bids");

auctionsBtn.style.textDecoration = "underline";
auctionsCards.style.display = "flex";
bidsCards.style.display = "none";

export function auctionsBids() {
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
