(function() {
  const burger = document.querySelector(".burger");
  const navActiv = document.querySelector(".nav");
  const navClose = document.querySelector(".header_nav_close");

  burger.addEventListener('click', () => {
    navActiv.classList.add("nav_activ");
  })

  navClose.addEventListener('click', () => {
    navActiv.classList.remove("nav_activ");
  })
})();

