'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShrink = scrollPosition > 100;

      if (shouldShrink !== isScrolled) {
        if (shouldShrink) {
          setShowBlob(true);
          setTimeout(() => {
            setIsScrolled(true);
            setTimeout(() => setShowBlob(false), 600);
          }, 300);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div
          className={`mx-auto glass-effect-strong rounded-full transition-all duration-500 ${
            isScrolled ? 'max-w-md px-4' : 'max-w-2xl px-8'
          }`}
        >
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative transition-all duration-500 ${
                    isScrolled ? 'py-3' : 'py-4'
                  }`}
                  aria-label={item.label}
                >
                  <div className="relative flex items-center justify-center">
                    <Icon
                      className={`transition-all duration-300 ${
                        isScrolled ? 'text-xl' : 'text-lg mr-2'
                      } text-white/80 group-hover:text-white group-hover:scale-110`}
                    />
                    <span
                      className={`text-white/80 group-hover:text-white font-medium transition-all duration-500 ${
                        isScrolled
                          ? 'opacity-0 w-0 overflow-hidden'
                          : 'opacity-100'
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

      {/* Liquid Glass Blob Animation */}
      {showBlob && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <div
            className="w-32 h-32 rounded-full glass-effect-strong animate-blob"
            style={{
              background:
                'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
              filter: 'blur(20px)',
              animation: 'blob-bounce 0.6s ease-out',
            }}
          />
        </div>
      )}
    </>
  );
}
