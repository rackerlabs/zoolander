describe('Filter Bar', () => {
  it('should exist on page', () => {
     //<div id="firstDiv">First <strong>div</strong></div>
    $('body').append('<div id="firstDiv">First <strong>div</strong></div>');
    var div1 = document.getElementById('firstDiv');
    div1.insertAdjacentHTML('afterend', '<div id="secondDiv">Second <strong>div</strong></div>');
    const blah = '<select class="rsFilter-formSelect form-select form-select" ' +
                'id="edit-field-event-type-tid" name="field_event_type_tid">' +
                '<option value="All" selected="selected">- Anyx -</option>' +
                '<option value="4">Customer Events</option><option value="9">' +
                'Field Events</option><option value="7">Forum</option>' +
                '<option value="5">Tradeshow/Conference</option>' +
                '<option value="6">Training</option><option value="8">Webinar</option></select>';
    div1.insertAdjacentHTML('afterend', blah);

    $('<div id="filterBar"></div>').rsFilterBar();
    var $newdiv1 = $( "<div id='object1'></div>" ),
    newdiv2 = document.createElement( "div" ),
    existingdiv1 = document.getElementById( "foo" );
    $("body").append( $newdiv1, [ newdiv2, existingdiv1 ] );

    expect(document.getElementById('object1')).exist;
    expect(document.getElementById('secondDiv')).to.exist;
    expect(document.getElementById('edit-field-event-type-tid')).to.exist;
  });
  it('should show filter options');
  it('should show result');
});
