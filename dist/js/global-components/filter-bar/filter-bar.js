'use strict';

// Filter bar plugin
(function ($) {
  $.fn.rsFilterBar = function rsFilterBar() {
    // Variable declorations
    var $filterBar = $(this);
    var $filterForm = $filterBar.find('.rsFilter-form');
    var $mainNavHeight = parseInt($('.navbar-fixed-top').outerHeight(), 10);
    var inBounds = false;
    var atBottom = false;
    var $stickyItemTop = void 0;

    // Callback to get new form width on resizing/scrolling
    function getWidth(bar, padding) {
      var width = parseInt(bar.outerWidth(true), 10) - padding;
      return width;
    }

    // Callback to check if inbounds of side menu
    function checkInBounds(wt) {
      // wt = pixels from top of window to top of scrolled area
      var filterFormHeight = parseInt($filterForm.outerHeight(), 10);
      if (!inBounds) {
        $stickyItemTop = parseInt($filterForm.offset().top, 10);
      }
      // check if sticky form is scrolled passed top nav
      var windowTopInBounds = $stickyItemTop - $mainNavHeight < wt;
      // get bottom offset of side bar
      var filterBottom = parseInt($filterBar.outerHeight(), 10) + parseInt($filterBar.offset().top, 10);
      // top val of scrolled window + height of form (not bar)
      var formBottom = wt + filterFormHeight + $mainNavHeight + 10;
      // if bottom of fixed form is not passed bottom of filter side bar
      var filterInBounds = formBottom < filterBottom;
      if (filterInBounds) {
        atBottom = false;
      } else {
        atBottom = true;
      }
      inBounds = windowTopInBounds && filterInBounds;
      return inBounds;
    }

    if ($filterForm.length) {
      var $barPadding = parseInt($filterBar.css('padding-left'), 10) + parseInt($filterBar.css('padding-right'), 10);
      var $filterHamburger = $filterBar.find('.rsFilter-hamburger');
      var $rsWindow = $(window);
      $stickyItemTop = parseInt($filterForm.offset().top, 10);
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
          var $rsWindowTop = parseInt($rsWindow.scrollTop(), 10);
          inBounds = checkInBounds($rsWindowTop);
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
          // reset this incase siblings above become taller on broweser resize
          $stickyItemTop = parseInt($filterForm.offset().top, 10);
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