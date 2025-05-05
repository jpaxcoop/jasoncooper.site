import PageHeader from "@/components/PageHeader";

export default async function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <PageHeader />
        {children}
    </>
  );
}
