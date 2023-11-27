// for burger
const burgerBtn = document.getElementById("burgerBtn");
burgerBtn.addEventListener("click", () => {
  document.querySelector(".header__text").classList.toggle("open");
});
