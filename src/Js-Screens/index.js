const navigationLinks = document.querySelector(".navigation-links");
const navigation = document.querySelector(".navigation");
const hamburgerBtn = document.querySelector(".hamburger");
// const sliderLeftBtn = document.getElementById("slider-arrow-left");
// const slider = document.getElementById("thumbnail-products");
// const sliderRightBtn = document.getElementById("slider-arrow-right");


hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("is-active");
      navigationLinks.classList.toggle("active");
});



