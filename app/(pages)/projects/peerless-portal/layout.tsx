'use client';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/navigation';

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <>
         <div className="absolute top-[24px] left-[18px] z-20 text-left">
          <nav className="flex flex-col space-y-[18px] text-[18px] font-heading uppercase">
            <div>
              <button
                onClick={() => router.push('/projects')}
                className="flex items-center text-base hover:text-pink-600 text-white"
              >
                <ChevronLeftIcon fontSize="small" className="mr-1" />
                Return to Projects
              </button>
            </div>
          </nav>
        </div>
        {children}
    </>
  );
}
