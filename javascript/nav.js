// Nav behavior
const open_nav = () => nav.classList.remove("hide")
const close_nav = () => nav.classList.add("hide")

// elements
nav = document.getElementById("nav")
open_nav_button = document.getElementById("open-nav")
close_nav_button = document.getElementById("close-nav")

// listeners
open_nav_button.addEventListener("click", open_nav)
close_nav_button.addEventListener("click", close_nav)

