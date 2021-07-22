const login = document.getElementById("login-btn");
const openmodal = document.querySelector(".modal");
const close = document.querySelector(".close");

login.addEventListener("click", () => {
  openmodal.style.display = "block";
});

close.addEventListener("click", () => {
  openmodal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target == openmodal) {
    openmodal.style.display = "none";
  }
});
