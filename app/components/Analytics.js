import Script from "next/script";
import { GA_ID } from "../data/tracking";

/**
 * Google Analytics 4 via gtag. Mounted once in app/layout.js. Renders
 * nothing when GA_ID is empty. Page views are automatic; the contact form
 * fires a generate_lead event on success (see BookForm).
 */
export default function Analytics() {
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
