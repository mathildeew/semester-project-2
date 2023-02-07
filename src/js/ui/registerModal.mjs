const registeredModal = document.getElementById("registeredModal");
const registerBtn = document.getElementById("registerBtn");

registeredModal.addEventListener("shown.bs.modal", () => {
  registerBtn.focus();
});
