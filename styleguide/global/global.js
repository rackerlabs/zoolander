jQuery(document).ready(($) => {
  // main nav functionality
  const $topLevelDropDown = $('.navbar-topItem > .navbar-topLink-dropDown');
  const $navBurger = $('.navbar-hamburger');

  $navBurger.click((e) => {
    $navBurger.toggleClass('collapsed');

    // reset dopdown carrets if collapsing the menu
    if ($(e.currentTarget).hasClass('collapsed')) {
      $topLevelDropDown.removeClass('navbar-dropDown-triggerActive');
    }
  });

  // Toggle the open arrows on, top level, non drop down links
  $('.navbar-topLink:not(.navbar-topLink.navbar-topLink-dropDown)').click((e) => {
    const $el = $(e.currentTarget).parent();
    $el.siblings().removeClass('navbar-dropDown-triggerActive');
    $el.siblings().find('.navbar-tertiary-dropDownMenu').hide();
  });

  // Toggle arrows for top level drop down links
  $topLevelDropDown.click((e) => {
    const $el = $(e.currentTarget);
    const $siblings = $el.parent().siblings().find('.navbar-topLink-dropDown');
    const $tertiaryTrigger = $('.navbar-tertiary-dropDownTrigger span');
    $el.toggleClass('navbar-dropDown-triggerActive');
    // hides open tertiary navs and removes active class from other dropdowns
    $siblings.removeClass('navbar-dropDown-triggerActive');
    $tertiaryTrigger.removeClass('navbar-dropDown-triggerActive');
    $('.navbar-tertiary-dropDownMenu').hide();
  });

  // Special mobile functionality.
  function dropDownTrigger(trigger) {
    const $el = trigger;
    const $current = $el.find('.navbar-tertiary-dropDownMenu');
    const $siblings = $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-tertiary-dropDownMenu');
    $el.find('.navbar-dropDownLink').toggleClass('navbar-dropDown-triggerActive');
    // remove siblings open arrows
    $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-dropDownLink').removeClass('navbar-dropDown-triggerActive');

    $current.toggle();
    $siblings.hide();
  }

  // Indicate whether or not we're currently scrolling, or tapping on a link.
  // Fix for known bootstrap scroll height bug: https:// github.com/twbs/bootstrap/issues/12738
  function fixScrollBug() {
    $('.navbar-collapse').css({ maxHeight: $(window).height() - `${$('.navbar-header').height()}px` });
  }

  fixScrollBug();
  window.addEventListener('resize', fixScrollBug);

  // set the trigger to show drop downs on hover or clicks depending on viewport
  let $viewPort;
  $('.navbar-tertiary-dropDownTrigger')
    .click((e) => {
      e.stopPropagation();
      $viewPort = parseInt($(window).outerWidth(), 10);
      if ($viewPort <= 768) {
        dropDownTrigger($(e.currentTarget));
      }
    })
    .hover((e) => {
      $viewPort = parseInt($(window).outerWidth(), 10);
      if ($viewPort > 768) {
        dropDownTrigger($(e.currentTarget));
      }
    });

  // tab collapse
  $('.rsTabs').tabCollapse();
  jQuery('.title a').click((e) => {
    const $el = jQuery(e.currentTarget).parent().parent().find('.fa-arrow-right');

    $el.animate({ borderSpacing: +90 }, {
      step: (now) => {
        $el.css('-webkit-transform', `rotate(${now}deg)`)
          .css('-moz-transform', `rotate(${now}deg)`)
          .css('transform', `rotate(${now}deg)`);
      },
      duration: 'slow',
    }, 'linear');
  });

  $('#footer-accordion').tabCollapse();
});

// responsive table jQuery plugin
(($) => {
  $.fn.responsiveTable = function responsiveTable() {
    const $table = $(this);
    $table.each(function responsiveTableEach() {
      const $el = $(this);
      const $cellTitle = $el.find('.productTable-name');
      // place table head titles into each cell as labels
      $el.find('tbody tr td').each(function responsiveTableTdEach() {
        const $index = $(this).index();
        $(this).prepend(`<strong class="productTable-mobileTitle">${$cellTitle.eq($index).html()}</strong>`);
      });
    });
    // allow this plugin to be chainable via jQuery
    return this;
  };
})(jQuery); // to protect and scope the JQuery alias = $

// swatches copy button
(() => {
  function copy(e) {
    const t = e.target;
    const c = t.dataset.copytarget;
    const inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {
      inp.select();
      document.execCommand('copy');
      inp.blur();
    }
  }

  document.body.addEventListener('click', copy, true);
})();

(($) => {
  // initialize the responsive tables
  $('.productTable').responsiveTable();

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // dropdowns
  jQuery('.navZoolander-hasDropdown').unbind().click((e) => {
    e.preventDefault();
    const $el = jQuery(e.currentTarget);
    $el.next('.navZoolander-dropdown').slideToggle(200);
    $el.toggleClass('hasDropDown-active');
  });

  // Slide toggle the zoolander nav
  const zoolanderSlideBtn = $('.navZoolander-slideBtn');
  zoolanderSlideBtn.unbind().click((e) => {
    e.preventDefault();
    const $me = $(e.currentTarget);
    $me.toggleClass('navZoolander-slideBtn-collapsed');
    $me.next('.navZoolander-container').toggleClass('navZoolander-container-collapsed');
    $('.mainContainer').toggleClass('mainContainer-collapsed');
  });

  // Zoolander only solution for auto collapsing menu on example pages
  const url = window.location.pathname;
  if ((url.match(/\/derek\/incubation\//gi) && url !== '/derek/incubation/') || (url.match(/\/derek\/solutions\//gi) && url !== '/derek/solutions/') || (url.match(/\/derek\/templates\//gi) && url !== '/derek/templates/')) {
    zoolanderSlideBtn.trigger('click');
  }

  // search
  const searchContainer = $('#navbar-search');
  const searchSubmit = searchContainer.find('.navbar-icon-search');
  const searchBox = searchContainer.find('.navbar-search-input');

  searchSubmit.on('click', () => {
    if (searchContainer.hasClass('navbar-searchExpanded')) {
      searchContainer.removeClass('navbar-searchExpanded');
      searchBox.trigger('blur');
    } else {
      searchContainer.addClass('navbar-searchExpanded');
      searchBox.trigger('focus');
    }
  });
})(jQuery);
