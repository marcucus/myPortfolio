'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  period: string;
  achievements: string[];
  image?: string;
  skills?: string[];
  organization?: string;
}

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "GoldWen - Application de rencontre",
      description: "Application mobile de rencontre nouvelle génération valorisant la qualité des interactions",
      longDescription: "GoldWen, l'application mobile de rencontre nouvelle génération qui valorise la qualité des interactions plutôt que la quantité. Conçue pour transformer la façon dont on créé des liens, cette application met la compatibilité au cœur de l'expérience utilisateur.",
      tech: ["React Native", "TypeScript", "NestJS", "Python", "PostgreSQL"],
      period: "Déc 2024 - Aujourd'hui",
      achievements: [
        "Questionnaire de personnalité personnalisé à l'inscription",
        "Une connexion par jour soigneusement sélectionnée",
        "Discussions authentiques pour explorer des véritables connexions",
        "Algorithme de compatibilité basé sur les valeurs et la personnalité",
      ],
      skills: ["Gestion de projet", "Design d'interface utilisateur", "Application mobile", "React Native", "NestJS", "Python", "PostgreSQL"],
    },
    {
      title: "Bones - Marketplace",
      description: "Développement d'une application web reliée au jeu Bones",
      longDescription: "Développement d'une application web reliée au jeu Bones. Marketplace complète avec gestion des utilisateurs, produits et transactions.",
      tech: ["JavaScript", "Next.js", "Tailwind CSS", "TypeScript", "Firebase", "React.js"],
      period: "Fév 2024 - Juil 2024",
      achievements: [
        "Création de composants réutilisables",
        "Création de nouvelles pages et features",
        "Suppression de bugs existants",
        "Optimisation de code et responsive design",
      ],
      organization: "Ennea",
      image: "/projects/bonesmarketplace.png",
      skills: ["JavaScript", "Next.js", "Tailwind CSS", "Réalisation de tests", "Développement front-end", "Sens de l'organisation", "Développement full-stack", "Travail d'équipe", "TypeScript", "Développement web back-end", "Firebase", "Scrum", "React.js"],
    },
    {
      title: "LCF AUTO-PERFORMANCE",
      description: "Site web d'un garagiste permettant la prise de rendez-vous et la visualisation des actualités",
      longDescription: "Création d'un site web d'un garagiste permettant la prise de rendez-vous et la visualisation des actualités du garage (ventes de véhicules, devis etc...)",
      tech: ["Next.js", "Tailwind CSS", "React.js"],
      period: "Juin 2024",
      achievements: [
        "Système de prise de rendez-vous intégré",
        "Gestion des actualités du garage",
        "Visualisation des ventes de véhicules",
        "Interface responsive et moderne",
      ],
      image: "/projects/lcf.png",
      skills: ["Next.js", "Communication", "Tailwind CSS", "Réalisation de tests", "Développement front-end", "Sens de l'organisation", "Méthodes agiles", "Développement full-stack", "Développement web back-end", "React.js"],
    },
    {
      title: "Mon Portfolio",
      description: "Site internet servant à me présenter ainsi que de présenter mes compétences et mes projets",
      longDescription: "Création de mon site internet servant à me présenter ainsi que de présenter mes compétences et mes projets. Disponible à cette adresse : https://marquesadrien.vercel.app/",
      tech: ["JavaScript", "Tailwind CSS", "React.js"],
      period: "Mai 2024",
      achievements: [
        "Design moderne et responsive",
        "Présentation claire des compétences",
        "Mise en valeur des projets réalisés",
        "Déploiement sur Vercel",
      ],
      organization: "Autodidacte",
      skills: ["JavaScript", "Tailwind CSS", "Développement front-end", "Sens de l'organisation", "Développement full-stack", "Design d'interface utilisateur", "Développement web back-end", "React.js"],
    },
    {
      title: "Dijoma - Site vitrine",
      description: "Site vitrine pour une entreprise de réparation automobile",
      longDescription: "Création d'un site vitrine pour une entreprise de réparation automobile avec présentation des services et informations de contact.",
      tech: ["React.js", "Tailwind CSS"],
      period: "Juin 2023",
      achievements: [
        "Design moderne et professionnel",
        "Présentation claire des services",
        "Interface responsive",
        "Optimisation SEO",
      ],
      image: "/projects/dijoma.png",
      skills: ["Tailwind CSS", "Réalisation de tests", "Sens de l'organisation", "Méthodes agiles", "Design d'interface utilisateur", "React.js"],
    },
    {
      title: "Foudroyer Ranking",
      description: "Service de suivi de mots-clés et positionnement sur les moteurs de recherche",
      longDescription: "Service permettant de suivre ses mots-clés et les évolutions en calculant leurs positionnement sur les moteurs de recherches (Google, Yandex, Bing).",
      tech: ["ReactJS", "NestJS", "PostgreSQL", "AWS", "Node.js", "TypeScript"],
      period: "Mars 2022 - Juil 2022",
      achievements: [
        "Suivi multi-moteurs (Google, Yandex, Bing)",
        "Calcul de positionnement en temps réel",
        "Tableaux de bord analytiques",
        "API REST performante",
      ],
      organization: "Foudroyer",
      image: "/projects/ranking.png",
      skills: ["JavaScript", "Tailwind CSS", "Développement front-end", "Sens de l'organisation", "Développement full-stack", "Travail d'équipe", "TypeScript", "Développement web back-end", "Scrum", "React.js", "Node.js", "SQL", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projets Réalisés
        </h2>
        <p className="text-center text-white/60 mb-12">
          Cliquez sur une carte pour découvrir plus de détails
        </p>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Project screenshot"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}

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
                  className="absolute inset-0 glass-effect-strong rounded-4xl p-6 backface-hidden overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project Image or Icon */}
                    {project.image ? (
                      <div 
                        className="mb-4 relative w-full h-32 rounded-lg overflow-hidden cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(project.image!);
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl">
                          💼
                        </div>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    {project.organization && (
                      <p className="text-sm text-cyan-400 mb-2">Associé à {project.organization}</p>
                    )}
                    <p className="text-white/70 mb-4 grow">{project.description}</p>
                    <p className="text-sm text-purple-400 mb-4">{project.period}</p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full glass-effect text-xs text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 rounded-full glass-effect text-xs text-white/80">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-center text-white/60 text-sm mt-auto">
                      <span>Cliquez pour plus de détails</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 glass-effect-strong rounded-4xl p-6 backface-hidden overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.longDescription}</p>

                    <div className="grow">
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

                    <div className="flex items-center justify-center text-white/60 text-sm mt-4">
                      <span>Cliquez pour retourner</span>
                      <span className="ml-2">←</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Shadow effect */}
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-4xl blur-2xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
