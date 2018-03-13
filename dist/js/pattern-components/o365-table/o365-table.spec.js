'use strict';

describe('Microsoft o365 Table Plugin', function () {
  beforeEach(function () {
    $.fn.o365Table();
  });

  it('table is defined', function () {
    expect($.fn.o365Table).to.not.be.undefined;
    expect($.fn.o365Table.test).to.not.be.undefined;
    expect($.fn.o365Table.test.getYcoords).to.not.be.undefined;
  });

  describe('calculate css translateY value', function () {
    // standard left value
    it('should subtract window offset top from table offset top and subtract 2 times the tables border width', function () {
      var data = {
        winTop: 500,
        tableBottom: 600,
        tBorder: 1
      };
      expect($.fn.o365Table.test.getYcoords(data)).to.eql(102);
    });
  });
});