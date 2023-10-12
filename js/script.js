$('.dark').click(function () {
  $('.nav, .chefs, .contact').addClass('bg-dark text-white');
  $('.nav a, .chefs h2, .contact').addClass('text-white');
  $('.contact .box, .contact input, .contact textarea').addClass('bg-secondary bg-opacity-10');
  $('.home, .gallery').addClass('bg-black');
  $('.home h2, .home p, .home a, .gallery h2').addClass('text-white');
  $('.light').removeClass('d-none');
  $(this).addClass('d-none');
})
$('.light').click(function () {
  $('.nav, .chefs, .contact').removeClass('bg-dark text-white');
  $('.nav a, .chefs h2, .contact').removeClass('text-white');
  $('.contact .box, .contact input, .contact textarea').removeClass('bg-secondary bg-opacity-10');
  $('.home, .gallery').removeClass('bg-black');
  $('.home h2, .home p, .home a, .gallery h2').removeClass('text-white');
  $('.dark').removeClass('d-none');
  $(this).addClass('d-none');
})