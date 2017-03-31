// back to top
(($) => {
  const duration = 300;
  $('.backtotop-link').click((event) => {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
})(jQuery);
