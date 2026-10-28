import Script from "next/script";
import { GA_ID, GTM_ID } from "../data/tracking";

/**
 * Tracking, mounted once in app/layout.js. With a GTM container, GTM loads
 * everything (GA4 included, as a tag inside GTM), so gtag is not loaded as
 * well and nothing is counted twice. With only a GA4 id, gtag loads
 * directly. With neither, this renders nothing. Page views are automatic;
 * the contact form fires a generate_lead event on success (see BookForm).
 * The ids are validated in content/site.json, so no free-form script ever
 * reaches this file.
 */
export default function Analytics() {
  if (GTM_ID) {
    return (
      <>
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
var f=document.getElementsByTagName('script')[0],j=document.createElement('script');
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';f.parentNode.insertBefore(j,f);`}
        </Script>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
      </>
    );
  }
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
