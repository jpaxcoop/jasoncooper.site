'use client';

import { useEffect, useState } from 'react';
import HomeBackground from '@/components/HomeBackground';
import HomeHeader from '@/components/HomeHeader';
import HomeSplash from '@/components/HomeSplash';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);
  const [splashFadeInDone, setSplashFadeInDone] = useState(false);

  useEffect(() => {
    const seenSplash = sessionStorage.getItem('seenSplash');

    if (!seenSplash) {
      setShowSplash(true);
      sessionStorage.setItem('seenSplash', 'true');

      setTimeout(() => {
        setSplashFadeInDone(true);
      }, 1000);
    } else {
      setSplashFadeInDone(true);
    }

    setCheckedStorage(true);
  }, []);

  if (!checkedStorage) return null;

  return (
    <>
      {showSplash && <HomeSplash />}

      {splashFadeInDone && (
        <main className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
          <HomeBackground />
          <HomeHeader />
        </main>
      )}
    </>
  );
}
