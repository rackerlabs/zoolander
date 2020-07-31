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

(($) => {
  $.fn.rsInteractiveMap = function initPlugin(opts) {
    const $map = $(this);
    const $nav = $('.navbar-fixed-top');

    const actions = {
      mapSelector: null,
      buildMap(config) {
        const { circles } = config;
        for (let i = 0; i < circles.length; i += 1) {
          const circle = circles[i];
          const $template = $(`
          <div class="rsMap-${circle.type}" style="top:${circle.top};left:${circle.left};">
            <div class="rsMap-inner">
              <div class="rsMap-toolTip">
                <span class="rsMap-toolTip-header">${circle.tipTitle}</span>
                <p class="rsMap-toolTip-body">${circle.tipBody}</p>
                <span class="rsMap-toolTip-footer">${circle.tipFooter}</span>
                <div class="rsMap-toolTip-arrow rsMap-arrow-bottom"></div>
              </div>
              <div class="rsMap-${circle.type}-circle">${circle.items}</div>
            </div>
          </div>`);
          this.mapSelector.append($template);
          this.hoverCircle($template, circle.type);
        }
        // inject mobile div & image
        const $mobile = $('<div class="rsMap-mobile"></div>');
        $mobile.insertBefore(this.mapSelector).append(`<img src="${config.mobileImage}" class="rsMap-mobileImage"/>`);
      },
      positionTip($el, type, offScreen) {
        const $tipContainer = $el.find('.rsMap-toolTip');
        const $circle = $el.find(`.rsMap-${type}-circle`);
        const tipHeight = $tipContainer.outerHeight();
        const tipWidth = $tipContainer.outerWidth();
        const circleWidth = $circle.outerWidth();
        const topPayload = { h: tipHeight, c: circleWidth };
        const leftPayload = { w: tipWidth, c: circleWidth };
        // we need to make sure that the tip box is always
        // centered above bubble even if dimensions change
        if (offScreen) {
          topPayload.offScreen = offScreen;
          leftPayload.offScreen = offScreen;
        }
        const coords = {
          top: this.setTopCoords(topPayload),
          left: this.setLeftCoords(leftPayload),
        };
        $tipContainer.css(coords);
      },
      isOffScreen(el, extra) {
        const style = el.get(0).getBoundingClientRect();
        return style.y < (0 + extra);
      },
      setTopCoords(data) {
        // this will calculate the correct top val to place the tipBody
        let top;
        if (data.offScreen) {
          top = -((data.h / 2) - (data.c / 2));
        } else {
          top = -(data.h + 15);
        }
        return top;
      },
      setLeftCoords(data) {
        // this will calculate the correct left val to place the tipBody
        let left;
        if (data.offScreen) {
          left = data.c + 15;
        } else {
          left = -((data.w / 2) - (data.c / 2));
        }
        return left;
      },
      hoverTimeout: null,
      hoverCircle($el, type) {
        const $tipContainer = $el.find('.rsMap-toolTip');
        const $tipArrow = $tipContainer.find('.rsMap-toolTip-arrow');
        // reset tip callback
        const resetTip = () => {
          $('.rsMap-inner').parent().css('z-index', '');
          $tipContainer.attr('style', '');
          $tipArrow.removeClass('rsMap-arrow-left')
            .addClass('rsMap-arrow-bottom');
        };
        // we need to kill the timeout asap when hovered over the tool tip
        $tipContainer.hover(() => {
          clearTimeout(this.hoverTimeout);
        });
        // bubbles need the hover intent plugin so users don't accidentally hover
        // over a bubble on the way to hover the tip
        hoverintent($el.get(0), () => {
          clearTimeout(this.hoverTimeout);
          // hide any open bubbles on the page except active one, then show hovered tip
          // this will check to make sure the active is not hiding &  avoid a flicker on hover
          $('.rsMap-toolTip').each(function hideAll() {
            const $this = $(this);
            const $wrapper = $this.parent().parent();
            const $index = $wrapper.index();
            const $elIndex = $el.index();
            if ($index !== $elIndex) {
              $this.hide();
              $wrapper.css('z-index', '');
            }
          });
          $el.css('z-index', 5);
          $tipContainer.fadeIn(200, () => {
            $el.css('z-index', 5);
          });
          this.positionTip($el, type);
          $tipArrow.removeClass('rsMap-arrow-left')
            .addClass('rsMap-arrow-bottom');
          // if tip is off screen & covered by nav, reposition to the side.
          if (this.isOffScreen($tipContainer, $nav.outerHeight())) {
            this.positionTip($el, type, true);
            $tipArrow.removeClass('rsMap-arrow-bottom')
              .addClass('rsMap-arrow-left');
          }
        }, () => {
          this.hoverTimeout = setTimeout(resetTip, 500);
        });
      },
      init(config, map) {
        this.mapSelector = map;
        this.buildMap(config);
      },
    };

    // fallback default config if none is passed
    const defaults = {
      mobileImage: 'https://0fb555c65f288d09a992-a2085a232a1d2a458a641f48ff12bf08.ssl.cf2.rackcdn.com/mobile-map.png',
      circles: [
        {
          type: 'dataCenter',
          items: 1,
          tipTitle: 'Generic Title',
          tipBody: 'Generic Body Text',
          tipFooter: 'Generic Footer Text',
          top: '100px',
          left: '100px',
        },
      ],
    };
    // check for passed in options
    let options;
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
