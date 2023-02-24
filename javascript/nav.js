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
let nav = document.querySelector(".navbar")
let open_nav_button = document.getElementById("open-nav")
let close_nav_button = document.getElementById("close-nav")
let links = Array.from(document.querySelectorAll('nav ul li'))



// listeners
open_nav_button.addEventListener("click", open_nav)
close_nav_button.addEventListener("click", close_nav)
links.forEach((link) => {
  link.addEventListener("click", close_nav)
})

