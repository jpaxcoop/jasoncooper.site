import Footer from "@/components/Footer";

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
