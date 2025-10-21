'use client';

import { useState } from 'react';
import { FaReact, FaNode, FaPython, FaDatabase, FaAws, FaMobile } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiTailwindcss, SiJavascript } from 'react-icons/si';

interface Tech {
  name: string;
  icon: React.ElementType;
  level: number;
  category: string;
  color: string;
}

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: Tech[] = [
    { name: 'React', icon: FaReact, level: 95, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'React Native', icon: FaMobile, level: 90, category: 'Mobile', color: 'from-blue-400 to-purple-500' },
    { name: 'TypeScript', icon: SiTypescript, level: 90, category: 'Language', color: 'from-blue-500 to-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, level: 85, category: 'Frontend', color: 'from-gray-400 to-gray-600' },
    { name: 'JavaScript', icon: SiJavascript, level: 95, category: 'Language', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Node.js', icon: FaNode, level: 90, category: 'Backend', color: 'from-green-400 to-green-600' },
    { name: 'NestJS', icon: SiNestjs, level: 85, category: 'Backend', color: 'from-red-500 to-pink-500' },
    { name: 'Python', icon: FaPython, level: 80, category: 'Language', color: 'from-blue-400 to-yellow-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 85, category: 'Database', color: 'from-blue-600 to-blue-700' },
    { name: 'SQL', icon: FaDatabase, level: 85, category: 'Database', color: 'from-orange-400 to-red-500' },
    { name: 'AWS', icon: FaAws, level: 75, category: 'Cloud', color: 'from-orange-500 to-yellow-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, category: 'Frontend', color: 'from-cyan-400 to-teal-500' },
  ];

  const categories = ['Tous', 'Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'Language'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredTechs = selectedCategory === 'Tous'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section id="stack" className="min-h-screen py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Stack Technique
        </h2>
        <p className="text-center text-white/60 mb-12">
          Mes compétences et niveaux de maîtrise
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass-effect-strong border-2 border-purple-400 scale-105'
                  : 'glass-effect border-2 border-white/10 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid with Liquid Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTechs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="glass-effect-strong rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                  </div>

                  {/* Tech Name */}
                  <h3 className="text-center font-semibold text-white mb-3">{tech.name}</h3>

                  {/* Skill Level Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: hoveredTech === tech.name ? `${tech.level}%` : '0%',
                      }}
                    />
                  </div>

                  {/* Level Percentage */}
                  <div className="text-center mt-2">
                    <span className={`text-sm font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.level}%
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-1 rounded-full glass-effect text-white/70">
                      {tech.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-effect-strong rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {technologies.length}+
            </div>
            <div className="text-white/70">Technologies maîtrisées</div>
          </div>
          <div className="glass-effect-strong rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-white/70">Années d'expérience</div>
          </div>
          <div className="glass-effect-strong rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-white/70">Projets réalisés</div>
          </div>
        </div>
      </div>
    </section>
  );
}
