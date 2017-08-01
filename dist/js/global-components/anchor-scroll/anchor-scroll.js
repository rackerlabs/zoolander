'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// This plugin can be used to anchor scroll to anything. Usage:
// 1) Give your link the "rsAnchor-scroll" class
// 2) Give the href of your link a hashed id (ie href="#someID")
// 3) Set that id to the element you want scrolled to (ie id="someID")
(function ($) {
  $.fn.anchorScroll = function anchorScroll() {
    var plugin = this;
    $(this).click(function scrollTo(e) {
      e.preventDefault();
      // we need to subtract the top nav or else scrolled section will look cut off.
      var $this = $(this.hash);
      var $top = $this.offset().top;
      var dimensions = {
        nav: $('.navbar-fixed-top').outerHeight(),
        top: $top
      };
      if (_typeof($this.offset()) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && $this.offset() !== false) {
        $('html, body').animate({
          scrollTop: plugin.anchorScroll.calcTopScroll(dimensions)
        }, 500);
      }
    });
    $.fn.anchorScroll.calcTopScroll = function calcTopScroll(d) {
      return d.top - d.nav;
    };
    return this;
  };
})(jQuery);