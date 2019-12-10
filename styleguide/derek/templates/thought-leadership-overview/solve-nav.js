(($) => {
  $.fn.solveNav = function solveNav() {
    const $nav = $(this);
    const $window = $(window);
    const $dropDowns = $nav.find('.rsTl-nav-ddLink');
    const $linkList = $nav.find('.rsTl-nav-list');
    const $hamburger = $nav.find('.rsTl-nav-hamburgerBtn');
    const $content = $('.rsTl-content');
    const subListCls = 'rsTl-nav-subList-show';
    const methods = {
      $mobileNav: null,
      navIsContained: false,
      setHamburger() {
        $hamburger.click((e) => {
          e.preventDefault();
          methods.$mobileNav.slideToggle(100);
          $hamburger.toggleClass('rsTl-nav-hamburgerOpen');
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
        $nav.removeClass('rsTl-nav-contained');
        methods.$containedLogos.removeClass('rsTl-nav-contained');
        const lines = methods.getLinkLines($linkList.get(0));
        if (lines < 3) {
          methods.navIsContained = false;
          if (methods.$mobileNav && methods.$mobileNav.is(':visible')) {
            methods.$mobileNav.hide();
            $hamburger.removeClass('rsTl-nav-hamburgerOpen');
          }
        } else {
          methods.navIsContained = true;
          $nav.addClass('rsTl-nav-contained');
          methods.$containedLogos.addClass('rsTl-nav-contained');
        }
      },
      createMobileMenu() {
        const $navListClone = $linkList.clone();
        $navListClone.addClass('rsTl-nav-list-contained');
        $navListClone.removeClass('rsTl-nav-list');
        $nav.append($navListClone);
        $navListClone.find('.rsTl-nav-ddLink').each(function c() {
          const $ddLink = $(this);
          const $nextMenu = $ddLink.next('.rsTl-nav-subList');
          $ddLink.click((e) => {
            e.preventDefault();
            $ddLink.toggleClass('rsTl-nav-mobileOpen');
            $nextMenu.slideToggle(100);
          });
        });
        methods.$mobileNav = $navListClone;
      },
      setDropDowns() {
        $dropDowns.each(function set() {
          const $ddLink = $(this);
          const $nextMenu = $ddLink.next('.rsTl-nav-subList');
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
        const $logoWrapper = $('<div class="rsTl-nav-logoWrapper"></div>');
        const $sponser = $nav.find('.rsTl-nav-sponsor').clone();
        const $rsLogo = $nav.find('.rsTl-nav-rsLogo').clone();
        $logoWrapper.append($rsLogo);
        $logoWrapper.append($sponser);
        $logoWrapper.insertBefore($nav);
        methods.$containedLogos = $logoWrapper;
      },
      startingLocation: null,
      setSticky(e) {
        if ($nav.hasClass('rsTl-nav-fixed')) {
          $nav.removeClass('rsTl-nav-fixed');
        }
        if (methods.startingLocation === null || !e) {
          methods.startingLocation = ~~($nav.offset().top); // eslint-disable-line          
        }
        if (window.pageYOffset >= methods.startingLocation) {
          // only add class if it's not there
          if (!$nav.hasClass('rsTl-nav-fixed')) {
            $nav.addClass('rsTl-nav-fixed');
          }
        }
      },
      adjustContent() {
        if (!$nav.hasClass('rsTl-nav-contained') && $nav.hasClass('rsTl-nav-fixed')) {
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
