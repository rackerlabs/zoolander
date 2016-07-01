jQuery(document).ready(function() {
  //main nav functionality
  jQuery ("#search,#searchDesktop").click(function(){
    $(".navbar-search").slideToggle();
    $(".navbar-activeArrow").fadeToggle();
    $(".navbar-menuContainer").removeClass("in");
    $(".navbar-hamburger").addClass("collapsed");
  });
  jQuery (".navbar-searchInput").click(function(){
    $(".navbar-searchButton").css('opacity', 1);
  })
  jQuery (".navbar-hamburger").click(function(){
    $(".navbar-hamburger").toggleClass("collapsed");
    $(".navbar-search").slideUp();
    $(".navbar-activeArrow").fadeOut();
  })
  jQuery (".navbar-tertiary-dropDownTrigger").hover(function(e){
    var current=$(this).find('.navbar-tertiary-dropDownMenu');
    current.toggle();
    e.stopPropagation();
  });

  //back to top
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

  //tab collapse
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

    $('#footer-accordion').tabCollapse();
});
