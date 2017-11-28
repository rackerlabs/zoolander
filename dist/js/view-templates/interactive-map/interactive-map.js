'use strict';

/* eslint spaced-comment: ["error", "always"] */
/* global hoverintent */
/**
 The Rackspace Interactive Map plugin can be built with an array of map circles.
 See below for parameter options passed through the config.
 * @param {string} circle.type - Options for this property are 'dataCenter', 'office', 'hub'.
 * @param {number} circle.items - The number of items in a bubble
 * @param {string} circle.tipTitle - accepts text and HTML
 * @param {string} circle.tipBody - accepts text and HTML
 * @param {string} circle.tipFooter - accepts text and HTML
 * @param {string} circle.top - px value of top position in the map
 * @param {string} circle.left - px value of left position in the map.
**/

(function ($) {
  $.fn.rsInteractiveMap = function initPlugin(opts) {
    var $map = $(this);
    var $nav = $('.navbar-fixed-top');

    var actions = {
      mapSelector: null,
      buildMap: function buildMap(config) {
        var circles = config.circles;
        for (var i = 0; i < circles.length; i += 1) {
          var circle = circles[i];
          var $template = $('\n          <div class="rsMap-' + circle.type + '" style="top:' + circle.top + ';left:' + circle.left + ';">\n            <div class="rsMap-inner">\n              <div class="rsMap-toolTip">\n                <span class="rsMap-toolTip-header">' + circle.tipTitle + '</span>\n                <p class="rsMap-toolTip-body">' + circle.tipBody + '</p>\n                <span class="rsMap-toolTip-footer">' + circle.tipFooter + '</span>\n                <div class="rsMap-toolTip-arrow rsMap-arrow-bottom"></div>\n              </div>\n              <div class="rsMap-' + circle.type + '-circle">' + circle.items + '</div>\n            </div>\n          </div>');
          this.mapSelector.append($template);
          this.hoverCircle($template, circle.type);
        }
        // inject mobile div & image
        var $mobile = $('<div class="rsMap-mobile"></div>');
        $mobile.insertBefore(this.mapSelector).append('<img src="' + config.mobileImage + '" class="rsMap-mobileImage"/>');
      },
      positionTip: function positionTip($el, type, offScreen) {
        var $tipContainer = $el.find('.rsMap-toolTip');
        var $circle = $el.find('.rsMap-' + type + '-circle');
        var tipHeight = $tipContainer.outerHeight();
        var tipWidth = $tipContainer.outerWidth();
        var circleWidth = $circle.outerWidth();
        var topPayload = { h: tipHeight, c: circleWidth };
        var leftPayload = { w: tipWidth, c: circleWidth };
        // we need to make sure that the tip box is always
        // centered above bubble even if dimensions change
        if (offScreen) {
          topPayload.offScreen = offScreen;
          leftPayload.offScreen = offScreen;
        }
        var coords = {
          top: this.setTopCoords(topPayload),
          left: this.setLeftCoords(leftPayload)
        };
        $tipContainer.css(coords);
      },
      isOffScreen: function isOffScreen(el, extra) {
        var style = el.get(0).getBoundingClientRect();
        return style.y < 0 + extra;
      },
      setTopCoords: function setTopCoords(data) {
        // this will calculate the correct top val to place the tipBody
        var top = void 0;
        if (data.offScreen) {
          top = -(data.h / 2 - data.c / 2);
        } else {
          top = -(data.h + 15);
        }
        return top;
      },
      setLeftCoords: function setLeftCoords(data) {
        // this will calculate the correct left val to place the tipBody
        var left = void 0;
        if (data.offScreen) {
          left = data.c + 15;
        } else {
          left = -(data.w / 2 - data.c / 2);
        }
        return left;
      },

      hoverTimeout: null,
      hoverCircle: function hoverCircle($el, type) {
        var _this = this;

        var $tipContainer = $el.find('.rsMap-toolTip');
        var $tipArrow = $tipContainer.find('.rsMap-toolTip-arrow');
        // reset tip callback
        var resetTip = function resetTip() {
          $('.rsMap-inner').parent().css('z-index', '');
          $tipContainer.attr('style', '');
          $tipArrow.removeClass('rsMap-arrow-left').addClass('rsMap-arrow-bottom');
        };
        // we need to kill the timeout asap when hovered over the tool tip
        $tipContainer.hover(function () {
          clearTimeout(_this.hoverTimeout);
        });
        // bubbles need the hover intent plugin so users don't accidentally hover
        // over a bubble on the way to hover the tip
        hoverintent($el.get(0), function () {
          clearTimeout(_this.hoverTimeout);
          // hide any open bubbles on the page except active one, then show hovered tip
          // this will check to make sure the active is not hiding &  avoid a flicker on hover
          $('.rsMap-toolTip').each(function hideAll() {
            var $this = $(this);
            var $wrapper = $this.parent().parent();
            var $index = $wrapper.index();
            var $elIndex = $el.index();
            if ($index !== $elIndex) {
              $this.hide();
              $wrapper.css('z-index', '');
            }
          });
          $el.css('z-index', 5);
          $tipContainer.fadeIn(200, function () {
            $el.css('z-index', 5);
          });
          _this.positionTip($el, type);
          $tipArrow.removeClass('rsMap-arrow-left').addClass('rsMap-arrow-bottom');
          // if tip is off screen & covered by nav, reposition to the side.
          if (_this.isOffScreen($tipContainer, $nav.outerHeight())) {
            _this.positionTip($el, type, true);
            $tipArrow.removeClass('rsMap-arrow-bottom').addClass('rsMap-arrow-left');
          }
        }, function () {
          _this.hoverTimeout = setTimeout(resetTip, 500);
        });
      },
      init: function init(config, map) {
        this.mapSelector = map;
        this.buildMap(config);
      }
    };

    // fallback default config if none is passed
    var defaults = {
      mobileImage: 'https://0fb555c65f288d09a992-a2085a232a1d2a458a641f48ff12bf08.ssl.cf2.rackcdn.com/mobile-map.png',
      circles: [{
        type: 'dataCenter',
        items: 1,
        tipTitle: 'Generic Title',
        tipBody: 'Generic Body Text',
        tipFooter: 'Generic Footer Text',
        top: '100px',
        left: '100px'
      }]
    };
    // check for passed in options
    var options = void 0;
    if (opts) {
      options = $.extend(true, {}, defaults, opts);
    } else {
      options = defaults;
    }
    // initiate the map with the options/config
    actions.init(options, $map);
    // for testing usage
    $.fn.rsInteractiveMap.test = actions;
    return this;
  };
})(jQuery);