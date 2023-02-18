const logoutBtn = document.getElementById("logoutBtn");

export function logout() {
  logoutBtn.addEventListener("click", (event) => {
    localStorage.clear();
    window.location.href = "/";
  });
}
