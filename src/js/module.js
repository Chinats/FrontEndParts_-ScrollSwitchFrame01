/*global $ window*/

$(function () {
  'use strict';

  /*background size*/
  var swSectionHeight = $(window).height();
  $('.sw-section').css('height', swSectionHeight - 40);

  /*scroll event*/
  $('#home-sec-1 .sw-Container__FixCenter').each(function () {
      $(this).css('top', swSectionHeight / 2.5);
    });
  $(window).scroll(function () {
    var windowSt = $(window).scrollTop();
    $('#home-sec-1 .sw-Container__FixCenter').each(function () {
      $(this).css('top', swSectionHeight / 2.5 + windowSt);
    });
    $('#home-sec-2 .sw-Container__FixCenter').each(function () {
      $(this).css('top', swSectionHeight / 2.5 + windowSt - swSectionHeight + 40);
    });
    $('#home-sec-3 .sw-Container__FixCenter').each(function () {
      $(this).css('top', swSectionHeight / 2.5 + windowSt - swSectionHeight * 2 + 80);
    });
    $('#home-sec-4 .sw-Container__FixCenter').each(function () {
      $(this).css('top', swSectionHeight / 2.5 + windowSt - swSectionHeight * 3 + 120);
    });
  });

});