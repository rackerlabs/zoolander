'use strict';

jQuery(document).ready(function ($) {
  $('.title a').click(function (e) {
    var $el = $(e.currentTarget).parent().parent().find('.fa-arrow-right');

    $el.animate({ borderSpacing: +90 }, {
      step: function step(now) {
        $el.css('-webkit-transform', 'rotate(' + now + 'deg)').css('-moz-transform', 'rotate(' + now + 'deg)').css('transform', 'rotate(' + now + 'deg)');
      },
      duration: 'slow'
    }, 'linear');
  });
});

// responsive table jQuery plugin
(function ($) {
  $.fn.responsiveTable = function responsiveTable() {
    var $table = $(this);
    $table.each(function responsiveTableEach() {
      var $el = $(this);
      var $cellTitle = $el.find('.productTable-name');
      // place table head titles into each cell as labels
      $el.find('tbody tr td').each(function responsiveTableTdEach() {
        var $index = $(this).index();
        $(this).prepend('<strong class="productTable-mobileTitle">' + $cellTitle.eq($index).html() + '</strong>');
      });
    });
    // allow this plugin to be chainable via jQuery
    return this;
  };
})(jQuery); // to protect and scope the JQuery alias = $

// Filter bar plugin
(function ($) {
  $.fn.rsFilterBar = function rsFilterBar() {
    // Variable declorations
    var $filterBar = $(this);
    var $filterForm = $filterBar.find('.rsFilter-form');
    var $mainNavHeight = parseInt($('.navbar-fixed-top').outerHeight(), 10);
    var inBounds = false;
    var $stickyItemTop = void 0;

    // Callback to get new form width on resizing/scrolling
    function getWidth(bar, padding) {
      var width = parseInt(bar.outerWidth(true), 10) - padding;
      return width;
    }

    // Callback to check if inbounds of side menu
    function checkInBounds(wt) {
      var filterFormHeight = parseInt($filterForm.outerHeight(), 10);
      if (!inBounds) {
        $stickyItemTop = parseInt($filterForm.offset().top, 10);
      }
      var windowTopInBounds = $stickyItemTop - $mainNavHeight < wt;
      var filterBottom = parseInt($filterBar.outerHeight(), 10) + parseInt($filterBar.offset().top, 10);
      var formBottom = wt + filterFormHeight;
      var filterGap = filterBottom + $mainNavHeight;
      var filterInBounds = (filterGap - filterFormHeight) * 3 > formBottom;
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
          } else {
            $filterForm.css({
              position: '',
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

// swatches copy button
(function () {
  function copy(e) {
    var t = e.target;
    var c = t.dataset.copytarget;
    var inp = c ? document.querySelector(c) : null;

    // is element selectable?
    if (inp && inp.select) {
      inp.select();
      document.execCommand('copy');
      inp.blur();
    }
  }

  document.body.addEventListener('click', copy, true);
})();

(function ($) {
  // initialize the responsive tables
  $('.productTable').responsiveTable();

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

  // Zoolander only solution for auto collapsing menu on example pages
  var url = window.location.pathname;
  if (url.match(/\/derek\/incubation\//gi) && url !== '/derek/incubation/' || url.match(/\/derek\/view-templates\//gi) && url !== '/derek/view-templates/' || url.match(/\/derek\/solutions\//gi) && url !== '/derek/solutions/' || url.match(/\/derek\/templates\//gi) && url !== '/derek/templates/') {
    zoolanderSlideBtn.trigger('click');
  }

  // search
  var searchContainer = $('#navbar-search');
  var searchSubmit = searchContainer.find('.navbar-icon-search');
  var searchBox = searchContainer.find('.navbar-search-input');

  searchSubmit.on('click', function () {
    if (searchContainer.hasClass('navbar-searchExpanded')) {
      searchContainer.removeClass('navbar-searchExpanded');
      searchBox.trigger('blur');
    } else {
      searchContainer.addClass('navbar-searchExpanded');
      searchBox.trigger('focus');
    }
  });
})(jQuery);