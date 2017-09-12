/* eslint no-use-before-define: 0 */

const Zoolander = Zoolander || {};
const dataLayer = dataLayer || [];

Zoolander.Tracking = (function Tracking($) {
  function tracking() {
    // Page load tracking.
    $('.track-ceilingEmail').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Eyebrow',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-ceilingCall').on('click', () => {
      dataLayer.push({
        event: 'rs.call_click',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Eyebrow',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-secondCTA').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Secondary CTA',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-subnavEmail').on('click', () => {
      dataLayer.push({
        event: 'rs.form_click',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Subnav',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-pageCall').on('click', () => {
      dataLayer.push({
        event: 'rs.call_click',
        eventCategory: 'Infinity Tracking Triggers',
        eventAction: 'Call Click CTA - Page',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-pageEmail').on('click', () => {
      dataLayer.push({
        event: 'rs.form_click',
        eventCategory: 'Site Submission',
        eventAction: 'Form Click CTA - Page',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-loginMyRack').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://my.rackspace.com/portal/auth/login',
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-loginApps').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://apps.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-loginFaws').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://manage.rackspace.com/aws',
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-loginCloudOffice').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://cp.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-loginCloudCp').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Login',
        eventAction: 'Click',
        eventLabel: 'https://mycloud.rackspace.com/',
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-backToTop').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Page-Level Interactions',
        eventAction: 'Click Back to Top',
        eventLabel: window.location.href,
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-signupCTA').on('click', () => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Signup',
        eventAction: 'Signup Click CTA',
        eventLabel: $('.track-signupCTA').attr('href'),
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.track-cta').on('click', () => {
      dataLayer.push({
        event: 'cta.click',
        eventCategory: 'CTA',
        eventAction: 'CTA Click',
        eventLabel: $('.track-cta').text(),
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('.rsFilter-form').on('submit', (e) => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Resource Center',
        eventAction: 'Resource Center Filter - Product',
        eventLabel: $(e.target).find('option:selected').text(),
        eventValue: '0',
        eventNonInteraction: 0,
      });

      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Resource Center',
        eventAction: 'Resource Center Filter - Type',
        eventLabel: getCheckboxValuesByElement($(e.target).find('input:checked')),
        eventValue: '0',
        eventNonInteraction: 0,
      });
    });

    $('a.navbar-topLink, .navbar-dropDownLink, .navbar-tertiary-dropDownLink').on('click', (e) => {
      dataLayer.push({
        event: 'ga.event',
        eventCategory: 'Internal Links',
        eventAction: 'Link Click - Navigation',
        eventLabel: getLinksValue($(e.target)),
        eventValue: 0,
        eventNonInteraction: 0,
      });
    });
  }

  function getCheckboxValuesByElement(elements) {
    const values = [];
    elements.each((i, v) => {
      values.push(v.value);
    });

    return values.sort().join(':');
  }

  function getLinksValue(elements) {
    const linkAr = elements.parentsUntil('.navbar-menuContainer', 'li')
      .toArray().reverse().map((item) => {
        $.trim(item);
        return item.firstChild.innerText;
      });

    return getLinkStr(linkAr);
  }

  function getLinkStr(linkAr) {
    return linkAr.join(':');
  }

  return {
    init() {
      tracking();
    },
  };
}(jQuery));
