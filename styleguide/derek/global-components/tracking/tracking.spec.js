describe('Zoolander Tracking Module', () => {
  it('is defined', () => {
    expect(Zoolander.Tracking).to.not.be.undefined;
  });

  describe('tracking', () => {
    beforeEach(() => {
      $(document).unbind('click');
      $('body').html('');
      window.dataLayer = [];
    });

    // call clicks
    it('should track call clicks', () => {
      $('body').append('<a class="track-ceilingCall">Call</a>')
        .append('<a class="track-pageCall">In-Page Call</a>');
      Zoolander.Tracking.init();

      $('.track-ceilingCall').trigger('click');
      let expected = {
        event: 'rs.call_click',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Eyebrow',
        eventLabel: 'http://localhost:9876/context.html',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(window.dataLayer.pop(), 'to include ceiling call event').to.eql(expected);

      $('.track-pageCall').trigger('click');
      expected = {
        event: 'rs.call_click',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Page',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(window.dataLayer.pop(), 'to include page call event').to.eql(expected);
    });

    // content activation links
    it('should track content activation links', () => {
      $('body').append('<a class="track-caModalOpen" data-target="#gated-content">Content Activation Modal Open</a>')
        .append('<a class="track-caSidebarLink" data-iframe-src="https://www.youtube.com/watch?v=oHg5SJYRHA0">Content Activation Sidebar Link Click</a>');
      Zoolander.Tracking.init();
      $('.track-caModalOpen').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Content Activation',
        eventAction: 'Modal Click',
        eventLabel: '#gated-content',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.deep.eql(window.dataLayer.pop());
      $('.track-caSidebarLink').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Content Activation',
        eventAction: 'Sidebar Link Click',
        eventLabel: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.deep.eql(window.dataLayer.pop());
    });

    // login clicks
    it('should track login clicks', () => {
      $('body').append('<a class="track-loginMyRack">MyZoolander Portal</a>')
        .append('<a class="track-loginFaws">FAWS</a>')
        .append('<a class="track-loginApps">Apps</a>')
        .append('<a class="track-loginCloudOffice">Cloud Office</a>')
        .append('<a class="track-loginOnePortal">Login One</a>')
        .append('<a class="track-loginCloudCp">Cloud Control Panel</a>')
        .append('<a class="track-loginGcp">GCP Login</a>');
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

      $('.track-loginGcp').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://manage.rackspace.com/gcp',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.track-loginOnePortal').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://login.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    // cta clicks
    it('should track form cta clicks', () => {
      $('body').append('<a class="track-ceilingEmail">Email</a>')
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
      const result = window.dataLayer.pop();
      expect(expected, '.track-ceilingEmail').to.eql(result);

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
      $('body').append('<a class="track-signupCTA link1" href="https://cart.rackspace.com/cloud">Cloud</a>');
      $('body').append('<a class="track-signupCTA link2" href="https://cart.rackspace.com/aws?_ga=abc123">AWS</a>');
      $('body').append('<a class="track-signupCTA link3" href="https://cart.rackspace.com/gcp">GCP</a>');
      Zoolander.Tracking.init();
      $('body').append('<div id="rackspaceModal"><a class="track-signupCTA link4" href="https://cart.rackspace.com/office365">Office365</a></div>');

      $('.link3').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: 'https://cart.rackspace.com/gcp',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link1').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: 'https://cart.rackspace.com/cloud',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link2').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: 'https://cart.rackspace.com/aws',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link4').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: 'https://cart.rackspace.com/office365',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);
    });

    it('should track signup Menu clicks', () => {
      $('body').append('<a class="track-signupMenu link1" href="https://cart.rackspace.com/cloud">Cloud</a>');
      $('body').append('<a class="track-signupMenu link2" href="https://cart.rackspace.com/aws?_ga=abc123">AWS</a>');
      $('body').append('<a class="track-signupMenu link3" href="https://cart.rackspace.com/gcp">GCP</a>');
      Zoolander.Tracking.init();
      $('body').append('<div id="rackspaceModal"><a class="track-signupMenu link4" href="https://cart.rackspace.com/office365">Office365</a></div>');

      $('.link3').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click Menu',
        eventLabel: 'https://cart.rackspace.com/gcp',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link1').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click Menu',
        eventLabel: 'https://cart.rackspace.com/cloud',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link2').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click Menu',
        eventLabel: 'https://cart.rackspace.com/aws',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link4').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click Menu',
        eventLabel: 'https://cart.rackspace.com/office365',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);
    });

    it('should track resource clicks', () => {
      $('body').append('<a class="track-cta link1" href="https://rackspace.com">View Resource</a>');
      $('body').append('<a class="track-cta link2" href="https://cart.rackspace.com">View Cart</a>');
      $('body').append('<a class="track-cta link3" href="https://blog.rackspace.com">View Blog</a>');
      Zoolander.Tracking.init();
      $('body').append('<div id="rackspaceModal"><a class="track-cta link4" href="https://support.rackspace.com">View Support</a></div>');

      $('.link2').trigger('click');
      let expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'View Cart',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link1').trigger('click');
      expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'View Resource',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link3').trigger('click');
      expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'View Blog',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);

      $('.link4').trigger('click');
      expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'View Support',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
      expect(0).to.eql(window.dataLayer.length);
    });

    it('should set undefined label if text is missing', () => {
      $('body').append('<a class="track-cta" href="https://rackspace.com"></a>');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      const expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'undefined',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should track image links', () => {
      $('body').append('<a class="track-cta" href="#"><img class="my-img" src="#" alt="My Alt Text"></a>');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      let expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'My Alt Text',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());

      $('.my-img').trigger('click');
      expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'My Alt Text',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should set undefined label when alt tag is missing', () => {
      $('body').append('<a class="track-cta" href="https://rackspace.com"><img src="#"></a>');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      const expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'undefined',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should set solve undefined label when alt tag is missing', () => {
      $('body').append('<a class="solve-cta" href="https://rackspace.com"><img src="#"></a>');
      Zoolander.Tracking.init();

      $('.solve-cta').trigger('click');
      const expected = {
        event: 'ga.event',
        eventCategory: 'CTA',
        eventAction: 'Solve CTA Click',
        eventLabel: 'undefined',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should set button label', () => {
      $('body').append('<button class="track-cta">Click this button please</button>');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      const expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'Click this button please',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should set input submit label', () => {
      $('body').append('<input type="submit" class="track-cta" value="Click this button already!">');
      Zoolander.Tracking.init();

      $('.track-cta').trigger('click');
      const expected = {
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: 'Click this button already!',
        eventValue: '0',
        eventNonInteraction: 0,
      };
      expect(expected).to.eql(window.dataLayer.pop());
    });

    it('should track internal nav clicks', () => {
      const linkHtml = '<div class="navbar-menuContainer" id="main-navigation"><ul class="top-nav">'
          + '<li class="item-i"><span class="navbar-topLink">Top lvl first</span></li> '
          + '<li class="item-ii"><span class="navbar-topLink">Top lvl second</span>'
            + '<ul class="mid-nav">'
              + '<li class="item-a"><a class="navbar-dropDownLink">Mid lvl first</a></li>'
              + '<li class="item-b"><span id="midlvl">Mid lvl second</span>'
                + '<ul class="third-nav">'
                  + '<li class="item-1">Base lvl first</li>'
                  + '<li class="item-2"><a class="navbar-tertiary-dropDownLink">Base lvl second</a></li>'
                  + '<li class="item-3">Base lvl third</li>'
                + '</ul>'
              + '</li>'
              + '<li class="item-c">Mid lvl third</li>'
            + '</ul>'
          + '</li>'
          + '<li class="item-iii"><a class="navbar-topLink">Top lvl third</a></li>'
        + '</ul>'
      + '</div>';

      $('body').append(linkHtml);
      Zoolander.Tracking.init();

      // click base level
      $('.item-2 .navbar-tertiary-dropDownLink').trigger('click');
      let expected = {
        event: 'ga.event',
        eventCategory: 'Internal Links',
        eventAction: 'Link Click - Navigation',
        eventLabel: 'Top lvl second:Mid lvl second:Base lvl second',
        eventValue: 0,
        eventNonInteraction: 0,
      };
      let result = window.dataLayer.pop();
      expect(expected, 'base lvl click').to.deep.eql(result);

      // click mid level
      $('.item-a .navbar-dropDownLink').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Internal Links',
        eventAction: 'Link Click - Navigation',
        eventLabel: 'Top lvl second:Mid lvl first',
        eventValue: 0,
        eventNonInteraction: 0,
      };
      result = window.dataLayer.pop();
      expect(expected, 'Mid lvl click').to.deep.eql(result);

      // click mid level span non link
      $('.item-b').trigger('click');
      let expectLength = 0;
      result = window.dataLayer.length;
      expect(expectLength, 'datalayer length').to.eql(result);

      // click top level link
      $('.item-iii .navbar-topLink').trigger('click');
      expected = {
        event: 'ga.event',
        eventCategory: 'Internal Links',
        eventAction: 'Link Click - Navigation',
        eventLabel: 'Top lvl third',
        eventValue: 0,
        eventNonInteraction: 0,
      };
      result = window.dataLayer.pop();
      expect(expected, 'top lvl click').to.deep.eql(result);

      // click top level menu item
      $('.item-ii').trigger('click');
      expectLength = 0;
      result = window.dataLayer.length;
      expect(expectLength, 'datalayer length').to.eql(result);
    });

    it('should track resource filtering products', () => {
      $('body').append('<form class="rsFilter-form" onsubmit="return false;"><select name="product"><option value="96" selected="selected">Public Cloud</option><option value="101">-Fanatical Support for AWS</option><input type="checkbox" name="content_type[]" id="edit-content-type-case-study" value="case_study" checked="checked" class="rsFilter-checkbox"><input type="checkbox" name="content_type[]" id="edit-content-type-code-repository" value="code_repository" class="rsFilter-checkbox"><input type="checkbox" name="content_type[]" id="edit-content-type-ebook" value="ebook" checked="checked" class="rsFilter-checkbox"></form>');
      Zoolander.Tracking.init();

      $('form.rsFilter-form').trigger('submit');
      const expected = [{
        event: 'ga.event',
        eventCategory: 'Resource Center',
        eventAction: 'Resource Center Filter - Product',
        eventLabel: 'Public Cloud',
        eventValue: '0',
        eventNonInteraction: 0,
      },
      {
        event: 'ga.event',
        eventCategory: 'Resource Center',
        eventAction: 'Resource Center Filter - Type',
        eventLabel: 'case_study:ebook',
        eventValue: '0',
        eventNonInteraction: 0,
      }];
      expect(expected).to.eql(window.dataLayer);
    });
  });
});
