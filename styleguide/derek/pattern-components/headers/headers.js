

Zoolander.Banners = (() => {
  const textContainer = $('.refreshBanner-textContainerInterior');
  const leftSlant = $('.refreshBanner-line.left-top');
  const mainContainer = $('.refreshBanner-container');
  const textContainerHomepage = $('.refreshBanner-textContainerHomepage');
  const textContainerBottom = $('.refreshBanner-textContainerHomepageBottom');
  const leftSlantHomepage = $('.left-topHomepage');
  const leftSlantBottom = $('.left-topBottom');

  function interiorBanner() {
    const mainContainerLeft = mainContainer.offset().left;
    const left = textContainer.offset().left - leftSlant.outerWidth();

    leftSlant.css({
      height: textContainer.outerHeight(),
      left: left - mainContainerLeft,
    });
  }

  function homepageBannerTop() {
    const mainContainerLeft = mainContainer.offset().left;
    const leftHomepage = textContainerHomepage.offset().left - leftSlantHomepage.outerWidth();

    leftSlantHomepage.css({
      height: textContainerHomepage.outerHeight(),
      left: leftHomepage - mainContainerLeft,
    });
  }

  function homepageBannerBottom() {
    const mainContainerLeft = mainContainer.offset().left;
    const leftBottom = textContainerBottom.offset().left - leftSlantBottom.outerWidth();

    leftSlantBottom.css({
      height: textContainerBottom.outerHeight(),
      left: leftBottom - mainContainerLeft,
    });
  }

  return {
    init: () => {
      const font = new FontFaceObserver('Khand', { weight: 700 });
      font.load().then(() => {
        // What happens if khand is loaded?
        $('.refresh-headlineInterior').on('fitTextLoaded', interiorBanner)
          .fitText(0.8, { minFontSize: '25px', maxFontSize: '55px' });
      }, () => {
        // What happens if khand can't be loaded?
        $('.refresh-headlineInterior').on('fitTextLoaded', interiorBanner)
          .fitText(0.8, { minFontSize: '25px', maxFontSize: '40px' });
      });
    },
    homepageInit: () => {
      const font = new FontFaceObserver('Khand', { weight: 700 });
      font.load().then(() => {
        // What happens if khand is loaded?
        $('.refresh-headlineHomepage').on('fitTextLoaded', homepageBannerTop)
          .fitText(0.8, { minFontSize: '25px', maxFontSize: '55px' });
        $('.refresh-headlineHomepageBottom').on('fitTextLoaded', homepageBannerBottom)
          .fitText(0.7, { minFontSize: '25px', maxFontSize: '55px' });
      }, () => {
        // What happens if khand can't be loaded?
        $('.refresh-headlineHomepage').on('fitTextLoaded', homepageBannerTop)
          .fitText(0.8, { minFontSize: '25px', maxFontSize: '45px' });
        $('.refresh-headlineHomepageBottom').on('fitTextLoaded', homepageBannerBottom)
          .fitText(0.7, { minFontSize: '25px', maxFontSize: '45px' });
      });
    },
  };
})();
