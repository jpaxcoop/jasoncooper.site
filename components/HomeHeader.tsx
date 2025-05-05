'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomeHeader() {
  const [hideHeader, setHideHeader] = useState(false);
  const router = useRouter();

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHideHeader(true);

    const svg = document.getElementById('homeOfficeSvg');

    if (!svg) return;

    svg.classList.add('zoom-animate-resume');

    // Wait for animation to finish before navigating
    setTimeout(() => {
      router.push('/resume');
    }, 750);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHideHeader(true);

    const svg = document.getElementById('homeOfficeSvg');

    if (!svg) return;

    svg.classList.add('zoom-animate-projects');

    // Wait for animation to finish before navigating
    setTimeout(() => {
      router.push('/projects');
    }, 750);
  };

  const handleAboutYouClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHideHeader(true);

    const svg = document.getElementById('homeOfficeSvg');

    if (!svg) return;

    svg.classList.add('zoom-animate-about-you');

    // Wait for animation to finish before navigating
    setTimeout(() => {
      router.push('/about-you');
    }, 750);
  };

  return (
    <div className={`absolute top-[40px] left-[50px] z-20 text-left ${hideHeader ? 'fade-out' : ''}`}>
      <h1 className="text-[36px] font-heading uppercase tracking-widest mb-4">
        Jason Cooper
      </h1>
      <nav className="flex flex-col space-y-[18px] text-[18px] font-heading uppercase tracking-wider">
        <div>
          <Link href="/resume" className="hover:text-pink-600" onClick={handleResumeClick}>
            Resumé
          </Link>
        </div>

        <div>
          <Link href="/projects" className="hover:text-pink-600" onClick={handleProjectsClick}>
            Projects
          </Link>
        </div>

        <div>
          <Link href="/about" className="hover:text-pink-600" onClick={handleAboutYouClick}>
            About You
          </Link>
        </div>
      </nav>
    </div>
  );
}
