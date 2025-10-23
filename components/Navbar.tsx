'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShrink = scrollPosition > 100;
      
      if (shouldShrink !== isScrolled) {
        setIsScrolled(shouldShrink);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: FaHome },
    { id: 'about', label: 'À propos', icon: FaUser },
    { id: 'stack', label: 'Stack', icon: FaCode },
    { id: 'projects', label: 'Projets', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div
        className={`mx-auto glass-effect-strong rounded-full transition-all duration-700 ease-out relative overflow-visible ${
          isScrolled ? 'max-w-md px-2 py-1.5' : 'max-w-2xl px-4 py-3'
        }`}
      >
        {/* Liquid glass refraction glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative transition-all duration-700 ease-out cursor-pointer ${
                    isScrolled ? 'px-4 py-2' : 'px-4 py-2'
                  }`}
                  aria-label={item.label}
                >
                  <div className="relative flex items-center justify-center z-10">
                    <Icon
                      className={`transition-all duration-500 ${
                        isScrolled ? 'text-xl' : 'text-lg mr-2'
                      } text-white/80 group-hover:text-white group-hover:scale-110`}
                    />
                    <span
                      className={`text-white/80 group-hover:text-white font-medium transition-all duration-700 ease-out whitespace-nowrap ${
                        isScrolled
                          ? 'opacity-0 w-0 overflow-hidden'
                          : 'opacity-100'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {/* Enhanced hover effect with liquid glass appearance */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/5 via-white/15 to-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg" />
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-fast" />
                </button>
              );
            })}
        </div>
      </div>
      </nav>
  );
}
