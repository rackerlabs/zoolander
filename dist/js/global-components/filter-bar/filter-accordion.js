'use strict';

// Filter bar plugin
(function ($) {
  $.fn.rsFilterBarAccordion = function rsFilterBarAccordion() {
    var $filterBar = $(this);
    var $window = $(window);
    var activeClass = 'rsFilter-sideBar-active';
    var contentClass = '.rsFilter-sideBar-accItemContent';
    var labelClass = '.rsFilter-sideBar-accLabel';
    var $item = $filterBar.find(labelClass);
    var $hamburger = $filterBar.find('.rsFilter-sideBar-hamburger');
    var $formContent = $filterBar.find('.rsFilter-sideBar-content');
    var frameRate = 150;

    var actions = {
      openActive: function openActive($el) {
        // close all siblings
        $.when(this.closeAll($el)).done(function () {
          // then open content for clicked item
          var $content = $el.next(contentClass);
          $content.slideToggle(frameRate, function () {
            if ($content.is(':visible')) {
              $el.addClass(activeClass);
            } else {
              $el.removeClass(activeClass);
            }
          });
        });
      },
      closeAll: function closeAll($el) {
        // some promise here
        var $siblings = $el.parent().siblings();
        $siblings.find(labelClass).removeClass(activeClass);
        $siblings.find(contentClass).slideUp(frameRate);
      },
      toggleForm: function toggleForm() {
        $formContent.slideToggle(frameRate);
      },

      resizeTimer: null,
      resetForm: function resetForm() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function () {
          if ($window.outerWidth() >= 992 && !$formContent.is(':visible')) {
            $formContent.show();
          }
        }, 100);
      }
    };

    // bind click events to each section
    $item.click(function (e) {
      e.stopPropagation();
      actions.openActive($(e.currentTarget));
    });
    // bind click for hamburger in mobile
    $hamburger.click(function (e) {
      e.preventDefault();
      actions.toggleForm();
    });
    // show form again if coming from mobile -> desktop and form has been collapsed
    $window.resize(actions.resetForm);

    // set first accordion item active
    var $first = $filterBar.find('.rsFilter-sideBar-accItem').first();
    $first.find('.rsFilter-sideBar-accLabel').addClass('rsFilter-sideBar-active');
    $first.find('.rsFilter-sideBar-accItemContent').show();

    return this;
  };
})(jQuery);