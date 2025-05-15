'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute top-0 bottom-0 w-full pointer-events-none">
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center opacity-0 animate-fadeIn pointer-events-auto">
        <h1 className="next-error-h1 font-heading text-3xl">Something went wrong</h1>

        <button
          onClick={reset}
          className="mt-4 px-4 py-2 border-2 border-white font-semibold rounded hover:border-pink-500 hover:cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
