'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  period: string;
  achievements: string[];
  image?: string;
}

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Marketplace Bones",
      description: "Plateforme e-commerce complète développée chez Ennea",
      longDescription: "Développement d'une marketplace moderne avec gestion complète des utilisateurs, produits et transactions.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      period: "Fév 2024 - Juil 2024",
      achievements: [
        "Architecture scalable et performante",
        "Interface utilisateur responsive",
        "Optimisation SEO avancée",
        "Tests automatisés complets",
      ],
    },
    {
      title: "Ranking Tool - Foudroyer",
      description: "Outil de suivi de positionnement SEO",
      longDescription: "Système de tracking et analyse des positions de mots-clés sur les moteurs de recherche.",
      tech: ["ReactJS", "NestJS", "PostgreSQL", "AWS"],
      period: "Jan 2022 - Juil 2022",
      achievements: [
        "Suivi multi-moteurs (Google, Yahoo!, Bing)",
        "Calcul de positionnement en temps réel",
        "Tableaux de bord analytiques",
        "API REST performante",
      ],
    },
    {
      title: "Organon - Bird and Human",
      description: "Interface de suivi de projets prestataire/client",
      longDescription: "Plateforme collaborative pour la gestion de projets entre prestataires de services et clients.",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
      period: "Déc 2019 - Fév 2020",
      achievements: [
        "Gestion de projets collaborative",
        "Système de notifications",
        "Suivi de l'avancement en temps réel",
        "Interface intuitive",
      ],
    },
    {
      title: "Projets Personnels",
      description: "Portfolio de projets open-source et expérimentations",
      longDescription: "Collection de projets personnels explorant différentes technologies et concepts.",
      tech: ["React Native", "TypeScript", "Next.js", "Python"],
      period: "2017 - Présent",
      achievements: [
        "Applications mobiles multiplateformes",
        "Contributions open-source",
        "Expérimentations avec IA/ML",
        "Projets de veille technologique",
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projets Réalisés
        </h2>
        <p className="text-center text-white/60 mb-12">
          Cliquez sur une carte pour découvrir plus de détails
        </p>

        {/* 3D Flip Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative h-96 cursor-pointer group perspective-1000"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0)',
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 glass-effect-strong rounded-[2rem] p-6 backface-hidden overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project Icon */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl">
                        💼
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                    <p className="text-sm text-purple-400 mb-4">{project.period}</p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full glass-effect text-xs text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-center text-white/60 text-sm mt-auto">
                      <span>Cliquez pour plus de détails</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 glass-effect-strong rounded-[2rem] p-6 backface-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.longDescription}</p>

                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold mb-2 text-purple-400">Réalisations:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/70">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 glass-effect px-4 py-2 rounded-full glass-hover flex items-center justify-center gap-2">
                        <FaGithub />
                        <span className="text-sm">Code</span>
                      </button>
                      <button className="flex-1 glass-effect px-4 py-2 rounded-full glass-hover flex items-center justify-center gap-2">
                        <FaExternalLinkAlt />
                        <span className="text-sm">Demo</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center text-white/60 text-sm mt-4">
                      <span>Cliquez pour retourner</span>
                      <span className="ml-2">←</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Shadow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-2xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
