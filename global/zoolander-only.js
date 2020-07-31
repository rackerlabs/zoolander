
(($) => {
  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // dropdowns
  $('.navZoolander-hasDropdown').unbind().click((e) => {
    e.preventDefault();
    const $el = jQuery(e.currentTarget);
    $el.next('.navZoolander-dropdown').slideToggle(200);
    $el.toggleClass('hasDropDown-active');
  });

  // Slide toggle the zoolander nav
  const zoolanderSlideBtn = $('.navZoolander-slideBtn');
  zoolanderSlideBtn.unbind().click((e) => {
    e.preventDefault();
    const $me = $(e.currentTarget);
    $me.toggleClass('navZoolander-slideBtn-collapsed');
    $me.next('.navZoolander-container').toggleClass('navZoolander-container-collapsed');
    $('.mainContainer').toggleClass('mainContainer-collapsed');
  });
})(jQuery);
