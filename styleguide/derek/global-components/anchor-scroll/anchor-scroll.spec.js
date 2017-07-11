describe('Anchor click scroll', () => {
  it('should subtract nav from top offset', () => {
    $('body').prepend('<a href="#scrollel" class="rsAnchor-scroll">Click Me</a>');
    const dimensions = {
      nav: 100,
      el: $('#scrollel'),
      top: 200,
    };
    const $el = $('.rsAnchor-scroll');
    $el.anchorScroll();
    expect($el.anchorScroll.calcTopScroll(dimensions)).to.eql(dimensions.top - dimensions.nav);
  });
});
