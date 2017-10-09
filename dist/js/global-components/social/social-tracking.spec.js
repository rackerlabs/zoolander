'use strict';

describe('Zoolander Social Tracking Module', function () {
  it('is defined', function () {
    expect(Zoolander.SocialTracking).to.not.be.undefined;
  });

  describe('Social Tracking', function () {
    beforeEach(function () {
      $('body').html('');
      window.dataLayer = [];
    });

    it('should track facebook share clicks', function () {
      $('body').append('<div class="fb-share"></div>');
      Zoolander.SocialTracking.facebook();

      var e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window);
      $('.fb-share')[0].dispatchEvent(e);
      var expected = {
        event: 'social.click',
        socialNetwork: 'Facebook',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html'
      };
      expect(window.dataLayer.pop(), 'to push facebook share event').to.eql(expected);
    });

    it('should track twitter share clicks', function () {
      var e = {
        target: {
          ownerDocument: {
            URL: window.location.href
          }
        }
      };
      Zoolander.SocialTracking.twitter(e);
      var expected = {
        event: 'social.click',
        socialNetwork: 'Twitter',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html'
      };
      expect(window.dataLayer.pop(), 'to push facebook share event').to.eql(expected);
    });

    it('should track linkedin share clicks', function () {
      $('body').append('<div class="IN-widget">Email</div>');
      Zoolander.SocialTracking.linkedin();

      var e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window);
      $('.IN-widget')[0].dispatchEvent(e);
      var expected = {
        event: 'social.click',
        socialNetwork: 'LinkedIn',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html'
      };
      expect(window.dataLayer.pop(), 'to push email share event').to.eql(expected);
    });

    it('should track email share clicks', function () {
      $('body').append('<a class="social-shareEmail">Email</a>');
      Zoolander.SocialTracking.email();

      var e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window);
      $('.social-shareEmail')[0].dispatchEvent(e);
      var expected = {
        event: 'social.click',
        socialNetwork: 'Email',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html'
      };
      expect(window.dataLayer.pop(), 'to push email share event').to.eql(expected);
    });
  });
});