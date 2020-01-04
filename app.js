$('.fa-bars').on('click', showNav)
$('.fa-times').on('click', hideNav)

function showNav () {
  $('.header').addClass('header--open')
  $('nav').addClass('navbar--show')
  $('.fa-bars').addClass('fa-bars--hide')
  $('.fa-times').addClass('fa-times--show')
}

function hideNav () {
  $('.header').removeClass('header--open')
  $('nav').removeClass('navbar--show')
  $('.fa-bars').removeClass('fa-bars--hide')
  $('.fa-times').removeClass('fa-times--show')
}
