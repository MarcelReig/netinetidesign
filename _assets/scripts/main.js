//scripts

// Efecto scroll
$(function () {
  $('a.scroll[href^="#"]').click(function (e) {
    var hash = $(this).attr("href"),
      posicionNueva = $(hash).offset().top;
    $("body,html,document").animate(
      { scrollTop: posicionNueva },
      "slow",
      function () {
        window.location.hash = hash;
      }
    );
    e.preventDefault();
  });
});

// Go top button

jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $(".cd-top");

  //hide or show the "back to top" link
  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass("cd-is-visible")
      : $back_to_top.removeClass("cd-is-visible cd-fade-out");
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass("cd-fade-out");
    }
  });

  //smooth scroll to top
  $back_to_top.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      scroll_top_duration
    );
  });
});

/* masonry for the portfolio sketch gallery */
$(window).on("load", function () {
  $(".grid").masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: ".grid-item",
    // use element for option
    columnWidth: ".grid-sizer",
    gutter: 10,
    isFitWidth: true,
  });
});

/* light box magnificPopup for the portfolio sketch gallery */
$(document).ready(function () {
  $(".image-link").magnificPopup({
    gallery: {
      enabled: true, // set to true to enable gallery
      preload: [0, 2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tPrev: "Previous (Left arrow key)", // title for left button
      tNext: "Next (Right arrow key)", // title for right button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter
    },
    type: "image",
  });
});

$(document).ready(function () {
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true,
    },
  });
});
