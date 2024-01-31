import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quackai.com/"),
  title: "Quack AI - Your companion for software team alignment",
  description:
    "Quack AI is your companion for software team alignment. Streamline collaboration and improve productivity.",
  openGraph: {
    title: "Quack AI - Your companion for software team alignment",
    description:
      "Quack AI is your companion for software team alignment. Streamline collaboration and improve productivity.",
    type: "website",
    url: "https://www.quackai.com/",
    images: ["https://www.quackai.com/social-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quack AI - Your companion for software team alignment",
    description:
      "Quack AI is your companion for software team alignment. Streamline collaboration and improve productivity.",
    images: ["https://www.quackai.com/social-banner.png"],
  },
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
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
      <Analytics debug={false} />
    </html>
  );
}
