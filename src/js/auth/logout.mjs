const logoutBtn = document.querySelector(".logoutBtn");

export function logout() {
  logoutBtn.addEventListener("click", (event) => {
    localStorage.clear();
  });
}
