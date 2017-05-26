// Filter bar plugin
(($) => {
  $.fn.rsFilterBar = function rsFilterBar() {
    // Variable declorations
    const $filterBar = $(this);
    const $filterForm = $filterBar.find('.rsFilter-form');
    const $mainNavHeight = parseInt($('.navbar-fixed-top').outerHeight(), 10);
    let inBounds = false;
    let atBottom = false;
    let $stickyItemTop;

    // Callback to get new form width on resizing/scrolling
    function getWidth(bar, padding) {
      const width = parseInt(bar.outerWidth(true), 10) - padding;
      return width;
    }

    // Callback to check if inbounds of side menu
    function checkInBounds(wt) {
      // wt = pixels from top of window to top of scrolled area
      const filterFormHeight = parseInt($filterForm.outerHeight(), 10);
      if (!inBounds) {
        $stickyItemTop = parseInt($filterForm.offset().top, 10);
      }
      // check if sticky form is scrolled passed top nav
      const windowTopInBounds = $stickyItemTop - $mainNavHeight < wt;
      // get bottom offset of side bar
      const filterBottom = parseInt($filterBar.outerHeight(), 10) +
                           parseInt($filterBar.offset().top, 10);
      // top val of scrolled window + height of form (not bar)
      const formBottom = wt + filterFormHeight + $mainNavHeight + 10;
      // if bottom of fixed form is not passed bottom of filter side bar
      const filterInBounds = formBottom < filterBottom;
      if (filterInBounds) {
        atBottom = false;
      } else {
        atBottom = true;
      }
      inBounds = windowTopInBounds && filterInBounds;
      return inBounds;
    }

    if ($filterForm.length) {
      const $barPadding = parseInt($filterBar.css('padding-left'), 10) +
                        parseInt($filterBar.css('padding-right'), 10);
      const $filterHamburger = $filterBar.find('.rsFilter-hamburger');
      const $rsWindow = $(window);
      $stickyItemTop = parseInt($filterForm.offset().top, 10);
      let resizeTimer;
      let isFixed = false;

      $filterHamburger.click(() => {
        $filterForm.toggleClass('rsFilter-mobileForm');
        setTimeout(() => {
          $filterForm.toggleClass('rsFilter-mobileForm-effect');
        }, 100);
      });

      $rsWindow.scroll(() => {
        // If not in mobile
        if ($rsWindow.outerWidth() > 767) {
          const $rsWindowTop = parseInt($rsWindow.scrollTop(), 10);
          inBounds = checkInBounds($rsWindowTop);
          // If user scrolls to filter form and is in the bounds of the bar, move form up and down
          if (inBounds) {
            $filterForm.css({
              position: 'fixed',
              top: $mainNavHeight + 10,
              width: `${getWidth($filterBar, $barPadding)}px`,
            });
            isFixed = true;
          } else if (atBottom) {
            $filterForm.css({
              bottom: '10px',
              position: 'absolute',
              top: '',
              width: `${getWidth($filterBar, $barPadding)}px`,
            });
          } else if (!inBounds && !atBottom) {
            $filterForm.css({
              bottom: '',
              position: '',
              top: '',
              width: '',
            });
            isFixed = false;
          }
        }
      });

      // Set a slight delay to the resize functionality so that it doesn't
      // run on every pixel of a browser resize
      $rsWindow.resize(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          // reset this incase siblings above become taller on broweser resize
          $stickyItemTop = parseInt($filterForm.offset().top, 10);
          // If not mobile
          if ($rsWindow.outerWidth() > 768) {
            if (!isFixed && inBounds) {
              $filterForm.css({
                position: 'fixed',
                width: `${getWidth($filterBar, $barPadding)}px`,
              });
              isFixed = true;
            } else if (isFixed && inBounds) {
              $filterForm.css({
                width: `${getWidth($filterBar, $barPadding)}px`,
              });
            } else if (isFixed && !inBounds) {
              $filterForm.css({
                position: '',
              });
              isFixed = false;
            } else if (atBottom) {
              $filterForm.css({
                bottom: '10px',
                position: 'absolute',
                top: '',
                width: `${getWidth($filterBar, $barPadding)}px`,
              });
            }
          } else {
            // If in mobile
            $filterForm.css({
              width: '',
            });
            if (isFixed) {
              $filterForm.css({
                position: '',
                width: '',
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
