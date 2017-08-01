'use strict';

describe('Anchor click scroll', function () {
  it('should subtract nav from top offset', function () {
    $('body').prepend('<a href="#scrollel" class="rsAnchor-scroll">Click Me</a>');
    var dimensions = {
      nav: 100,
      el: $('#scrollel'),
      top: 200
    };
    var $el = $('.rsAnchor-scroll');
    $el.anchorScroll();
    expect($el.anchorScroll.calcTopScroll(dimensions)).to.eql(dimensions.top - dimensions.nav);
  });
});