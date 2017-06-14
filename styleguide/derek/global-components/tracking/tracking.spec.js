describe('Zoolander Tracking Module', () => {
  it('is defined', () => {
    expect(Zoolander.Tracking).to.not.be.undefined;
  });

  describe('tracking', () => {
    beforeEach(() => {
      $('body').html('');
      window.dataLayer = [];
    });

    // call clicks
    it('should track call clicks', () => {
      $('body').append('<a class="track-ceilingCall">Call</a>')
        .append('<a class="track-rugCall">Call</a>')
        .append('<a class="track-pageCall">In-Page Call</a>');
      Zoolander.Tracking.init();

      $('.track-ceilingCall').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Eyebrow',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-rugCall').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Rug',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-pageCall').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Page',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    // login clicks
    it('should track login clicks', () => {
      $('body').append('<a class="track-loginMyRack">MyZoolander Portal</a>')
        .append('<a class="track-loginFaws">FAWS</a>')
        .append('<a class="track-loginApps">Apps</a>')
        .append('<a class="track-loginCloudOffice">Cloud Office</a>')
        .append('<a class="track-loginCloudCp">Cloud Control Panel</a>');
      Zoolander.Tracking.init();

      $('.track-loginMyRack').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://my.rackspace.com/portal/auth/login',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.deep.eql(window.dataLayer.pop());

      $('.track-loginApps').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://apps.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.deep.eql(window.dataLayer.pop());

      $('.track-loginFaws').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://manage.rackspace.com/aws',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.deep.eql(window.dataLayer.pop());

      $('.track-loginCloudOffice').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://cp.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-loginCloudCp').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://mycloud.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    // cta clicks
    it('should track form cta clicks', () => {
      $('body').append('<a class="track-ceilingEmail">Email</a>')
        .append('<a class="track-rugEmail">Email</a>')
        .append('<a class="track-secondCTA">Secondary CTA</a>')
        .append('<a class="track-subnavEmail">Subnav CTA</a>')
        .append('<a class="track-pageEmail">In-Page CTA</a>');
      Zoolander.Tracking.init();

      $('.track-ceilingEmail').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Eyebrow',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-rugEmail').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Rug',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-secondCTA').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Secondary CTA',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-subnavEmail').trigger('click');
      expected = {
        event: 'rs.form_click',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Subnav',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-pageEmail').trigger('click');
      expected = {
        event: 'rs.form_click',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Page',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it("should track 'back to top' clicks", () => {
      $('body').append('<a class="track-backToTop">Back To Top</a>');
      Zoolander.Tracking.init();

      $('.track-backToTop').trigger('click');
      const expected = {
        event: 'ga.event',
        eventCategory: 'Page-Level Interactions',
        eventAction: 'Click Back to Top',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should track signup CTA clicks', () => {
      $('body').append('<a class="track-signupCTA" href="https://cart.rackspace.com">Sign Up</a>');
      Zoolander.Tracking.init();

      $('.track-signupCTA').trigger('click');
      const expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: 'https://cart.rackspace.com',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should track resource clicks', () => {
      $('body').append('<a class="track-cta" href="https://rackspace.com">View Resource</a>');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      const expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'View Resource',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });
  });
});
