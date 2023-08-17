import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const metaTitle = "Quack AI - Your companion for developer onboarding";
const metaDescription =
  "Quack AI is your companion for developer onboarding. Simplify the onboarding process and improve productivity.";
const metaUrl = "https://www.quack-ai.com/";
const metaBanner = "https://www.quack-ai.com/social-banner.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={metaUrl} />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4C1Y48B784"
          async
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-4C1Y48B784');
          `}
        </Script>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaBanner} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={metaBanner} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaBanner} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
