'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 glass-effect-strong rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-110 border-2 border-white/20"
      aria-label="Retour en haut"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
