'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        w-12 h-6 flex items-center rounded-full relative
        focus:outline-none transition-colors duration-300
        bg-black/10 hover:cursor-pointer
      `}
      style={{
        boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.3), inset -3px -3px 6px rgba(255,255,255,0.15)',
      }}
    >
      <div
        className={`
          w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600
          shadow-md flex items-center justify-center
          transform transition-transform duration-300
          absolute top-0 ${isDark ? 'translate-x-6' : 'translate-x-0'} shadow-lg
        `}
      >
        {isDark ? (
          <DarkModeIcon className="text-gray-300" style={{ fontSize: '15px' }} />
        ) : (
          <LightModeIcon className="text-gray-700" style={{ fontSize: '15px' }} />
        )}
      </div>
    </button>
  );
}
