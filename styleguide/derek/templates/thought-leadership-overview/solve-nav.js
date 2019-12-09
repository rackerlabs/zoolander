(($) => {
  $.fn.solveNav = function solveNav() {
    const $nav = $(this);
    const $window = $(window);
    const $dropDowns = $nav.find('.rsTl-nav-ddLink');
    const $linkList = $nav.find('.rsTl-nav-list');
    const $hamburger = $nav.find('.rsTl-nav-hamburgerBtn');
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
        $linkList.css('opacity', 0);
        clearTimeout(methods.resizeTimer);
        methods.resizeTimer = setTimeout(methods.adjustNavSize, 100);
      },
      adjustNavSize() {
        $linkList.css('opacity', 1);
        $nav.removeClass('rsTl-nav-contained');
        const lines = methods.getLinkLines($linkList.get(0));
        if (lines < 3) {
          methods.navIsContained = false;
          if (methods.$mobileNav && methods.$mobileNav.is(':visible')) {
            methods.$mobileNav.hide();
            $hamburger.removeClass('rsTl-nav-hamburgerOpen');
          }
          $('.rsTl-feature-header').css('margin-top', '');
        } else {
          methods.navIsContained = true;
          $nav.addClass('rsTl-nav-contained');
          // we need to adjust the header under the nav
          const $navHeight = $nav.outerHeight();
          $('.rsTl-feature-header').css('margin-top', `${$navHeight}px`);
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
      init() {
        this.adjustNavSize();
        this.setDropDowns();
        this.createMobileMenu();
        this.setHamburger();
        this.onResize();
      },
    };
    $window.on('resize', methods.onResize);
    methods.init();
    return this;
  };
})(jQuery);
