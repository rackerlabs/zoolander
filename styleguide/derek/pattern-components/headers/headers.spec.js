describe('Test svgBannerGetAttributes()', () => {
  it('has the correct single line response for primaryBox', () => {
    const expectedResponse = {
      boxHeight: 95,
      leftSide: '777,95 140,777 0,777 777,0',
      bottomSide: '1442,95 805,777 140,777 777,95',
    };
    expect(svgBannerGetAttributes(1, 'primaryBox')).to.eql(expectedResponse);
  });

  it('has the correct single line response for secondaryBox', () => {
    const expectedResponse = {
      boxHeight: 95,
      leftSide: '777,95 140,777 0,777 777,0',
      bottomSide: '1327,95 690,777 140,777 777,95',
    };
    expect(svgBannerGetAttributes(1, 'secondaryBox')).to.eql(expectedResponse);
  });

  it('has the correct double line response for primaryBox', () => {
    const expectedResponse = {
      boxHeight: 140,
      leftSide: '777,140 140,777 0,777 777,0',
      bottomSide: '1442,140 805,777 140,777 777,140',
    };
    expect(svgBannerGetAttributes(2, 'primaryBox')).to.eql(expectedResponse);
  });

  it('has the correct double line response for secondaryBox', () => {
    const expectedResponse = {
      boxHeight: 140,
      leftSide: '777,140 140,777 0,777 777,0',
      bottomSide: '1327,140 690,777 140,777 777,140',
    };
    expect(svgBannerGetAttributes(2, 'secondaryBox')).to.eql(expectedResponse);
  });

  it('has the correct triple line response for primaryBox', () => {
    const expectedResponse = {
      boxHeight: 185,
      leftSide: '777,185 140,777 0,777 777,0',
      bottomSide: '1442,185 805,777 140,777 777,185',
    };
    expect(svgBannerGetAttributes(3, 'primaryBox')).to.eql(expectedResponse);
  });

  it('has the correct triple line response for secondaryBox', () => {
    const expectedResponse = {
      boxHeight: 185,
      leftSide: '777,185 140,777 0,777 777,0',
      bottomSide: '1327,185 690,777 140,777 777,185',
    };
    expect(svgBannerGetAttributes(3, 'secondaryBox')).to.eql(expectedResponse);
  });
});

describe('Test svgBannerStringSplitter()', () => {
  it('does not split if string is short', () => {
    const expectedResponse = ['abc def ghi'];
    expect(svgBannerStringSplitter('abc def ghi', 15)).to.eql(expectedResponse);
  });

  it('does not split if string is exactly the right size', () => {
    const expectedResponse = ['abc def ghi'];
    expect(svgBannerStringSplitter('abc def ghi', 11)).to.eql(expectedResponse);
  });

  it('splits into two lines if string is long enough', () => {
    const expectedResponse = ['abc def ghi', 'jkl mno'];
    expect(svgBannerStringSplitter('abc def ghi jkl mno', 14)).to.eql(expectedResponse);
  });

  it('splits into three lines if string is long enough', () => {
    const expectedResponse = ['abc def ghi', 'jkl mno pqr', 'stu vwx yz'];
    expect(svgBannerStringSplitter('abc def ghi jkl mno pqr stu vwx yz', 14)).to.eql(expectedResponse);
  });
});
