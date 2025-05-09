'use client';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { usePathname, useRouter } from 'next/navigation';

export default function PageHeader() {
  const router = useRouter();

  const pathname = usePathname();

  const isWhiteHomeButton = pathname === '/projects';

  return (
    <div className="absolute top-[24px] left-[18px] md:left-[50px] z-20 text-left">
      <nav className="flex flex-col space-y-[18px] text-[18px] font-heading uppercase">
        <div>
          <button
            onClick={() => router.push('/')}
            className={`flex items-center text-base hover:text-pink-600 ${isWhiteHomeButton ? 'text-white' : ''}`}
          >
            <ChevronLeftIcon fontSize="small" className="mr-1" />
            Return Home
          </button>
        </div>
      </nav>
    </div>
  );
}
