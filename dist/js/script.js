//* -- navigation bar function --*//
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.classList.contains("responsive")) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }
}

//* ---  search bar   --- *//
const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

//* -- add show on navigation bar while scrolling --*//
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// Animasi 360-degree sederhana
const image = document.querySelector(".view-360 img");
let frame = 1;

image.addEventListener("mouseover", () => {
  const interval = setInterval(() => {
    frame++;
    if (frame > 36) frame = 1;
    image.src = `dist/img/baju5.jpg${frame}.jpg`;
  }, 100);

  image.addEventListener("mouseout", () => {
    clearInterval(interval);
    frame = 1;
    image.src = `dist/img/baju5.jpg`;
  });
});
