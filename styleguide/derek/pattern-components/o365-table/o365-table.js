/* global navigator */
/**
 The Rackspace o365 table plugin takes an optional object parameter to define any fixed
 elements already in the DOM so that the plugin can calculate those heights. You can also
 pass an array of header titles that you want shown in mobile.
 * @param {number} minScreen - min screen size to run the sticky header (defaults to > 991)
 * @param {array} fixedElements - array of elements that're already fixed. ie ['.navbar-fixed-top']
 * @param {boolean} labelFirstCol - if you want the fist column to be used as labels in mobile
 * @param {boolean} inTabs - if table is in tabs, use this so certain calculations won't run
                              when not needed (default is false)
* */
(($) => {
  $.fn.o365Table = function o365Table(options) {
    const methods = {
      buffer: 0,
      isIE() {
        return document.documentMode || /Edge/.test(navigator.userAgent);
      },
      makeBuffer(els) {
        let h = 0;
        $.each(els, (i, el) => {
          h += $(el).outerHeight();
        });
        this.buffer = h;
      },
      resize(data, o) {
        methods.setWidth(data);
        methods.locateTable(data, o);
      },
      setWidth(data) {
        const $wd = data.$header.outerWidth() + data.border;
        return data.$stickyTable.css({
          width: `${$wd}px`,
        });
      },
      buildMobile(data, o) {
        data.$mobileTable.insertAfter(data.$table);
        // take each table header and build the mobile containers
        data.$header.find('.rsPricingTable-head-th').each(function buildMobile() {
          const $this = $(this);
          const $mhead = $this.clone(true);
          let $mobileRow = $('<tr class="rsPricingTable-mobile-row"></tr>');
          $mobileRow = $mobileRow.append($mhead);
          data.$mobileTable.append($mobileRow);
        });

        // find each row of data to append to each mobile header
        data.$table.find('.rsPricingTable-body-tr').each(function buildMobile() {
          const $row = $(this);
          $row.find('td').each(function makeData() {
            const $td = $(this);
            const $newTd = $td.clone(true);
            const tdIndex = $td.index();
            const $tdRow = data.$mobileTable.find('.rsPricingTable-mobile-row').eq(tdIndex);
            $tdRow.append($newTd);
            // if using first column data for mobile labels, we hide
            // the first column in mobile so there is no redundency.
            if (o.labelFirstCol && tdIndex === 0) {
              $tdRow.find('.rsPricingTable-body-td').hide();
            }
          });
        });

        // build mobile table lables if using first col as mobile label
        if (o.labelFirstCol) {
          const $mobileRow = data.$mobileTable.find('.rsPricingTable-mobile-row');
          const $mobileHeaderRow = $mobileRow.eq(0);
          $mobileRow.each(function buildLabels() {
            const $row = $(this);
            const $labels = $mobileHeaderRow.find('.rsPricingTable-body-td');
            if ($row.index() !== 0) {
              $row.find('td').each(function label() {
                const $td = $(this);
                $td.prepend(`<strong class="rsPricingTable-mobile-label">
                    ${$labels.eq($td.index() - 1).html()}
                  </strong>`);
              });
            }
          });
        }
      },
      addHiddenTable(data) {
        data.$stickyTable.insertBefore(data.$table);
        this.setWidth(data);
        return data.$stickyTable.css({
          top: this.buffer,
          zIndex: '-1',
          visibility: 'hidden',
        });
      },
      stickTable(data) {
        data.$header.css({
          visibility: 'hidden',
        });
        data.$stickyTable.css({
          transform: 'translateY(0px)',
          visibility: 'visible',
          zIndex: '15',
        });
        data.$stickyTable.addClass('rsPricingTable-isStuck');
        data.$table.addClass('rsPricingTable-isStuck');
      },
      unStickTable(data) {
        data.$header.css({
          visibility: 'visible',
        });
        data.$stickyTable.css({
          visibility: 'hidden',
          zIndex: '-1',
        });
        data.$stickyTable.removeClass('rsPricingTable-isStuck');
        data.$table.removeClass('rsPricingTable-isStuck');
      },
      getYcoords(p) {
        return -(p.winTop - p.tableBottom - (p.tBorder * 2));
      },
      locateTable(data, o) {
        // only run this on a certain screen size
        if (data.$win.outerWidth() > o.minScreen) {
          const winTop = Math.round(data.$win.scrollTop());
          const tableTop = data.$header.offset().top - methods.buffer;
          const tableBottom = tableTop + data.$tableBody.outerHeight();
          // once user scrolls to the top of the table, yet within the bottom of table
          methods.setWidth(data);
          if (winTop > tableTop && winTop < tableBottom) {
            // make sure this won't run if in a hidden tab
            if (o.inTabs && data.$tab.is(':visible')) {
              methods.stickTable(data, 'from bottom');
            } else if (!o.inTabs) {
              methods.stickTable(data, 'from bottom');
            }
            // methods.stickTable(data, 'at top');
          } else if (winTop < tableBottom) {
            // above table yet not to the top yet
            methods.unStickTable(data);
          } else if (winTop > tableBottom) {
            // once the table head has reached the bottom of the table and beyond
            // we want the header to appear like it is stuck to the bottom of table
            // as you scroll further down the page.
            const tBorder = data.border;
            const transform = `translateY(${methods.getYcoords({
              winTop,
              tableBottom,
              tBorder,
            })}px)`;
            // make sure this won't run if in a hidden tab
            if (o.inTabs && data.$tab.is(':visible')) {
              methods.stickTable(data);
            } else if (!o.inTabs) {
              methods.stickTable(data);
            }
            data.$stickyTable.css({
              transform,
            });
          } else {
            data.$stickyTable.css({
              transform: 'translateY(0px)',
            });
          }
        } else {
          methods.unStickTable(data);
        }
      },
    };
    // loop each table and run
    $(this).each(function init() {
      const override = methods.isIE() ? ' rsPricingTable-borderSep' : '';
      const $table = $(this);
      const $header = $table.find('.rsPricingTable-head');
      const $stickyTable = $(`<table class="rsPricingTable-sticky${override}">${$header.html()}</table>`);
      const $mobileTable = $('<table class="rsPricingTable-mobile"></table>');
      const $tableBody = $table.find('.rsPricingTable-body');
      const $win = $(window);
      let resize = null;
      let border = parseInt($table.css('borderWidth'), 10);
      border = $.isNumeric(border) ? border * 2 : 2;
      // data of elements we need to use as payloads
      const data = {
        $table,
        $header,
        $stickyTable,
        $mobileTable,
        $win,
        $tableBody,
        border,
      };
      // set defaults in case no options are passed
      const defaults = {
        minScreen: 991,
        fixedElements: [],
        labelFirstCol: false,
        inTabs: false,
      };
      const opts = $.extend(true, {}, defaults, options);
      // find the corresponding tab if in one
      if (opts.inTabs) {
        data.$tab = $table.closest('.tab-pane');
      }
      // init all the needed methods
      methods.makeBuffer(opts.fixedElements);
      methods.addHiddenTable(data);
      methods.buildMobile(data, opts);
      methods.locateTable(data, opts);
      $win.on('scroll', () => {
        methods.locateTable(data, opts);
      });
      $win.on('resize', () => {
        clearTimeout(resize);
        resize = setTimeout(() => {
          methods.resize(data, opts);
        }, 250);
      });
    });
    this.o365Table.test = methods;
    return this;
  };
})(jQuery);
