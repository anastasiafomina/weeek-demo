$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 20) {
      $("header").addClass("header-nav-active")
  } else {
      $("header").removeClass("header-nav-active")
  }
});