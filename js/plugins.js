/* global $, jQuery, alert */
$(document).ready(function () {

    "use strict";

    // Nice Scroll
    $("body").niceScroll({
      cursorcolor:"#485460",
      cursorwidth:"10px",
      zindex: "99999",
      cursorborder: "1px solid #808e9b",
      cursorborderradius: "2px"
    });

    $('.carousel').carousel({

        interval: 2000

    })

    // Show Color Option Div When Click On The Gear
    $('.gear-check').click(function () {

        $('.color-option').fadeToggle();

    });

    // Change Thame Color On Click
    var colorLi = $(".color-option ul li"),
        scrollButton =$("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#47941d").end()
        .eq(1).css("backgroundColor", "#0895D1").end()
        .eq(2).css("backgroundColor", "#d1cc08");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href",$(this).attr("data-value"));

         console.log($(this).attr("data-value"));

    });

    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Button To Scroll Top
    scrollButton.click(function () {

        $('html,body').animate({scrollTop : 0}, 600);
    });


});

// Loading Screen
$(window).load(function () {

    "use strict";

    $(".loading-overlay .spinner").fadeOut(1500, function () {

        // Show The Scroll
        // $("html").css("overflow","auto");

        $(this).parent().fadeOut(1000, function () {

            $(this).remove();

        });
    });
});
