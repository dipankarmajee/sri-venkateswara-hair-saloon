'use client';

import { useState, useEffect } from 'react';

export default function LiveStatusPill({ withHours = true }: { withHours?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utc + (3600000 * 5.5));

      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // 8:00 AM (480) to 9:30 PM (1290)
      const openMinutes = 8 * 60;
      const closeMinutes = 21 * 60 + 30;

      const openNow = totalMinutes >= openMinutes && totalMinutes < closeMinutes;
      setIsOpen(openNow);

      const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTimeStr(formatter.format(istDate));
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-all ${
      isOpen
        ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300'
        : 'bg-amber-950/60 border-amber-500/30 text-amber-300'
    }`}>
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
          isOpen ? 'animate-ping bg-emerald-400' : 'animate-ping bg-amber-400'
        }`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${
          isOpen ? 'bg-emerald-400' : 'bg-amber-400'
        }`} />
      </span>

      <span>{isOpen ? 'STORE OPEN' : 'STORE CLOSED'}</span>

      {withHours && (
        <span className="text-slate-400 font-normal">
          • {isOpen ? 'Closes 9:30 PM' : 'Opens 8:00 AM'}
        </span>
      )}
    </div>
  );
}
