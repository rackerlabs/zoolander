describe('Zoolander Interactive Map Plugin', () => {
  beforeEach(() => {
    $.fn.rsInteractiveMap();
  });

  it('map is defined', () => {
    expect($.fn.rsInteractiveMap).to.not.be.undefined;
    expect($.fn.rsInteractiveMap.test.setLeftCoords).to.not.be.undefined;
    expect($.fn.rsInteractiveMap.test.setTopCoords).to.not.be.undefined;
  });

  describe('calculate left value', () => {
    // standard left value
    it('should subtract half of circle width & tip width and return negative value', () => {
      const data = {
        w: 350,
        c: 28,
      };
      expect($.fn.rsInteractiveMap.test.setLeftCoords(data))
            .to.eql(-(161));
    });
    // off screen left value
    it('should add 15 to the circle width', () => {
      const data = {
        offScreen: true,
        c: 28,
      };
      expect($.fn.rsInteractiveMap.test.setLeftCoords(data))
            .to.eql(43);
    });
  });

  describe('calculate top value', () => {
    // standard top value
    it('should add 15 to height and return negative value', () => {
      const data = {
        h: 220,
      };
      expect($.fn.rsInteractiveMap.test.setTopCoords(data)).to.eql(-(235));
    });
    // off screen top value
    it('should subtract half of circle width & tip height and return negative value', () => {
      const data = {
        offScreen: true,
        h: 220,
        c: 28,
      };
      expect($.fn.rsInteractiveMap.test.setTopCoords(data)).to.eql(-(96));
    });
  });
});
