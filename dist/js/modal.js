'use strict';

/**
 * This file is for zoolander only. It should not be loaded on www as it is
 * only intended to mimic Drupal 8's modal behavior.
 */

(function ($) {
  $(function () {
    var $modalSource = $('.rackspaceModalSource');

    // Set default modal settings.
    $modalSource.dialog({
      autoOpen: false,
      draggable: false,
      maxHeight: '95%',
      modal: true,
      resizable: false,
      width: '95%'
    });

    // Classes to add to modal.
    var classes = {
      'ui-dialog': 'rackspaceModal',
      'ui-dialog-title': 'rackspaceModal-title',
      'ui-dialog-titlebar': 'rackspaceModal-titleBar',
      'ui-dialog-titlebar-close': 'rackspaceModal-titleBarClose'
    };

    // Sets proper window position.
    var positionWindow = function positionWindow() {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var modalWidth = windowWidth * 0.95;
      var modalMaxHeight = windowHeight * 0.8;
      $modalSource.dialog('option', 'maxHeight', modalMaxHeight).dialog('option', 'width', modalWidth).dialog('option', 'position', { my: 'center', at: 'center', of: window });
    };
    $(window).resize(positionWindow);

    // Opens the specified modal.
    var openModal = function openModal(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var $el = $(selector);
      $el.parent().css('position', 'fixed').end().dialog('option', 'classes', classes);

      Object.keys(options).forEach(function (key) {
        $el.dialog('option', key, options[key]);
      });

      $el.dialog('open');

      positionWindow();

      // Output modal options for copy/pasting into Drupal.
      var dialogOptions = $el.dialog('option');
      var outputOptions = {
        classes: dialogOptions.classes,
        width: '95%'
      };

      console.log('Use the following in the `data-dialog-options` attribute:'); // eslint-disable-line no-console
      console.log(JSON.stringify(outputOptions)); // eslint-disable-line no-console
    };

    // Basement region selector modal.
    $('.basement-flag-link').click(function (e) {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalLarge';
      openModal('#regionSelect');
    });

    // Ceiling call us modal.
    $('.navbar-phoneicon').click(function (e) {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalSmall';
      openModal('#callUs');
    });

    // Ceiling email us modal.
    $('.navbar-emailicon').click(function (e) {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalMedium';
      var options = {
        buttons: [{
          text: 'Submit',
          class: 'button lead',
          click: function click() {
            $(undefined).dialog('close');
          }
        }]
      };
      openModal('#emailUs', options);
    });
  });
})(jQuery);