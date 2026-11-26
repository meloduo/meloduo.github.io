// Loaded by the app and by the pages in site/. Only on the live site, so dev and e2e send nothing.
if (location.hostname === 'meloduo.github.io') {
  window.dataLayer = window.dataLayer || [];
  const gtag = function () { window.dataLayer.push(arguments); };
  // No cookies: the site and the privacy page promise it. Custom HTML tags in the container ignore this.
  gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
  gtag('js', new Date());
  // Without gtm.start the container's page view triggers do not fire.
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-W2R784QT';
  document.head.append(script);
}
