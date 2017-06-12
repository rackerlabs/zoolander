describe('Filter Bar', () => {
  it('should exist on page', () => {
    $('body').append('<div id="filter-bar-nav" class="navbar-fixed-top"></div>');
    const filterHtml = '<div id="filter-bar" class="rsFilter-bar">' +
      '<button class="rsFilter-hamburger"></button>' +
      '<div class="rsFilter-mobileTitle">Find an Event</div>' +
      '<form class="rsFilter-form">' +
         '<div class="rsFilter-formTitle">Find an Event</div>' +
          '<div class="form-item form-type-select form-item-tid-1">' +
            '<select class="rsFilter-formSelect form-select">' +
              '<option value="All" selected="selected">- Any -</option>' +
              '<option value="92">Custom Events</option>' +
              '<option value="82">Field Events</option>' +
              '<option value="101">Forum</option>' +
            '</select>' +
          '</div>' +
       ' <button class="rsFilter-button">Show Results</button>' +
      '</form>' +
    '</div>';
    const topNav = document.getElementById('filter-bar-nav');
    topNav.insertAdjacentHTML('afterend', filterHtml);

    $('.rsFilter-bar').rsFilterBar();
    expect(document.getElementById('filter-bar')).to.exist;
  });

  it('should show filter options');
  it('should show result');
});
