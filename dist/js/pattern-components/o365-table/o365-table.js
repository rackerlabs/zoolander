'use strict';

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
(function ($) {
  $.fn.o365Table = function o365Table(options) {
    var methods = {
      buffer: 0,
      isIE: function isIE() {
        return document.documentMode || /Edge/.test(navigator.userAgent);
      },
      makeBuffer: function makeBuffer(els) {
        var h = 0;
        $.each(els, function (i, el) {
          h += $(el).outerHeight();
        });
        this.buffer = h;
      },
      resize: function resize(data, o) {
        methods.setWidth(data);
        methods.locateTable(data, o);
      },
      setWidth: function setWidth(data) {
        var $wd = data.$header.outerWidth() + data.border;
        return data.$stickyTable.css({
          width: $wd + 'px'
        });
      },
      buildMobile: function buildMobile(data, o) {
        data.$mobileTable.insertAfter(data.$table);
        // take each table header and build the mobile containers
        data.$header.find('.rsPricingTable-head-th').each(function buildMobile() {
          var $this = $(this);
          var $mhead = $this.clone(true);
          var $mobileRow = $('<tr class="rsPricingTable-mobile-row"></tr>');
          $mobileRow = $mobileRow.append($mhead);
          data.$mobileTable.append($mobileRow);
        });

        // find each row of data to append to each mobile header
        data.$table.find('.rsPricingTable-body-tr').each(function buildMobile() {
          var $row = $(this);
          $row.find('td').each(function makeData() {
            var $td = $(this);
            var $newTd = $td.clone(true);
            var tdIndex = $td.index();
            var $tdRow = data.$mobileTable.find('.rsPricingTable-mobile-row').eq(tdIndex);
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
          var $mobileRow = data.$mobileTable.find('.rsPricingTable-mobile-row');
          var $mobileHeaderRow = $mobileRow.eq(0);
          $mobileRow.each(function buildLabels() {
            var $row = $(this);
            var $labels = $mobileHeaderRow.find('.rsPricingTable-body-td');
            if ($row.index() !== 0) {
              $row.find('td').each(function label() {
                var $td = $(this);
                $td.prepend('<strong class="rsPricingTable-mobile-label">\n                    ' + $labels.eq($td.index() - 1).html() + '\n                  </strong>');
              });
            }
          });
        }
      },
      addHiddenTable: function addHiddenTable(data) {
        data.$stickyTable.insertBefore(data.$table);
        this.setWidth(data);
        return data.$stickyTable.css({
          top: this.buffer,
          zIndex: '-1',
          visibility: 'hidden'
        });
      },
      stickTable: function stickTable(data) {
        data.$header.css({
          visibility: 'hidden'
        });
        data.$stickyTable.css({
          transform: 'translateY(0px)',
          visibility: 'visible',
          zIndex: '15'
        });
        data.$stickyTable.addClass('rsPricingTable-isStuck');
        data.$table.addClass('rsPricingTable-isStuck');
      },
      unStickTable: function unStickTable(data) {
        data.$header.css({
          visibility: 'visible'
        });
        data.$stickyTable.css({
          visibility: 'hidden',
          zIndex: '-1'
        });
        data.$stickyTable.removeClass('rsPricingTable-isStuck');
        data.$table.removeClass('rsPricingTable-isStuck');
      },
      getYcoords: function getYcoords(p) {
        return -(p.winTop - p.tableBottom - p.tBorder * 2);
      },
      locateTable: function locateTable(data, o) {
        // only run this on a certain screen size
        if (data.$win.outerWidth() > o.minScreen) {
          var winTop = Math.round(data.$win.scrollTop());
          var tableTop = data.$header.offset().top - methods.buffer;
          var tableBottom = tableTop + data.$tableBody.outerHeight();
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
            var tBorder = data.border;
            var transform = 'translateY(' + methods.getYcoords({
              winTop: winTop,
              tableBottom: tableBottom,
              tBorder: tBorder
            }) + 'px)';
            // make sure this won't run if in a hidden tab
            if (o.inTabs && data.$tab.is(':visible')) {
              methods.stickTable(data);
            } else if (!o.inTabs) {
              methods.stickTable(data);
            }
            data.$stickyTable.css({
              transform: transform
            });
          } else {
            data.$stickyTable.css({
              transform: 'translateY(0px)'
            });
          }
        } else {
          methods.unStickTable(data);
        }
      }
    };
    // loop each table and run
    $(this).each(function init() {
      var override = methods.isIE() ? ' rsPricingTable-borderSep' : '';
      var $table = $(this);
      var $header = $table.find('.rsPricingTable-head');
      var $stickyTable = $('<table class="rsPricingTable-sticky' + override + '">' + $header.html() + '</table>');
      var $mobileTable = $('<table class="rsPricingTable-mobile"></table>');
      var $tableBody = $table.find('.rsPricingTable-body');
      var $win = $(window);
      var resize = null;
      var border = parseInt($table.css('borderWidth'), 10);
      border = $.isNumeric(border) ? border * 2 : 2;
      // data of elements we need to use as payloads
      var data = {
        $table: $table,
        $header: $header,
        $stickyTable: $stickyTable,
        $mobileTable: $mobileTable,
        $win: $win,
        $tableBody: $tableBody,
        border: border
      };
      // set defaults in case no options are passed
      var defaults = {
        minScreen: 991,
        fixedElements: [],
        labelFirstCol: false,
        inTabs: false
      };
      var opts = $.extend(true, {}, defaults, options);
      // find the corresponding tab if in one
      if (opts.inTabs) {
        data.$tab = $table.closest('.tab-pane');
      }
      // init all the needed methods
      methods.makeBuffer(opts.fixedElements);
      methods.addHiddenTable(data);
      methods.buildMobile(data, opts);
      methods.locateTable(data, opts);
      $win.on('scroll', function () {
        methods.locateTable(data, opts);
      });
      $win.on('resize', function () {
        clearTimeout(resize);
        resize = setTimeout(function () {
          methods.resize(data, opts);
        }, 250);
      });
    });
    this.o365Table.test = methods;
    return this;
  };
})(jQuery);