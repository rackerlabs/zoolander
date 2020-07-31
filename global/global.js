jQuery(document).ready(($) => {
  $('.title a').click((e) => {
    const $el = $(e.currentTarget).parent().parent().find('.fa-arrow-right');

    $el.animate({ borderSpacing: +90 }, {
      step: (now) => {
        $el.css('-webkit-transform', `rotate(${now}deg)`)
          .css('-moz-transform', `rotate(${now}deg)`)
          .css('transform', `rotate(${now}deg)`);
      },
      duration: 'slow',
    }, 'linear');
  });
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
        const $td = $(this);
        const $mobileTitle = $td.find('.productTable-mobileTitle');
        if ($mobileTitle.length < 1) {
          const $index = $td.index();
          $(this).prepend(`<strong class="productTable-mobileTitle">${$cellTitle.eq($index).html()}</strong>`);
        }
      });
    });
    // allow this plugin to be chainable via jQuery
    return this;
  };
})(jQuery); // to protect and scope the JQuery alias = $

// initialize filter bar
jQuery(document).ready(($) => {
  if ($.fn.rsFilterBar) {
    $('.rsFilter-bar').rsFilterBar();
  }
});

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
