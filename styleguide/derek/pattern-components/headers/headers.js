

Zoolander.Banners = (() => {
  function interiorBanner() {
    const textContainer = $('.refreshBanner-textContainerInterior');
    const leftSlant = $('.refreshBanner-line.left-top');
    const mainContainer = $('.refreshBanner-container');
    const mainContainerLeft = mainContainer.offset().left;
    const left = textContainer.offset().left - leftSlant.outerWidth();

    leftSlant.css({
      height: textContainer.outerHeight(),
      left: left - mainContainerLeft,
    });
  }
  function homepageBanner() {
    const textContainerHomepage = $('.refreshBanner-textContainerHomepage');
    const textContainerBottom = $('.refreshBanner-textContainerHomepageBottom');
    const leftSlantHomepage = $('.left-topHomepage');
    const leftSlantBottom = $('.left-topBottom');
    const mainContainer = $('.refreshBanner-container');
    const mainContainerLeft = mainContainer.offset().left;
    const leftHomepage = textContainerHomepage.offset().left - leftSlantHomepage.outerWidth();
    const leftBottom = textContainerBottom.offset().left - leftSlantBottom.outerWidth();

    leftSlantHomepage.css({
      height: textContainerHomepage.outerHeight(),
      left: leftHomepage - mainContainerLeft,
    });

    leftSlantBottom.css({
      height: textContainerBottom.outerHeight(),
      left: leftBottom - mainContainerLeft,
    });
  }
  return {
    init: () => {
      $('.refresh-headlineInterior').fitText(0.8, { minFontSize: '25px', maxFontSize: '55px' });
      setTimeout(interiorBanner, 50);
      $(window).resize(interiorBanner);
    },
    homepageInit: () => {
      $('.refresh-headlineHomepage').fitText(0.8, { minFontSize: '25px', maxFontSize: '55px' });
      $('.refresh-headlineHomepageBottom').fitText(0.7, { minFontSize: '25px', maxFontSize: '55px' });
      setTimeout(homepageBanner, 50);
      $(window).resize(homepageBanner);
    },
  };
})();
