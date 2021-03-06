
var isDesktop = window.innerWidth >= 768
var navbarPos = isDesktop ? $("#navbar-main").position().top : 0;
$(window).bind('scroll', function(e) {
  if ($(window).scrollTop() > navbarPos) {
    $('#navbar-main').addClass('navbar-fixed-top');
  }
  else {
    $('#navbar-main').removeClass('navbar-fixed-top');
  }
});

widthChange();
$(window).on('resize', function(){
  widthChange();
});

function widthChange() {
  var isDesktop = window.innerWidth >= 768
  var mobileElems = document.getElementsByClassName('mobile')
  var desktopElems = document.getElementsByClassName('desktop')
  var inlineDesktopElems = document.getElementsByClassName('inline-desktop')
  for(var i = 0; i < mobileElems.length; i++) {
    mobileElems[i].style.display = isDesktop ? 'none' : 'block';
  }
  for(var i = 0; i < desktopElems.length; i++) {
    desktopElems[i].style.display = isDesktop? 'block' : 'none';
  }
  for(var i = 0; i < inlineDesktopElems.length; i++) {
    inlineDesktopElems[i].style.display = isDesktop? 'inline-block' : 'none';
  }
}

$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top-50
    }, 1000, 'swing');
    event.preventDefault();
  });
});
