describe('Zoolander Social Tracking Module', () => {
  it('is defined', () => {
    expect(Zoolander.SocialTracking).to.not.be.undefined;
  });

  describe('Social Tracking', () => {
    beforeEach(() => {
      $('body').html('');
      window.dataLayer = [];
    });

    it('should track facebook share clicks', () => {
      $('body').append('<div class="fb-share"></div>');
      Zoolander.SocialTracking.facebook();

      const e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window);
      $('.fb-share')[0].dispatchEvent(e);
      const expected = {
        event: 'social.click',
        socialNetwork: 'Facebook',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html',
      };
      expect(window.dataLayer.pop(), 'to push facebook share event').to.eql(expected);
    });

    it('should track twitter share clicks', () => {
      const e = {
        target: {
          ownerDocument: {
            URL: window.location.href,
          },
        },
      };
      Zoolander.SocialTracking.twitter(e);
      const expected = {
        event: 'social.click',
        socialNetwork: 'Twitter',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html',
      };
      expect(window.dataLayer.pop(), 'to push facebook share event').to.eql(expected);
    });

    it('should track linkedin share clicks', () => {
      $('body').append('<div class="IN-widget">LinkedIn</div>');
      Zoolander.SocialTracking.linkedin();

      // Initially the datalayer should be empty.
      expect(window.dataLayer.pop(), 'to not have pushed linkedin share event yet').to.not.exist;

      // After 110ms, the datalayer should contain the event data.
      setTimeout(() => {
        const e = document.createEvent('MouseEvents');
        e.initMouseEvent('click', true, true, window);
        $('.IN-widget')[0].dispatchEvent(e);

        const expected = {
          event: 'social.click',
          socialNetwork: 'LinkedIn',
          socialAction: 'share',
          socialTarget: 'http://localhost:9876/context.html',
        };
        expect(window.dataLayer.pop(), 'to push linkedin share event').to.eql(expected);
      }, 110);
    });

    it('should skip tracking linkedin share clicks if too much time lapses', () => {
      Zoolander.SocialTracking.linkedin();
      // Initially the datalayer should be empty.
      expect(window.dataLayer.pop(), 'to not have pushed linkedin share event yet').to.not.exist;

      // After 310ms, datalayer should still be empty, due to missing IN-widget.
      setTimeout(() => {
        expect(window.dataLayer.pop(), 'to not have pushed linkedin share event yet').to.not.exist;
      }, 310);
    });

    it('should track email share clicks', () => {
      $('body').append('<a class="social-shareEmail">Email</a>');
      Zoolander.SocialTracking.email();

      const e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window);
      $('.social-shareEmail')[0].dispatchEvent(e);
      const expected = {
        event: 'social.click',
        socialNetwork: 'Email',
        socialAction: 'share',
        socialTarget: 'http://localhost:9876/context.html',
      };
      expect(window.dataLayer.pop(), 'to push email share event').to.eql(expected);
    });
  });
});
