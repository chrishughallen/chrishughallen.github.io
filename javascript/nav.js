// Nav behavior
const open_nav = () => {
  nav.classList.add("show-mobile-nav")
  document.body.classList.add("mobile-menu-open")
}
const close_nav = () => {
  nav.classList.remove("show-mobile-nav")
  document.body.classList.remove("mobile-menu-open")
}

// elements
nav = document.querySelector(".navbar")
open_nav_button = document.getElementById("open-nav")
close_nav_button = document.getElementById("close-nav")

// listeners
open_nav_button.addEventListener("click", open_nav)
close_nav_button.addEventListener("click", close_nav)

