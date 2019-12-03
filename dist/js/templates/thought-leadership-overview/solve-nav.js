'use strict';

(function ($) {
  $.fn.solveNav = function solveNav() {
    var $nav = $(this);
    var $window = $(window);
    var $content = $nav.nextAll('a').eq(0);
    var $dropDowns = $nav.find('.rsTl-nav-ddLink');
    var $linkList = $nav.find('.rsTl-nav-list');
    var $hamburger = $nav.find('.rsTl-nav-hamburgerBtn');
    var subListCls = 'rsTl-nav-subList-show';
    var methods = {
      $mobileNav: null,
      navIsContained: false,
      setHamburger: function setHamburger() {
        $hamburger.click(function (e) {
          e.preventDefault();
          methods.$mobileNav.slideToggle(100);
          $hamburger.toggleClass('rsTl-nav-hamburgerOpen');
        });
      },
      getLinkLines: function getLinkLines(target) {
        var style = window.getComputedStyle(target, null);
        var height = parseInt(style.getPropertyValue('height'), 10);
        var fontSize = parseInt(style.getPropertyValue('font-size'), 10);
        var lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
        var boxSizing = style.getPropertyValue('box-sizing');
        if ($.isNumeric(lineHeight)) {
          lineHeight = fontSize * 1.2;
        }
        if (boxSizing === 'border-box') {
          var paddingTop = parseInt(style.getPropertyValue('padding-top'), 10);
          var paddingBottom = parseInt(style.getPropertyValue('padding-bottom'), 10);
          var borderTop = parseInt(style.getPropertyValue('border-top-width'), 10);
          var borderBottom = parseInt(style.getPropertyValue('border-bottom-width'), 10);
          height = height - paddingTop - paddingBottom - borderTop - borderBottom;
        }
        var lines = Math.ceil(height / lineHeight);
        return lines;
      },

      resizeTimer: null,
      onResize: function onResize() {
        $linkList.css('opacity', 0);
        clearTimeout(methods.resizeTimer);
        methods.resizeTimer = setTimeout(methods.adjustNavSize, 250);
      },
      adjustNavSize: function adjustNavSize() {
        $linkList.css('opacity', 1);
        $nav.removeClass('rsTl-nav-contained');
        var lines = methods.getLinkLines($linkList.get(0));
        if (lines < 3) {
          methods.navIsContained = false;
          if (methods.$mobileNav && methods.$mobileNav.is(':visible')) {
            methods.$mobileNav.hide();
            $hamburger.removeClass('rsTl-nav-hamburgerOpen');
          }
          $content.css('margin-top', '');
        } else {
          methods.navIsContained = true;
          $nav.addClass('rsTl-nav-contained');
          // we need to adjust the header under the nav
          var $navHeight = $nav.outerHeight();
          $content.css('margin-top', $navHeight + 'px');
        }
      },
      createMobileMenu: function createMobileMenu() {
        var $navListClone = $linkList.clone();
        $navListClone.addClass('rsTl-nav-list-contained');
        $navListClone.removeClass('rsTl-nav-list');
        $nav.append($navListClone);
        $navListClone.find('.rsTl-nav-ddLink').each(function c() {
          var $ddLink = $(this);
          var $nextMenu = $ddLink.next('.rsTl-nav-subList');
          $ddLink.click(function (e) {
            e.preventDefault();
            $ddLink.toggleClass('rsTl-nav-mobileOpen');
            $nextMenu.slideToggle(100);
          });
        });
        methods.$mobileNav = $navListClone;
      },
      setDropDowns: function setDropDowns() {
        $dropDowns.each(function set() {
          var $ddLink = $(this);
          var $nextMenu = $ddLink.next('.rsTl-nav-subList');
          var delay = 400;
          var offTimer = void 0;
          $ddLink.mouseover(function () {
            if (!methods.navIsContained) {
              clearTimeout(offTimer);
              $nextMenu.addClass(subListCls);
            }
          }).mouseleave(function () {
            if (!methods.navIsContained) {
              offTimer = setTimeout(function () {
                $nextMenu.removeClass(subListCls);
              }, delay);
            }
          }).click(function (e) {
            e.preventDefault();
          });
          // make when hovering over the sublinks it won't collapse
          $nextMenu.mouseover(function () {
            if (!methods.navIsContained) {
              clearTimeout(offTimer);
              $nextMenu.addClass(subListCls);
            }
          }).mouseleave(function () {
            if (!methods.navIsContained) {
              offTimer = setTimeout(function () {
                $nextMenu.removeClass(subListCls);
              }, delay);
            }
          });
        });
      },
      init: function init() {
        this.adjustNavSize();
        this.setDropDowns();
        this.createMobileMenu();
        this.setHamburger();
      }
    };
    $window.on('resize', methods.onResize);
    methods.init();
    return this;
  };
})(jQuery);