/*jslint browser: true*/
/*global $, jQuery*/
/*jslint plusplus: true */
var sliderTimer;
var $j = jQuery.noConflict();
var slideWidth = 20;


$j(document).ready(function () {
    "use strict";
    slideWidth =  $j(".viewport").width();
$j('.slidewrapper').width($j('.slidewrapper').children().size() * slideWidth);
    sliderTimer = setInterval(nextSlide, 3500);
    $j('.viewport').hover(function () {
        clearInterval(sliderTimer);
    }, function () {
        sliderTimer = setInterval(nextSlide, 3500);
    });
});

function nextSlide() {
    "use strict";
    slideWidth =  $j(".viewport").width();
    var currentSlide = parseInt($j('.slidewrapper').data('current'), 10);
    currentSlide++;
    if (currentSlide >= $j('.slidewrapper').children().size()) {
        currentSlide = 0;
    }
    $j('.slidewrapper').animate({left: -currentSlide * slideWidth}, 1300).data('current', currentSlide);
}