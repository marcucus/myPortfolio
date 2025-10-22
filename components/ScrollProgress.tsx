'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-1 pointer-events-none">
      <div
        className="h-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
