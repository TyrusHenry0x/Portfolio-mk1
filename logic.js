$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('nav-show');

  }
  else {
    $('header').removeClass('nav-show');
  }

})

function toggleNavbar() {
  const navbar = document.querySelector('.navigation');
  if (window.innerWidth < 500) {
      navbar.style.display = 'none'; // Hide navbar
  } else {
      navbar.style.display = 'flex'; // Show navbar (adjust based on your styling)
  }
}

// Run on load
toggleNavbar();

// Run on resize
window.addEventListener('resize', toggleNavbar);


// const navSlide = () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navbar = document.querySelector(".nav-bar");
//   const navLinks = document.querySelectorAll(".nav-bar li");

//   hamburger.onclick = () => {

//     navbar.classList.toggle("nav-active");

//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
//       }
//     });
//     hamburger.classList.toggle("toggle");
//   }
// }

// window.onload = () => navSlide();