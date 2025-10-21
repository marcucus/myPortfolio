'use client';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function About() {
  const education = [
    {
      degree: "Master Informatique",
      institution: "Université de Franche-Comté",
      specialization: "Développement et Validation du Logiciel",
      period: "2022 - 2024",
    },
    {
      degree: "Licence professionnelle",
      institution: "Université de Limoges",
      specialization: "Métiers de l'informatique : conduite de projet - Technologie du développement web",
      period: "2021 - 2022",
    },
    {
      degree: "BTS Informatique",
      institution: "CNED / Lycée Louis Armand Paris",
      period: "2018 - 2021",
    },
  ];

  const experience = [
    {
      title: "FullStack Developer",
      company: "Ennea",
      period: "Fév 2024 - Juil 2024",
      description: "Développement de la marketplace « Bones »",
      tasks: [
        "Création de composants et nouvelles features",
        "Optimisation de code et résolution de bugs",
        "Tests et développement responsive",
        "Suivi de projet et réalisation des sprints",
      ],
    },
    {
      title: "FullStack Developer JavaScript",
      company: "Foudroyer",
      period: "Jan 2022 - Juil 2022",
      description: "Développement de la partie Ranking",
      tasks: [
        "Suivi de mots-clés et évolutions SEO",
        "Calcul de positionnement sur les moteurs de recherche",
        "Stack: ReactJS, NestJS, PostgreSQL, AWS",
      ],
    },
    {
      title: "Développeur web JavaScript",
      company: "Bird and Human",
      period: "Déc 2019 - Fév 2020",
      description: "Interface de suivi de projets",
      tasks: [
        "Développement d'interface prestataire/client",
        "Stack: HTML/CSS/PHP/JS/SQL",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      {/* Background effect */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          À propos
        </h2>

        {/* Summary */}
        <div className="glass-effect-strong rounded-3xl p-8 mb-12">
          <p className="text-lg text-white/80 leading-relaxed">
            Après un parcours académique rigoureux, incluant un Master en Informatique
            à l'Université de Franche-Comté, j'ai développé la marketplace « Bones » chez Ennea,
            bénéficiant de mon expertise en optimisation pour les moteurs de recherche (SEO)
            et ma maîtrise en développement logiciel.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mt-4">
            Passionné par l'innovation et l'amélioration continue, j'ai contribué à la création
            d'outils de suivi de performance chez Foudroyer, renforçant l'expérience utilisateur
            et la visibilité en ligne grâce à des solutions technologiques avancées et une approche
            méthodique et autonome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="glass-effect-strong rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Expérience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white/20 pl-4 hover:border-purple-400 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-white/60 mb-2">{exp.period}</p>
                  <p className="text-white/80 mb-2">{exp.description}</p>
                  <ul className="text-sm text-white/70 space-y-1">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-effect-strong rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Formation</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white/20 pl-4 hover:border-blue-400 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                  {edu.specialization && (
                    <p className="text-sm text-white/70">{edu.specialization}</p>
                  )}
                  <p className="text-sm text-white/60 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
