'use strict';

/* eslint no-use-before-define: 0, no-undef: 0 */

Zoolander.SocialTracking = function () {
  function FacebookTracking() {
    var button = document.getElementsByClassName('fb-share')[0];

    if (typeof button !== 'undefined') {
      button.addEventListener('click', function (e) {
        dataLayer.push({
          event: 'social.click',
          socialNetwork: 'Facebook',
          socialAction: 'share',
          socialTarget: e.view.location.href
        });
        if (typeof FB !== 'undefined') {
          FB.ui({
            method: 'share',
            href: e.view.location.href,
            hashtag: '#rackspace',
            quote: 'Checkout this resource from Rackspace'
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
      socialTarget: e.target.ownerDocument.URL
    });
  }

  function LinkedInTracking() {
    var button = document.getElementsByClassName('IN-widget')[0];
    button.addEventListener('click', function (e) {
      dataLayer.push({
        event: 'social.click',
        socialNetwork: 'LinkedIn',
        socialAction: 'share',
        socialTarget: e.view.location.href
      });
    });
  }

  function EmailTracking() {
    var emailButton = document.getElementsByClassName('social-shareEmail')[0];

    if (typeof emailButton !== 'undefined') {
      emailButton.addEventListener('click', function (e) {
        dataLayer.push({
          event: 'social.click',
          socialNetwork: 'Email',
          socialAction: 'share',
          socialTarget: e.view.location.href
        });
      });
    }
  }

  return {
    facebook: function facebook() {
      FacebookTracking();
    },
    twitter: function twitter(e) {
      TwitterTracking(e);
    },
    linkedin: function linkedin() {
      LinkedInTracking();
    },
    email: function email() {
      EmailTracking();
    }
  };
}();

// Facebook Share Tracking
window.fbAsyncInit = function () {
  FB.init({
    appId: '2330309597194845',
    xfbml: true,
    version: 'v2.10'
  });
  FB.AppEvents.logPageView();
};
Zoolander.SocialTracking.facebook();

// Twitter Share Tracking
if (typeof twttr !== 'undefined') {
  twttr.ready(function (twttr) {
    twttr.events.bind('click', function (e) {
      Zoolander.SocialTracking.twitter(e);
    });
  });
}

// LinkedIn Share Tracking
if (typeof IN !== 'undefined') {
  IN.Event.onOnce(IN, 'systemReady', function () {
    Zoolander.SocialTracking.linkedin();
  });
}

// Email Share Tracking
Zoolander.SocialTracking.email();