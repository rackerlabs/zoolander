describe('Filter Bar', () => {
  it('filter your face', () => {
    $('<div id="filterBar"></div>').rsFilterBar();
    expect(1 + 1).to.equal(2);
  });
});
