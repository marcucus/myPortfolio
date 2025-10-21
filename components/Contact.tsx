'use client';

import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center">
      {/* Background effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contactez-moi
        </h2>
        <p className="text-center text-white/60 mb-12">
          N'hésitez pas à me contacter pour discuter de vos projets
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass-effect-strong rounded-[2rem] p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Informations</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:marquesadrien.pro@gmail.com"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    marquesadrien.pro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Localisation</h4>
                  <p className="text-white/70">Mitry-Mory, Île-de-France, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/adrien-marques-755393181"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/adrien-marques-755393181
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">GitHub</h4>
                  <a
                    href="https://github.com/marcucus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    github.com/marcucus
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="glass-effect-strong rounded-[2rem] p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Envoyez un message</h3>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:marquesadrien.pro@gmail.com';
            }}>
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 resize-none"
                  placeholder="Votre message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full glass-effect-strong px-6 py-3 rounded-xl font-semibold glass-hover border-2 border-white/25"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center glass-effect-strong rounded-[1.5rem] py-6 px-4">
          <p className="text-white/60">
            © 2025 Adrien Marques. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Développé avec Next.js, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
