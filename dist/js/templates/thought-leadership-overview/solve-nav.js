"use strict";

(function ($) {
  $.fn.solveNav = function solveNav(params) {
    var defaults = {
      classPrefix: 'rsTl'
    };
    var $options = $.extend(true, {}, defaults, params);
    var prefix = "".concat($options.classPrefix);
    var $nav = $(this);
    var $window = $(window);
    var $dropDowns = $nav.find(".".concat(prefix, "-nav-ddLink"));
    var $linkList = $nav.find(".".concat(prefix, "-nav-list"));
    var $hamburger = $nav.find(".".concat(prefix, "-nav-hamburgerBtn"));
    var $content = $(".".concat(prefix, "-content"));
    var subListCls = "".concat(prefix, "-nav-subList-show");
    var methods = {
      $mobileNav: null,
      navIsContained: false,
      setHamburger: function setHamburger() {
        $hamburger.click(function (e) {
          e.preventDefault();
          methods.$mobileNav.slideToggle(100);
          $hamburger.toggleClass("".concat(prefix, "-nav-hamburgerOpen"));
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
        clearTimeout(methods.resizeTimer);
        methods.resizeTimer = setTimeout(function () {
          methods.adjustNavSize();
          methods.setSticky();
        }, 20);
      },
      adjustNavSize: function adjustNavSize() {
        $nav.removeClass("".concat(prefix, "-nav-contained"));

        if (methods.$containedLogos) {
          methods.$containedLogos.removeClass("".concat(prefix, "-nav-contained"));
        }

        var lines = methods.getLinkLines($linkList.get(0));

        if (lines < 3) {
          methods.navIsContained = false;

          if (methods.$mobileNav && methods.$mobileNav.is(':visible')) {
            methods.$mobileNav.hide();
            $hamburger.removeClass("".concat(prefix, "-nav-hamburgerOpen"));
          }
        } else {
          methods.navIsContained = true;
          $nav.addClass("".concat(prefix, "-nav-contained"));

          if (methods.$containedLogos) {
            methods.$containedLogos.addClass("".concat(prefix, "-nav-contained"));
          }
        }
      },
      createMobileMenu: function createMobileMenu() {
        var $navListClone = $linkList.clone();
        $navListClone.addClass("".concat(prefix, "-nav-list-contained"));
        $navListClone.removeClass("".concat(prefix, "-nav-list"));
        $nav.append($navListClone);
        $navListClone.find(".".concat(prefix, "-nav-ddLink")).each(function c() {
          var $ddLink = $(this);
          var $nextMenu = $ddLink.next(".".concat(prefix, "-nav-subList"));
          $ddLink.click(function (e) {
            e.preventDefault();
            $ddLink.toggleClass("".concat(prefix, "-nav-mobileOpen"));
            $nextMenu.slideToggle(100);
          });
        });
        methods.$mobileNav = $navListClone;
      },
      setDropDowns: function setDropDowns() {
        $dropDowns.each(function set() {
          var $ddLink = $(this);
          var $nextMenu = $ddLink.next(".".concat(prefix, "-nav-subList"));
          var delay = 400;
          var offTimer;
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
          }); // make when hovering over the sublinks it won't collapse

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
      $containedLogos: null,
      copyLogos: function copyLogos() {
        var $logoWrapper = $("<div class=\"".concat(prefix, "-nav-logoWrapper\"></div>"));
        var $sponser = $nav.find(".".concat(prefix, "-nav-sponsor")).clone();
        var $rsLogo = $nav.find(".".concat(prefix, "-nav-rsLogo")).clone();
        var logoCt = 0;

        if ($rsLogo.length > 0) {
          $logoWrapper.append($rsLogo);
          logoCt += 1;
        }

        if ($sponser.length > 0) {
          $logoWrapper.append($sponser);
          logoCt += 1;
        }

        if (logoCt === 1) {
          $logoWrapper.addClass("".concat(prefix, "-nav-logoWrapperSingleLogo"));
        }

        if (logoCt > 0) {
          $logoWrapper.insertBefore($nav);
          methods.$containedLogos = $logoWrapper;
        }
      },
      startingLocation: null,
      setSticky: function setSticky(e) {
        if ($nav.hasClass("".concat(prefix, "-nav-fixed"))) {
          $nav.removeClass("".concat(prefix, "-nav-fixed"));
        }

        if (methods.startingLocation === null || !e) {
          methods.startingLocation = ~~$nav.offset().top; // eslint-disable-line
        }

        if (window.pageYOffset >= methods.startingLocation) {
          // only add class if it's not there
          if (!$nav.hasClass("".concat(prefix, "-nav-fixed"))) {
            $nav.addClass("".concat(prefix, "-nav-fixed"));
          }
        }
      },
      adjustContent: function adjustContent() {
        if (!$nav.hasClass("".concat(prefix, "-nav-contained")) && $nav.hasClass("".concat(prefix, "-nav-fixed"))) {
          $content.css('margin-top', "".concat($nav.outerHeight(), "px"));
        } else {
          $content.css('margin-top', '');
        }
      },
      observeStyle: function observeStyle() {
        // here we setup an observer to bump down the solve page
        // content whenever it's fixed and not contained
        methods.adjustContent();
        var listener = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'class') {
              methods.adjustContent();
            }
          });
        });
        return listener.observe($nav.get(0), {
          attributes: true,
          attributeFilter: ['class']
        });
      },
      init: function init() {
        this.copyLogos();
        this.adjustNavSize();
        this.setDropDowns();
        this.createMobileMenu();
        this.setHamburger();
        this.setSticky();
        this.observeStyle();
      }
    };
    $window.on('resize', methods.onResize);
    $window.on('scroll', methods.setSticky);
    methods.init();
    return this;
  };
})(jQuery);