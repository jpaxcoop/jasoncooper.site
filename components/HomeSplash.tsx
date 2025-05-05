'use client';

import { useEffect, useState } from 'react';

export default function HomeSplash() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    setShowSplash(true);
    
    setTimeout(() => {
      setShowSplash(false);
    }, 3500);
  }, []);

  if (!showSplash) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 animate-fadeOut transition-opacity duration-1000`}
    >
      <h1 className="text-[36px] animate-fadeIn font-heading uppercase tracking-widest text-black transition-opacity duration-1000 opacity-0">
        Welcome to Jason Cooper's Website
      </h1>
    </div>
  );
}
