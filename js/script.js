var navbarPos = $("#navbar-main").position().top;
$(window).bind('scroll', function(e) {
  if ($(window).scrollTop() > navbarPos) {
    $('#navbar-main').addClass('navbar-fixed-top');
  }
  else {
    $('#navbar-main').removeClass('navbar-fixed-top');
  }
});

