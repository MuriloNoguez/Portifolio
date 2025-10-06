import React from 'react';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  technologies: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon, title, technologies }) => (
  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 h-[120px] sm:h-[150px] lg:h-[170px]">
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full justify-center">
      <div className="flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm">{technologies}</p>
    </div>
  </div>
);


const specialties = [
  {
    icon: <img src="/Front.png" alt="Frontend" className="w-10 h-10" />,
    title: 'Frontend',
    technologies: 'React, TypeScript, Tailwind'
  },
  {
    icon: <img src="/Back.png" alt="Backend" className="w-10 h-10" />,
    title: 'Backend',
    technologies: 'Node.js, Express, REST'
  },
  {
    icon: <img src="/BA.png" alt="Banco de dados" className="w-10 h-10" />,
    title: 'Banco de dados',
    technologies: 'Postgres, Prisma'
  },
  {
    icon: <img src="/QA.png" alt="Qualidade" className="w-10 h-10" />,
    title: 'Qualidade',
    technologies: 'Testes, boas práticas'
  }
];

const Hero: React.FC = () => {
  return (
  <section className="min-h-[50rem] flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          {/* Coluna Esquerda */}
          <div className="flex flex-col gap-6 w-full items-center lg:items-start text-center lg:text-left">
            <span className="block text-gray-100 text-sm rounded-full font-medium bg-[#23242a]/80 border border-[#35363c] text-center w-full max-w-xs">
              Desenvolvedor FullStack
            </span>
            <h1 className="text-2xl xs:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Olá, sou <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
                Murilo da Silva Noguêz
              </span>
            </h1>
            <p className="text-sm xs:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              Crio experiências digitais modernas e escaláveis, do front-end elegante ao back-end robusto. Foco em qualidade, performance e resultados.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 mt-2 w-full max-w-xs mx-auto lg:mx-0">
              <a href="#projetos" className="bg-purple-500 hover:bg-indigo-400 text-white rounded-md h-10 w-full xs:w-32 text-sm font-medium transition-colors shadow-md flex items-center justify-center">Ver projetos</a>
              <a href="#contato" className="bg-[#181a20] border border-gray-600 text-white rounded-md h-10 w-full xs:w-32 text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center justify-center">Entrar em contato</a>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full mt-8 lg:mt-0">
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