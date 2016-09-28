jQuery(document).ready(function($) {
  //main nav functionality
  var $topLevelDropDown = $('.navbar-topItem > .navbar-topLink-dropDown');
  var $navBurger = $(".navbar-hamburger");

  jQuery ("#search,#searchDesktop").click(function(){
    $(".navbar-search").slideToggle();
    $(".navbar-activeArrow").fadeToggle();
    $(".navbar-menuContainer").removeClass("in");
    $navBurger.addClass("collapsed");
  });

  jQuery (".navbar-searchInput").click(function(){
    $(".navbar-searchButton").css('opacity', 1);
  });

  $navBurger.click(function(){
    $navBurger.toggleClass("collapsed");
    $(".navbar-search").slideUp();
    $(".navbar-activeArrow").fadeOut();

    //reset dopdown carrets if collapsing the menu
    if($(this).hasClass('collapsed')){
      $topLevelDropDown.removeClass('navbar-dropDown-triggerActive');
    }
  });

  //Toggle the open arrows on, top level, non drop down links
  $('.navbar-topLink:not(.navbar-topLink.navbar-topLink-dropDown)').click(function(){
    var $el = $(this).parent();
    $el.siblings().find('.navbar-dropDown-triggerActive').removeClass('navbar-dropDown-triggerActive');
    $el.siblings().find('.navbar-tertiary-dropDownMenu').hide();
  });

  //Toggle arrows for top level drop down links
  $topLevelDropDown.click(function(){
    var $el = $(this);
    $el.toggleClass('navbar-dropDown-triggerActive');
    $el.parent().siblings().find('.navbar-topLink-dropDown').removeClass('navbar-dropDown-triggerActive');
  });

  // Special mobile functionality.
  var isMainNavScrolling = false;
  var dropDownTrigger = function (trigger) {
    if (!isMainNavScrolling) {
      var $el = trigger;
      var $current = $el.find('.navbar-tertiary-dropDownMenu');
      var $siblings = $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-tertiary-dropDownMenu');
      $el.find('.navbar-dropDownLink').toggleClass('navbar-dropDown-triggerActive');
      //remove siblings open arrows
      $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-dropDownLink').removeClass('navbar-dropDown-triggerActive');

      $current.toggle();
      $siblings.hide();
    }
  };

  // Indicate whether or not we're currently scrolling, or tapping on a link.
  // Fix for known bootstrap scroll height bug: https://github.com/twbs/bootstrap/issues/12738
  var fixScrollBug = function() {
    $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
  };
  fixScrollBug();
  window.addEventListener("resize", fixScrollBug);

  //set the trigger to show drop downs on hover or clicks depending on viewport
  var $viewPort;
  $(".navbar-tertiary-dropDownTrigger")
    .click(function(e){
      e.stopPropagation();
      $viewPort = parseInt($(window).outerWidth());
      if ($viewPort < 768){
        dropDownTrigger($(this));
      }
    })
    .hover(function(){
      $viewPort = parseInt($(window).outerWidth());
      if ($viewPort > 768){
        dropDownTrigger($(this));
      }
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
    //initialize the responsive tables
    $('.productTable').responsiveTable();
});

//responsive table jQuery plugin
(function($){
  'use strict';
  $.fn.responsiveTable = function(){
    var $table = $(this);
    $table.each(function(){
      var $el = $(this);
      var $cellTitle = $el.find('.productTable-name');
      //place table head titles into each cell as labels
      $el.find('tbody tr td').each(function(){
        var $index = $(this).index();
        $(this).prepend('<strong class="productTable-mobileTitle">' + $cellTitle.eq($index).html() + ' </strong>');
      });
    });
    //allow this plugin to be chainable via jQuery
    return this;
  };
}(jQuery)); //to protect and scope the JQuery alias = $

//swatches copy button
(function() {
  'use strict';
  document.body.addEventListener('click', copy, true);
  function copy(e) {
    var
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {
      inp.select();

      try {
        document.execCommand('copy');
        inp.blur();
      }
      catch (err) {
        alert('please press copy link to copy');
      }
    }
  }
})();
(function ($) {
  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);

$('.navZoolander-hasDropdown').unbind().click(function(e){
  e.preventDefault();
  var $el = $(this);
  $el.next('.navZoolander-dropdown').slideToggle(200);
  $el.toggleClass('hasDropDown-active');
});

//Slide toggle the zoolander nav
var zoolanderSlideBtn = $('.navZoolander-slideBtn');
zoolanderSlideBtn.unbind().click(function(e){
  e.preventDefault();
  var $me = $(this);
  $me.toggleClass('navZoolander-slideBtn-collapsed');
  $me.next('.navZoolander-container').toggleClass('navZoolander-container-collapsed');
  $('.mainContainer').toggleClass('mainContainer-collapsed');
});

//Zoolander only solution for auto collapsing menu on example pages
var url = window.location.pathname;
if(url.match(/\/derek\/examples\//gi) && url != '/derek/examples/' && url != '/derek/examples/landing-page/'){
    zoolanderSlideBtn.trigger('click');
}
