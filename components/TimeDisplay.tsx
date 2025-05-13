'use client';

import { useEffect, useState } from 'react';

type Props = {
  timezone: string; // e.g., "America/New_York"
};

export default function TimeDisplay({ timezone }: Props) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const parts = formatter.formatToParts(now);
      const weekday = parts.find(p => p.type === 'weekday')?.value;
      const hour = parts.find(p => p.type === 'hour')?.value;
      const minute = parts.find(p => p.type === 'minute')?.value;
      const second = parts.find(p => p.type === 'second')?.value;
      const dayPeriod = parts.find(p => p.type === 'dayPeriod')?.value;

      setTimeStr(`${weekday}, ${hour}:${minute}:${second} ${dayPeriod}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, [timezone]);

  return timeStr;
}
