'use strict';

// back to top
(function ($) {
  var duration = 300;
  $('.backtotop-link').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
})(jQuery);