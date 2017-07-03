'use strict';

/* eslint no-use-before-define: 0 */

var Zoolander = Zoolander || {};

Zoolander.rsFilterBar = {
  calcAtBottom: function calcAtBottom(dimensions) {
    var defaults = {
      filterBarOffsetTop: 0,
      filterBarOuterHeight: 0,
      filterFormOuterHeight: 0,
      mainNavHeight: 0,
      windowTop: 0
    };
    var values = Object.assign(defaults, dimensions);
    var filterFormHeight = values.filterFormOuterHeight;
    var filterBottom = values.filterBarOuterHeight + values.filterBarOffsetTop;
    var formBottom = values.windowTop + filterFormHeight + values.mainNavHeight + 10;
    return formBottom >= filterBottom;
  },
  calcInBounds: function calcInBounds(dimensions) {
    var defaults = {
      filterBarOffsetTop: 0,
      filterBarOuterHeight: 0,
      filterFormOffsetTop: 0,
      filterFormOuterHeight: 0,
      isInBounds: false,
      mainNavHeight: 0,
      stickyItemTop: 0,
      windowTop: 0
    };
    var values = Object.assign(defaults, dimensions);
    // wt = pixels from top of window to top of scrolled area
    var filterFormHeight = values.filterFormOuterHeight;
    if (!values.isInBounds) {
      values.stickyItemTop = values.filterFormOffsetTop;
    }
    // check if sticky form is scrolled passed top nav
    var windowTopInBounds = values.stickyItemTop - values.mainNavHeight < values.windowTop;
    // get bottom offset of side bar
    var filterBottom = values.filterBarOuterHeight + values.filterBarOffsetTop;
    // top val of scrolled window + height of form (not bar)
    var formBottom = values.windowTop + filterFormHeight + values.mainNavHeight + 10;
    // if bottom of fixed form is not passed bottom of filter side bar
    var filterInBounds = formBottom < filterBottom;
    return windowTopInBounds && filterInBounds;
  }
};

// Filter bar plugin
(function ($) {
  $.fn.rsFilterBar = function rsFilterBar() {
    // Variable declarations
    var $filterBar = $(this);
    var $filterForm = $filterBar.find('.rsFilter-form');
    var $mainNavHeight = $('.navbar-fixed-top').outerHeight();
    var $rsWindow = $(window);
    var inBounds = false;
    var atBottom = false;
    var stickyItemTopValue = void 0;

    // Callback to get new form width on resizing/scrolling
    function getWidth(bar, padding) {
      var width = bar.outerWidth(true) - padding;
      return width;
    }

    // Callback to check if inbounds of side menu
    function checkInBounds() {
      var dimensions = {
        filterBarOffsetTop: $filterBar.offset().top,
        filterBarOuterHeight: $filterBar.outerHeight(),
        filterFormOffsetTop: $filterForm.offset().top,
        filterFormOuterHeight: $filterForm.outerHeight(),
        isInBounds: inBounds,
        mainNavHeight: $mainNavHeight,
        stickyItemTop: stickyItemTopValue,
        windowTop: $rsWindow.scrollTop()
      };

      atBottom = Zoolander.rsFilterBar.calcAtBottom(dimensions);
      return Zoolander.rsFilterBar.calcInBounds(dimensions);
    }

    if ($filterForm.length) {
      var $barPadding = parseInt($filterBar.css('padding-left'), 10) + parseInt($filterBar.css('padding-right'), 10);
      var $filterHamburger = $filterBar.find('.rsFilter-hamburger');
      stickyItemTopValue = $filterForm.offset().top;
      var resizeTimer = void 0;
      var isFixed = false;

      $filterHamburger.click(function () {
        $filterForm.toggleClass('rsFilter-mobileForm');
        setTimeout(function () {
          $filterForm.toggleClass('rsFilter-mobileForm-effect');
        }, 100);
      });

      $rsWindow.scroll(function () {
        // If not in mobile
        if ($rsWindow.outerWidth() > 767) {
          inBounds = checkInBounds();
          // If user scrolls to filter form and is in the bounds of the bar, move form up and down
          if (inBounds) {
            $filterForm.css({
              position: 'fixed',
              top: $mainNavHeight + 10,
              width: getWidth($filterBar, $barPadding) + 'px'
            });
            isFixed = true;
          } else if (atBottom) {
            $filterForm.css({
              bottom: '10px',
              position: 'absolute',
              top: '',
              width: getWidth($filterBar, $barPadding) + 'px'
            });
          } else if (!inBounds && !atBottom) {
            $filterForm.css({
              bottom: '',
              position: '',
              top: '',
              width: ''
            });
            isFixed = false;
          }
        }
      });

      // Set a slight delay to the resize functionality so that it doesn't
      // run on every pixel of a browser resize
      $rsWindow.resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          // If not mobile
          if ($rsWindow.outerWidth() > 768) {
            if (!isFixed && inBounds) {
              $filterForm.css({
                position: 'fixed',
                width: getWidth($filterBar, $barPadding) + 'px'
              });
              isFixed = true;
            } else if (isFixed && inBounds) {
              $filterForm.css({
                width: getWidth($filterBar, $barPadding) + 'px'
              });
            } else if (isFixed && !inBounds) {
              $filterForm.css({
                position: ''
              });
              isFixed = false;
            } else if (atBottom) {
              $filterForm.css({
                bottom: '10px',
                position: 'absolute',
                top: '',
                width: getWidth($filterBar, $barPadding) + 'px'
              });
            }
          } else {
            // If in mobile
            $filterForm.css({
              width: ''
            });
            if (isFixed) {
              $filterForm.css({
                position: '',
                width: ''
              });
              isFixed = false;
            }
          }
        }, 250);
      });
    }

    return this;
  };
})(jQuery);