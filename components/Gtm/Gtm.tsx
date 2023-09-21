import React from "react";
import Script from 'next/script'

export const Gtm = (): JSX.Element => {
    const TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID!;

    return (
        <Script id="google-tag-manager" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }

                (function initConsent() {
                    const consentPropertyType = 'site_consent';
                    const cookies = document.cookie
                        .split(';')
                        .map(cookie => cookie.split('='))
                        .reduce((acc, [consentPropertyType, value]) => ({...acc, [consentPropertyType.trim()] : value}), {});
                    
                    const hasConsented = () => cookies[consentPropertyType] === "true" ? true : false;
                    
                    let consentPayload = {
                        ad_storage: hasConsented() ? "granted" : "denied",
                        analytics_storage: hasConsented() ? "granted" : "denied",
                        facebook: hasConsented() ? "granted" : "denied"
                    }
                    
                    if (!hasConsented()) {
                        consentPayload.wait_for_update = 2000 // milliseconds
                    }
                    gtag("consent", "default", consentPayload);
                })();
                
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${TRACKING_ID}');
            `}
        </Script>
    );
}
