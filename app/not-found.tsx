export default function NotFound() {
  return (
    <div className="absolute top-0 bottom-0 w-full pointer-events-none">
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center opacity-0 animate-fadeIn pointer-events-auto">
        <h1 className="next-error-h1 font-heading text-4xl p-0 md:pr-6 m-0 md:mr-7 border-0 md:border-r block md:inline-block">404</h1>

        <div className="inline-block">
          <h2 className="next-error-h2">This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}