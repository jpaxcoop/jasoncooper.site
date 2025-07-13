import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from '@/context/GlobalContext';
import Header from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google';
import ContactModal from "@/components/ContactModal";

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
      <body
        className="antialiased flex min-h-screen flex-col"
      >
        <GlobalContextProvider>
          <Header />
          {children}

          <div id="portal-root" />

          <div className="fixed w-full h-full z-[-100] bg-linear-to-t from-gray-950 to-gray-800" />

          <ContactModal />
        </GlobalContextProvider>
      </body>
      {NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />}
    </html>
  );
}
