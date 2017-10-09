/* eslint no-use-before-define: 0, no-undef: 0 */

Zoolander.SocialTracking = (() => {
  function FacebookTracking() {
    const button = document.getElementsByClassName('fb-share')[0];

    if (typeof button !== 'undefined') {
      button.addEventListener('click', (e) => {
        dataLayer.push({
          event: 'social.click',
          socialNetwork: 'Facebook',
          socialAction: 'share',
          socialTarget: e.view.location.href,
        });
        if (typeof FB !== 'undefined') {
          FB.ui({
            method: 'share',
            href: e.view.location.href,
            hashtag: '#rackspace',
            quote: 'Checkout this resource from Rackspace',
          });
        }
      });
    }
  }

  function TwitterTracking(e) {
    dataLayer.push({
      event: 'social.click',
      socialNetwork: 'Twitter',
      socialAction: 'share',
      socialTarget: e.target.ownerDocument.URL,
    });
  }

  function LinkedInTracking() {
    const button = document.getElementsByClassName('IN-widget')[0];
    button.addEventListener('click', (e) => {
      dataLayer.push({
        event: 'social.click',
        socialNetwork: 'LinkedIn',
        socialAction: 'share',
        socialTarget: e.view.location.href,
      });
    });
  }

  function EmailTracking() {
    const emailButton = document.getElementsByClassName('social-shareEmail')[0];

    if (typeof emailButton !== 'undefined') {
      emailButton.addEventListener('click', (e) => {
        dataLayer.push({
          event: 'social.click',
          socialNetwork: 'Email',
          socialAction: 'share',
          socialTarget: e.view.location.href,
        });
      });
    }
  }

  return {
    facebook: () => {
      FacebookTracking();
    },
    twitter: (e) => {
      TwitterTracking(e);
    },
    linkedin: () => {
      LinkedInTracking();
    },
    email: () => {
      EmailTracking();
    },
  };
})();

// Facebook Share Tracking
window.fbAsyncInit = () => {
  FB.init({
    appId: '2330309597194845',
    xfbml: true,
    version: 'v2.10',
  });
  FB.AppEvents.logPageView();
};
Zoolander.SocialTracking.facebook();

// Twitter Share Tracking
if (typeof twttr !== 'undefined') {
  twttr.ready((twttr) => {
    twttr.events.bind('click', (e) => {
      Zoolander.SocialTracking.twitter(e);
    });
  });
}

// LinkedIn Share Tracking
if (typeof IN !== 'undefined') {
  IN.Event.onOnce(IN, 'systemReady', () => {
    Zoolander.SocialTracking.linkedin();
  });
}

// Email Share Tracking
Zoolander.SocialTracking.email();
