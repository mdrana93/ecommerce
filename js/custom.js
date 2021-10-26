let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image-1").forEach((img_1) => {
  img_1.addEventListener("click", function () {
    var src = img_1.getAttribute("src");
    document.querySelector(".big-image-1").src = src;
  });
});
document.querySelectorAll(".featured-image-2").forEach((img_2) => {
  img_2.addEventListener("click", function () {
    var src = img_2.getAttribute("src");
    document.querySelector(".big-image-2").src = src;
  });
});
document.querySelectorAll(".featured-image-3").forEach((img_3) => {
  img_3.addEventListener("click", function () {
    var src = img_3.getAttribute("src");
    document.querySelector(".big-image-3").src = src;
  });
});
