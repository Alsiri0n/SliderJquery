/*jslint browser: true*/
/*global $, jQuery*/
/*jslint plusplus: true */
$(function () {
    "use strict";
    $('#nav li').hover(function () {
        $(this).children('ul').stop(false, true).fadeIn(300);
        $(this).children('a').addClass('selected');
    }, function () {
        $(this).children('ul').stop(false, true).fadeOut(300);
        $(this).children('a').removeClass('selected');
    });
});