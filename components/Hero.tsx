'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient orbs - Enhanced Apple style */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/20 to-purple-500/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="glass-effect-strong rounded-[2rem] p-12 md:p-16">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full glass-effect-strong flex items-center justify-center text-6xl border-2 border-white/20 shadow-2xl">
              👨‍💻
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Adrien Marques
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-6">
            Développeur Fullstack
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Spécialisé en React, React Native, Node.js et Python. Passionné par l'innovation
            et l'amélioration continue, je crée des solutions technologiques avancées
            pour optimiser l'expérience utilisateur.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://github.com/marcucus"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 glass-hover"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adrien-marques-755393181"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 glass-hover"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:marquesadrien.pro@gmail.com"
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 glass-hover"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
            <a
              href="https://marquesadrien.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 glass-hover"
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>Site actuel</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glass-effect-strong px-8 py-4 rounded-full text-lg font-semibold glass-hover border-2 border-white/25 shadow-lg"
          >
            Découvrir mes projets
          </button>
        </div>
      </div>
    </section>
  );
}
