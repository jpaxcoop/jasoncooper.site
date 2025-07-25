import Footer from "@/components/Footer";

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-grow max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
