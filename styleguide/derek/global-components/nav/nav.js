// main nav functionality
const $ = jQuery;
const $topLevelDropDown = $('.navbar-topItem > .navbar-topLink-dropDown');
const $navBurger = $('.navbar-hamburger');

$navBurger.click((e) => {
  $navBurger.toggleClass('collapsed');

  // reset dopdown carrets if collapsing the menu
  if ($(e.currentTarget).hasClass('collapsed')) {
    $topLevelDropDown.removeClass('navbar-dropDown-triggerActive');
  }
});

// Toggle the open arrows on, top level, non drop down links
$('.navbar-topLink:not(.navbar-topLink.navbar-topLink-dropDown)').click((e) => {
  const $el = $(e.currentTarget).parent();
  $el.siblings().removeClass('navbar-dropDown-triggerActive');
  $el.siblings().find('.navbar-tertiary-dropDownMenu').hide();
});

// Toggle arrows for top level drop down links
$topLevelDropDown.click((e) => {
  const $el = $(e.currentTarget);
  const $siblings = $el.parent().siblings().find('.navbar-topLink-dropDown');
  const $tertiaryTrigger = $('.navbar-tertiary-dropDownTrigger span');
  $el.toggleClass('navbar-dropDown-triggerActive');
  // hides open tertiary navs and removes active class from other dropdowns
  $siblings.removeClass('navbar-dropDown-triggerActive');
  $tertiaryTrigger.removeClass('navbar-dropDown-triggerActive');
  $('.navbar-tertiary-dropDownMenu').hide();
});

// Special mobile functionality.
function dropDownTrigger(trigger) {
  const $el = trigger;
  const $current = $el.find('.navbar-tertiary-dropDownMenu');
  const $siblings = $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-tertiary-dropDownMenu');
  $el.find('.navbar-dropDownLink').toggleClass('navbar-dropDown-triggerActive');
  // remove siblings open arrows
  $el.siblings('.navbar-tertiary-dropDownTrigger').find('.navbar-dropDownLink').removeClass('navbar-dropDown-triggerActive');

  $current.toggle();
  $siblings.hide();
}

// Indicate whether or not we're currently scrolling, or tapping on a link.
// Fix for known bootstrap scroll height bug: https:// github.com/twbs/bootstrap/issues/12738
function fixScrollBug() {
  $('.navbar-collapse').css({ maxHeight: $(window).height() - `${$('.navbar-header').height()}px` });
}

fixScrollBug();
window.addEventListener('resize', fixScrollBug);

// set the trigger to show drop downs on hover or clicks depending on viewport
let $viewPort;
$('.navbar-tertiary-dropDownTrigger')
  .click((e) => {
    e.stopPropagation();
    $viewPort = parseInt($(window).outerWidth(), 10);
    if ($viewPort <= 768) {
      dropDownTrigger($(e.currentTarget));
    }
  })
  .hover((e) => {
    $viewPort = parseInt($(window).outerWidth(), 10);
    if ($viewPort > 768) {
      dropDownTrigger($(e.currentTarget));
    }
  });
