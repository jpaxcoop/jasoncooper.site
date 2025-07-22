import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from '@/context/GlobalContext';
import Header from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google';
import ContactModal from "@/components/ContactModal";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Jason Cooper",
  description: "Jason Cooper's portfolio and resumé",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className="antialiased flex min-h-screen flex-col"
      >
        <div className="bg-container fixed inset-0 z-[-200] transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-gray-400 via-gray-400 dark:opacity-0 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-gray-800 via-gray-800 opacity-0 dark:opacity-100 transition-opacity duration-700" />
        </div>

        <GlobalContextProvider>
          <ThemeProvider>
            <Header />
            {children}

            <div id="portal-root" />

            <div className="fixed w-full h-full z-[-100]" />

            <ContactModal />
          </ThemeProvider>
        </GlobalContextProvider>
      </body>
      {NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />}
    </html>
  );
}
