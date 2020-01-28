(($) => {
  $.fn.fitTitle = function fitTitle() {
    const $window = $(window);
    const $this = $(this);
    const $headerBox = $this.find('.rsTl-feature-headerContainer');
    const $header = $headerBox.find('.rsTl-feature-text');
    const $title = $headerBox.find('.rsTl-feature-title');

    const shrinkTitle = (value) => {
      if ($window.outerWidth() >= 992) {
        const size = value ? `${value}px` : '';
        $title.css('font-size', size);
        const hbHeight = $header.outerHeight();
        const cHeight = $this.outerHeight();
        if (hbHeight > cHeight) {
          const currentFontSize = parseInt((window.getComputedStyle($title.get(0)).fontSize).replace(/[^0-9.]+/g, ''), 10);
          shrinkTitle(currentFontSize - 5);
        }
      } else {
        // for smaller screen sizes we need to remove the inline font size entirely
        $title.css('font-size', '');
      }
    };

    let resizeTimer = null;
    const resizer = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(shrinkTitle, 100);
    };

    resizer();
    // call on resize.
    $window.resize(resizer);
    return this;
  };
})(jQuery);
