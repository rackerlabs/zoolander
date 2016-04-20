jQuery(document).ready(function() {
  var offset = 250;
  var duration = 300;
  jQuery ('.back-to-top').click (function (event) {
    event.preventDefault ();
    jQuery ('html, body').animate ({scrollTop: 0}, duration);
    return false;
  });
  jQuery (window).scroll (function () {
    if (jQuery (this).scrollTop () > offset) {
      jQuery ('.back-to-top').fadeIn (duration);
    } else {
      jQuery ('.back-to-top').fadeOut (duration);
    }
  });
});


jQuery(document).ready(function ($) {
    $('#myTab').tabCollapse();
    jQuery ('.title a').click(function (event) {
      jQuery (this).parent().parent().find('.fa-arrow-right').animate({  borderSpacing: +90 }, {
      step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
          counter = 1;
      },
      duration:'slow'
      },'linear');
    });
});


