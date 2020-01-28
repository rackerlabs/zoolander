"use strict";

(function ($) {
  $.fn.fitTitle = function fitTitle() {
    var $window = $(window);
    var $this = $(this);
    var $headerBox = $this.find('.rsTl-feature-headerContainer');
    var $header = $headerBox.find('.rsTl-feature-text');
    var $title = $headerBox.find('.rsTl-feature-title');

    var shrinkTitle = function shrinkTitle(value) {
      if ($window.outerWidth() >= 992) {
        var size = value ? "".concat(value, "px") : '';
        $title.css('font-size', size);
        var hbHeight = $header.outerHeight();
        var cHeight = $this.outerHeight();

        if (hbHeight > cHeight) {
          var currentFontSize = parseInt(window.getComputedStyle($title.get(0)).fontSize.replace(/[^0-9.]+/g, ''), 10);
          shrinkTitle(currentFontSize - 5);
        }
      } else {
        // for smaller screen sizes we need to remove the inline font size entirely
        $title.css('font-size', '');
      }
    };

    var resizeTimer = null;

    var resizer = function resizer() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(shrinkTitle, 100);
    };

    resizer(); // call on resize.

    $window.resize(resizer);
    return this;
  };
})(jQuery);