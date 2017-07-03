describe('Zoolander Filter Bar Module', () => {
  beforeEach(() => {
    jQuery.fn.rsFilterBar();
  });

  it('is defined', () => {
    expect(Zoolander.rsFilterBar).to.not.be.undefined;
    expect(Zoolander.rsFilterBar.calcInBounds).to.not.be.undefined;
    expect(Zoolander.rsFilterBar.calcAtBottom).to.not.be.undefined;
  });

  describe('calcInBounds ', () => {
    it('should return false when scrolled to bottom of page', () => {
      const dimensions = {
        filterBarOffsetTop: 377,
        filterBarOuterHeight: 4768,
        filterFormOffsetTop: 4974,
        filterFormOuterHeight: 92,
        isInBounds: false,
        mainNavHeight: 111,
        windowTop: 4853,
      };
      expect(Zoolander.rsFilterBar.calcInBounds(dimensions)).to.be.false;
    });

    it('should return false when scrolled to top of page', () => {
      const dimensions = {
        filterBarOffsetTop: 377,
        filterBarOuterHeight: 4768,
        filterFormOffsetTop: 397,
        filterFormOuterHeight: 92,
        isInBounds: false,
        mainNavHeight: 111,
        windowTop: 0,
      };
      expect(Zoolander.rsFilterBar.calcInBounds(dimensions)).to.be.false;
    });

    it('should return true when smaller breakpoint reached', () => {
      const dimensions = {
        filterBarOffsetTop: 364,
        filterBarOuterHeight: 43,
        filterFormOffsetTop: 0,
        filterFormOuterHeight: 84,
        isInBounds: false,
        mainNavHeight: 101,
        windowTop: 0,
      };
      expect(Zoolander.rsFilterBar.calcInBounds(dimensions)).to.be.true;
    });

    it('should return false when smaller breakpoint reached and scrolled to bottom of page', () => {
      const dimensions = {
        filterBarOffsetTop: 364,
        filterBarOuterHeight: 43,
        filterFormOffsetTop: 6417,
        filterFormOuterHeight: 84,
        isInBounds: false,
        mainNavHeight: 101,
        windowTop: 6417,
      };
      expect(Zoolander.rsFilterBar.calcInBounds(dimensions)).to.be.false;
    });

    it('should return false', () => {
      const dimensions = {
        filterBarOffsetTop: 0,
        filterBarOuterHeight: 0,
        filterFormOffsetTop: 0,
        filterFormOuterHeight: 0,
        isInBounds: false,
        mainNavHeight: 0,
        windowTop: 0,
      };
      expect(Zoolander.rsFilterBar.calcInBounds(dimensions)).to.be.false;
    });
  });

  describe('calcAtBottom ', () => {
    it('should return true when scrolled to bottom of page', () => {
      const dimensions = {
        filterBarOffsetTop: 377,
        filterBarOuterHeight: 4768,
        filterFormOffsetTop: 5042,
        filterFormOuterHeight: 92,
        isInBounds: false,
        mainNavHeight: 111,
        windowTop: 4933,
      };
      expect(Zoolander.rsFilterBar.calcAtBottom(dimensions)).to.be.true;
    });

    it('should return false when scrolled to top of page', () => {
      const dimensions = {
        filterBarOffsetTop: 377,
        filterBarOuterHeight: 4768,
        filterFormOffsetTop: 397,
        filterFormOuterHeight: 92,
        isInBounds: false,
        mainNavHeight: 111,
        windowTop: 0,
      };
      expect(Zoolander.rsFilterBar.calcAtBottom(dimensions)).to.be.false;
    });

    it('small screen, scrolled to top should return false', () => {
      const dimensions = {
        filterBarOffsetTop: 364,
        filterBarOuterHeight: 43,
        filterFormOffsetTop: 0,
        filterFormOuterHeight: 84,
        isInBounds: false,
        mainNavHeight: 101,
        windowTop: 0,
      };
      expect(Zoolander.rsFilterBar.calcAtBottom(dimensions)).to.be.false;
    });

    it('small screen, scrolled to bottom should return true', () => {
      const dimensions = {
        filterBarOffsetTop: 364,
        filterBarOuterHeight: 43,
        filterFormOffsetTop: 6388,
        filterFormOuterHeight: 84,
        isInBounds: false,
        mainNavHeight: 101,
        windowTop: 6388,
      };
      expect(Zoolander.rsFilterBar.calcAtBottom(dimensions)).to.be.true;
    });
  });
});
