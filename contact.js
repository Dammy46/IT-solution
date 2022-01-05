$("#menu").slicknav({
  prependTo: "#mobilemenu",
});
$(window).scroll(function () {
  $(".nav-header").toggleClass("sticky-bar", $(this).scrollTop() > 600);
});

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    // Show button after 100px
    var showAfter = 700;
    if ($(this).scrollTop() > showAfter) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

var loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.css("opacity", "opacity");
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 100);
  }
}
function displayContent() {
  loader.css("display", "none");
  $(".site-wrap").css("display", "block");
}
$(document).ready(function () {
  loader = $(".loader");
  loadNow(1);
});
