export default function Stage({
    children,
    className = '',
  }: Readonly<{
    children?: React.ReactNode;
    className?: string;
}>) {
  return (
    <div className={className}>
        <div className="absolute top-0 left-0 w-full h-3/4 bg-linear-to-t from-gray-700 to-transparent h-3/4" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-transparent to-gray-800" />
        {children}
    </div>
  );
}
