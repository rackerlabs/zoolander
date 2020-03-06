(($) => {
  $.fn.solveNav = function solveNav(params) {
    const defaults = {
      classPrefix: 'rsTl',
    };
    const $options = $.extend(true, {}, defaults, params);
    const prefix = `${$options.classPrefix}`;
    const $nav = $(this);
    const $window = $(window);
    const $dropDowns = $nav.find(`.${prefix}-nav-ddLink`);
    const $linkList = $nav.find(`.${prefix}-nav-list`);
    const $hamburger = $nav.find(`.${prefix}-nav-hamburgerBtn`);
    const $content = $(`.${prefix}-content`);
    const subListCls = `${prefix}-nav-subList-show`;
    const methods = {
      $mobileNav: null,
      navIsContained: false,
      setHamburger() {
        $hamburger.click((e) => {
          e.preventDefault();
          methods.$mobileNav.slideToggle(100);
          $hamburger.toggleClass(`${prefix}-nav-hamburgerOpen`);
        });
      },
      getLinkLines(target) {
        const style = window.getComputedStyle(target, null);
        let height = parseInt(style.getPropertyValue('height'), 10);
        const fontSize = parseInt(style.getPropertyValue('font-size'), 10);
        let lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
        const boxSizing = style.getPropertyValue('box-sizing');
        if ($.isNumeric(lineHeight)) {
          lineHeight = fontSize * 1.2;
        }
        if (boxSizing === 'border-box') {
          const paddingTop = parseInt(style.getPropertyValue('padding-top'), 10);
          const paddingBottom = parseInt(style.getPropertyValue('padding-bottom'), 10);
          const borderTop = parseInt(style.getPropertyValue('border-top-width'), 10);
          const borderBottom = parseInt(style.getPropertyValue('border-bottom-width'), 10);
          height = height - paddingTop - paddingBottom - borderTop - borderBottom;
        }
        const lines = Math.ceil(height / lineHeight);
        return lines;
      },
      resizeTimer: null,
      onResize() {
        clearTimeout(methods.resizeTimer);
        methods.resizeTimer = setTimeout(() => {
          methods.adjustNavSize();
          methods.setSticky();
        },
        20);
      },
      adjustNavSize() {
        $nav.removeClass(`${prefix}-nav-contained`);
        if (methods.$containedLogos) {
          methods.$containedLogos.removeClass(`${prefix}-nav-contained`);
        }
        const lines = methods.getLinkLines($linkList.get(0));
        if (lines < 3) {
          methods.navIsContained = false;
          if (methods.$mobileNav && methods.$mobileNav.is(':visible')) {
            methods.$mobileNav.hide();
            $hamburger.removeClass(`${prefix}-nav-hamburgerOpen`);
          }
        } else {
          methods.navIsContained = true;
          $nav.addClass(`${prefix}-nav-contained`);
          if (methods.$containedLogos) {
            methods.$containedLogos.addClass(`${prefix}-nav-contained`);
          }
        }
      },
      createMobileMenu() {
        const $navListClone = $linkList.clone();
        $navListClone.addClass(`${prefix}-nav-list-contained`);
        $navListClone.removeClass(`${prefix}-nav-list`);
        $nav.append($navListClone);
        $navListClone.find(`.${prefix}-nav-ddLink`).each(function c() {
          const $ddLink = $(this);
          const $nextMenu = $ddLink.next(`.${prefix}-nav-subList`);
          $ddLink.click((e) => {
            e.preventDefault();
            $ddLink.toggleClass(`${prefix}-nav-mobileOpen`);
            $nextMenu.slideToggle(100);
          });
        });
        methods.$mobileNav = $navListClone;
      },
      setDropDowns() {
        $dropDowns.each(function set() {
          const $ddLink = $(this);
          const $nextMenu = $ddLink.next(`.${prefix}-nav-subList`);
          const delay = 400;
          let offTimer;
          $ddLink.mouseover(() => {
            if (!methods.navIsContained) {
              clearTimeout(offTimer);
              $nextMenu.addClass(subListCls);
            }
          }).mouseleave(() => {
            if (!methods.navIsContained) {
              offTimer = setTimeout(() => {
                $nextMenu.removeClass(subListCls);
              }, delay);
            }
          }).click((e) => {
            e.preventDefault();
          });
          // make when hovering over the sublinks it won't collapse
          $nextMenu.mouseover(() => {
            if (!methods.navIsContained) {
              clearTimeout(offTimer);
              $nextMenu.addClass(subListCls);
            }
          }).mouseleave(() => {
            if (!methods.navIsContained) {
              offTimer = setTimeout(() => {
                $nextMenu.removeClass(subListCls);
              }, delay);
            }
          });
        });
      },
      $containedLogos: null,
      copyLogos() {
        const $logoWrapper = $(`<div class="${prefix}-nav-logoWrapper"></div>`);
        const $sponser = $nav.find(`.${prefix}-nav-sponsor`).clone();
        const $rsLogo = $nav.find(`.${prefix}-nav-rsLogo`).clone();

        let logoCt = 0;

        if ($rsLogo.length > 0) {
          $logoWrapper.append($rsLogo);
          logoCt += 1;
        }
        if ($sponser.length > 0) {
          $logoWrapper.append($sponser);
          logoCt += 1;
        }

        if (logoCt === 1) {
          $logoWrapper.addClass(`${prefix}-nav-logoWrapperSingleLogo`);
        }

        if (logoCt > 0) {
          $logoWrapper.insertBefore($nav);
          methods.$containedLogos = $logoWrapper;
        }
      },
      startingLocation: null,
      setSticky(e) {
        if ($nav.hasClass(`${prefix}-nav-fixed`)) {
          $nav.removeClass(`${prefix}-nav-fixed`);
        }
        if (methods.startingLocation === null || !e) {
          methods.startingLocation = ~~($nav.offset().top); // eslint-disable-line
        }
        if (window.pageYOffset >= methods.startingLocation) {
          // only add class if it's not there
          if (!$nav.hasClass(`${prefix}-nav-fixed`)) {
            $nav.addClass(`${prefix}-nav-fixed`);
          }
        }
      },
      adjustContent() {
        if (!$nav.hasClass(`${prefix}-nav-contained`) && $nav.hasClass(`${prefix}-nav-fixed`)) {
          $content.css('margin-top', `${$nav.outerHeight()}px`);
        } else {
          $content.css('margin-top', '');
        }
      },
      observeStyle() {
        // here we setup an observer to bump down the solve page
        // content whenever it's fixed and not contained
        methods.adjustContent();
        const listener = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
              methods.adjustContent();
            }
          });
        });
        return listener.observe($nav.get(0), {
          attributes: true,
          attributeFilter: ['class'],
        });
      },
      init() {
        this.copyLogos();
        this.adjustNavSize();
        this.setDropDowns();
        this.createMobileMenu();
        this.setHamburger();
        this.setSticky();
        this.observeStyle();
      },
    };
    $window.on('resize', methods.onResize);
    $window.on('scroll', methods.setSticky);
    methods.init();
    return this;
  };
})(jQuery);
