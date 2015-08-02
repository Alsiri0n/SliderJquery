/*jslint browser: true*/
/*global $, jQuery*/
/*jslint plusplus: true */
$(function () {
    "use strict";
    $('.wrapper').hover(function () {
        $(this).children().stop().animate({marginTop: '100%', opacity: 0}, 600);
    }, function () {
        $(this).children().stop().animate({marginTop: '0%', opacity: 1}, 600);
    });
});