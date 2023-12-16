// mobile nav menu
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.querySelector(".toggle-btn").classList.toggle("toggle-btn-close");
  const navLinks = document.querySelector(".top-nav-links-wrapper");
  navLinks.classList.toggle("top-nav-mobile-active");
});

// nav scroll
const navMenuScroll = document.querySelector(".top-nav-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navMenuScroll.classList.add("nav-top-margin");
  } else {
    navMenuScroll.classList.remove("nav-top-margin");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 768) {
    navMenuScroll.classList.add("top-nav-scroll");
  } else {
    navMenuScroll.classList.remove("top-nav-scroll");
  }
});

//slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});

//backto-top
const topBtn = document.querySelector(".backto-top");
document.addEventListener("scroll", () => {
  if (window.scrollY > 3500) {
    topBtn.classList.add("backto-top-active");
  } else {
    topBtn.classList.remove("backto-top-active");
  }
});

function backtoTop() {
  document.documentElement.scrollTop = 0;
};
