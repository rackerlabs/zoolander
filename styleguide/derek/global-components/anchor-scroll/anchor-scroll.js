// This plugin can be used to anchor scroll to anything. Usage:
// 1) Give your link the "rsAnchor-scroll" class
// 2) Give the href of your link a hashed id (ie href="#someID")
// 3) Set that id to the element you want scrolled to (ie id="someID")
(($) => {
  $.fn.anchorScroll = function anchorScroll() {
    const plugin = this;
    $(this).click(function scrollTo(e) {
      e.preventDefault();
      // we need to subtract the top nav or else scrolled section will look cut off.
      const $this = $(this.hash);
      const $top = $this.offset().top;
      const dimensions = {
        nav: $('.navbar-fixed-top').outerHeight(),
        top: $top,
      };
      if (typeof $this.offset() !== typeof undefined && $this.offset() !== false) {
        $('html, body').animate({
          scrollTop: plugin.anchorScroll.calcTopScroll(dimensions),
        }, 500);
      }
    });
    $.fn.anchorScroll.calcTopScroll = function calcTopScroll(d) {
      return d.top - d.nav;
    };
    return this;
  };
})(jQuery);
