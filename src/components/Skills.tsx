import React from 'react';

const skills = [
  'TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma',
  'TailwindCSS', 'Vite', 'Docker', 'Jest', 'JavaScript', 'GitHub'
];

const Skills: React.FC = () => {
  return (
  <section id="habilidades" className=" flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014] pb-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-6">
          <span className="block text-gray-100 text-sm rounded-full font-medium bg-[#23242a]/80 border border-[#35363c] text-center w-42">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
            Tecnologias e ferramentas
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-[#35363c] rounded-xl py-4 px-2 text-gray-100 text-lg font-normal text-center bg-transparent hover:border-purple-500/60 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
