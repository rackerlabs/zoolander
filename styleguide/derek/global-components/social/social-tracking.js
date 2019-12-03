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
        const url = encodeURIComponent(e.view.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'fbshare', 'height=500,width=670,left=50%,top=50%');
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
    const intervalTime = 100;
    const maxAttempts = 3;
    let runCt = 0;

    // Hacky method to wait until IN-widget has been declared since no proper events exist.
    const myInterval = setInterval(() => {
      const button = document.getElementsByClassName('IN-widget')[0];
      if (typeof button !== 'undefined') {
        clearInterval(myInterval);
        button.addEventListener('click', (e) => {
          dataLayer.push({
            event: 'social.click',
            socialNetwork: 'LinkedIn',
            socialAction: 'share',
            socialTarget: e.view.location.href,
          });
        });
      } else {
        runCt += 1;
        if (runCt > maxAttempts) {
          clearInterval(myInterval);
        }
      }
    }, intervalTime);
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

// Facebook share tracking.
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
