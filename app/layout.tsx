import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jason Cooper",
  description: "Jason Cooper's portfolio and resumé",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className="antialiased flex min-h-screen flex-col"
      >
        <Header />
        {children}

        <div id="portal-root" />

        <div className="fixed w-full h-full z-[-100] bg-linear-to-t from-gray-950 to-gray-800" />
      </body>
    </html>
  );
}
