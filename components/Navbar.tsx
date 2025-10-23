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
      className={`fixed left-0 right-0 z-30 transition-all duration-700 ease-out px-4 md:px-0 h-fit ${
        isScrolled ? 'bottom-4 md:top-2' : 'bottom-2 md:top-4'
      }`}
    >
      <div
        className={`mx-auto glass-effect-strong rounded-full transition-all duration-700 ease-out relative ${
          isScrolled ? 'max-w-md px-2 py-1.5' : 'max-w-md px-2 py-1.5 md:max-w-2xl md:px-4 md:py-3'
        }`}
      >
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative transition-all duration-700 ease-out cursor-pointer group-hover:text-white group-hover:scale-110 ${
                    isScrolled ? 'px-4 py-2' : 'px-4 py-2'
                  }`}
                  aria-label={item.label}
                >
                  <div className="relative flex items-center justify-center">
                    <Icon
                      className={`transition-all duration-500 ${
                        isScrolled ? 'text-xl' : 'text-xl md:text-lg md:mr-2'
                      } text-white/80`}
                    />
                    <span
                      className={`text-white/80 group-hover:text-white font-medium transition-all duration-700 ease-out whitespace-nowrap ${
                        isScrolled
                          ? 'opacity-0 w-0 overflow-hidden'
                          : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 -z-10 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
  );
}
