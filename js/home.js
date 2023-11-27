// for slider

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    // stretch: 0,
    // depth: 100,
    // modifier: 1,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// for burger
const burgerBtn = document.getElementById("burgerBtn");
burgerBtn.addEventListener("click", () => {
  document.querySelector(".header__text").classList.toggle("open");
});
