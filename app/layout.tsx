import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Jason Cooper",
  description: "Jason Cooper's portfolio and resumé",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
