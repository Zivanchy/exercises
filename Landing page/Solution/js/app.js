const layout = document.querySelector("#layout");
const hamburgerBtn = document.querySelector("#btnHamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const users = document.querySelectorAll("#users");
const dots = document.querySelectorAll(".dot");

//Hamburger Button

hamburgerBtn.addEventListener("click", () => {
  console.log("click");
  if (header.classList.contains("open")) {
    layout.classList.add("hide");
    hamburgerBtn.classList.remove("open");
    mobileMenu.classList.add("hide");
    body.classList.remove("overflow-hidden");
    header.classList.remove("open");
  } else {
    header.classList.add("open");
    layout.classList.remove("hide");
    hamburgerBtn.classList.add("open");
    mobileMenu.classList.remove("hide");
    body.classList.add("overflow-hidden");
  }
});

// Slider
let currentSlide = 0;

let slideShow = (n) => {
  users.forEach((user) => {
    user.style.display = "none";
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
  });
  users[n].style.display = "flex";
  users[n].classList.remove("hide");
  dots[n].classList.add("active");
};

document.addEventListener("DOMContentLoaded", slideShow(currentSlide));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideShow(index);
    currentSlide = index;
  });
});
