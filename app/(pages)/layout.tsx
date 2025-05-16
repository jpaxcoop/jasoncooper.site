import Footer from "@/components/Footer";

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
