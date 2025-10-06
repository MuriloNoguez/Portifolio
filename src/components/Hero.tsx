import React from 'react';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  technologies: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon, title, technologies }) => (
  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="text-4xl text-purple-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{technologies}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const specialties = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      ),
      title: 'Frontend',
      technologies: 'React, TypeScript, Tailwind'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z" />
        </svg>
      ),
      title: 'Backend',
      technologies: 'Node.js, Express, REST'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V17C3 18.1 3.9 19 5 19H11V21C11 22.1 11.9 23 13 23H19C20.1 23 21 22.1 21 21V9ZM19 21H13V19H19V21ZM5 17V3H13.5L19 8.5V17H5Z" />
        </svg>
      ),
      title: 'Banco de dados',
      technologies: 'Postgres, Prisma'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V17C3 18.1 3.9 19 5 19H11V21C11 22.1 11.9 23 13 23H19C20.1 23 21 22.1 21 21V9ZM19 21H13V19H19V21ZM5 17V3H13.5L19 8.5V17H5Z" />
        </svg>
      ),
      title: 'Qualidade',
      technologies: 'Testes, boas práticas'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-purple-400 font-medium text-lg tracking-wide">
                Desenvolvedor FullStack
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Olá, sou{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Murilo da Silva Noguêz
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Crio experiências digitais modernas e escaláveis, do front-end elegante ao 
                back-end robusto. Foco em qualidade, performance e resultados.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
                Ver projetos
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
                Entrar em contato
              </button>
            </div>
          </div>

          {/* Right Content - Specialty Cards */}
          <div className="grid grid-cols-2 gap-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                icon={specialty.icon}
                title={specialty.title}
                technologies={specialty.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;