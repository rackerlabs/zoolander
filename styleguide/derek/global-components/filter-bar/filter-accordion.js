// Filter bar plugin
(($) => {
  $.fn.rsFilterBarAccordion = function rsFilterBarAccordion() {
    const $filterBar = $(this);
    const $window = $(window);
    const activeClass = 'rsFilter-sideBar-active';
    const contentClass = '.rsFilter-sideBar-accItemContent';
    const labelClass = '.rsFilter-sideBar-accLabel';
    const $item = $filterBar.find(labelClass);
    const $hamburger = $filterBar.find('.rsFilter-sideBar-hamburger');
    const $formContent = $filterBar.find('.rsFilter-sideBar-content');
    const frameRate = 150;

    const actions = {
      openActive($el) {
        // close all siblings
        $.when(this.closeAll($el)).done(() => {
          // then open content for clicked item
          const $content = $el.next(contentClass);
          $content.slideToggle(frameRate, () => {
            if ($content.is(':visible')) {
              $el.addClass(activeClass);
            } else {
              $el.removeClass(activeClass);
            }
          });
        });
      },
      closeAll($el) {
        // some promise here
        const $siblings = $el.parent().siblings();
        $siblings.find(labelClass).removeClass(activeClass);
        $siblings.find(contentClass).slideUp(frameRate);
      },
      toggleForm() {
        $formContent.slideToggle(frameRate);
      },
      resizeTimer: null,
      resetForm() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          if ($window.outerWidth() >= 992 && !$formContent.is(':visible')) {
            $formContent.show();
          }
        }, 100);
      },
    };

    // bind click events to each section
    $item.click((e) => {
      e.stopPropagation();
      actions.openActive($(e.currentTarget));
    });
    // bind click for hamburger in mobile
    $hamburger.click((e) => {
      e.preventDefault();
      actions.toggleForm();
    });
    // show form again if coming from mobile -> desktop and form has been collapsed
    $window.resize(actions.resetForm);

    // set first accordion item active
    const $first = $filterBar.find('.rsFilter-sideBar-accItem').first();
    $first.find('.rsFilter-sideBar-accLabel').addClass('rsFilter-sideBar-active');
    $first.find('.rsFilter-sideBar-accItemContent').show();

    return this;
  };
})(jQuery);
