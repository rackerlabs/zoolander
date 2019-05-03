/**
 * This file is for zoolander only. It should not be loaded on www as it is
 * only intended to mimic Drupal 8's modal behavior.
 */

(($) => {
  $(() => {
    const $modalSource = $('.rackspaceModalSource');

    // Set default modal settings.
    $modalSource.dialog({
      autoOpen: false,
      draggable: false,
      maxHeight: '95%',
      modal: true,
      resizable: false,
      width: '95%',
    });

    // Classes to add to modal.
    const classes = {
      'ui-dialog': 'rackspaceModal',
      'ui-dialog-title': 'rackspaceModal-title',
      'ui-dialog-titlebar': 'rackspaceModal-titleBar',
      'ui-dialog-titlebar-close': 'rackspaceModal-titleBarClose',
    };

    // Sets proper window position.
    const positionWindow = () => {
      const windowWidth = $(window).width();
      const windowHeight = $(window).height();
      const modalWidth = windowWidth * 0.95;
      const modalMaxHeight = windowHeight * 0.8;
      $modalSource
        .dialog('option', 'maxHeight', modalMaxHeight)
        .dialog('option', 'width', modalWidth)
        .dialog('option', 'position', { my: 'center', at: 'center', of: window });
    };
    $(window).resize(positionWindow);

    // Opens the specified modal.
    const openModal = (selector, options = {}) => {
      const $el = $(selector);
      $el
        .parent().css('position', 'fixed').end()
        .dialog('option', 'classes', classes);

      Object.keys(options).forEach((key) => {
        $el.dialog('option', key, options[key]);
      });

      $el.dialog('open');

      positionWindow();

      // Output modal options for copy/pasting into Drupal.
      const dialogOptions = $el.dialog('option');
      const outputOptions = {
        classes: dialogOptions.classes,
        width: '95%',
      };

      console.log('Use the following in the `data-dialog-options` attribute:'); // eslint-disable-line no-console
      console.log(JSON.stringify(outputOptions)); // eslint-disable-line no-console
    };

    // Basement region selector modal.
    $('.basement-flag-link').click((e) => {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalLarge';
      openModal('#regionSelect');
    });

    // Ceiling call us modal.
    $('.navbar-phoneicon').click((e) => {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalSmall';
      openModal('#callUs');
    });

    // Buy now button.
    $('.pageBanner-buyNowButton').click((e) => {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalExtraLarge';
      openModal('#buyNow');
    });

    // Ceiling email us modal.
    $('.navbar-emailicon').click((e) => {
      e.preventDefault();
      classes['ui-dialog'] = 'rackspaceModal rackspaceModalMedium';
      const options = {
        buttons: [
          {
            text: 'Submit',
            class: 'button lead',
            click: () => { $(this).dialog('close'); },
          },
        ],
      };
      openModal('#emailUs', options);
    });
  });
})(jQuery);
