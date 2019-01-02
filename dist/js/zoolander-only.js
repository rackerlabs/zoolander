'use strict';

(function ($) {
  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // dropdowns
  $('.navZoolander-hasDropdown').unbind().click(function (e) {
    e.preventDefault();
    var $el = jQuery(e.currentTarget);
    $el.next('.navZoolander-dropdown').slideToggle(200);
    $el.toggleClass('hasDropDown-active');
  });

  // Slide toggle the zoolander nav
  var zoolanderSlideBtn = $('.navZoolander-slideBtn');
  zoolanderSlideBtn.unbind().click(function (e) {
    e.preventDefault();
    var $me = $(e.currentTarget);
    $me.toggleClass('navZoolander-slideBtn-collapsed');
    $me.next('.navZoolander-container').toggleClass('navZoolander-container-collapsed');
    $('.mainContainer').toggleClass('mainContainer-collapsed');
  });
})(jQuery);