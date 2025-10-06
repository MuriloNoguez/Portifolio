import React from 'react';

const projects = [
  {
    title: 'Pokedex',
    description: 'Utilizando a API do PokeAPI, este projeto exibe uma lista de Pokémons com detalhes como nome, imagem e tipos. Desenvolvido com React e TailwindCSS para uma interface responsiva e atraente.',
    url: 'https://github.com/MuriloNoguez/Pokedex',
    stack: ['React', 'Tailwind', 'API'],
  },
  {
    title: 'Site Semana Acadêmica Senac',
    description: 'Projeto realizado em grupo, para a semana acadêmica do Senac. Desenvolvido com React e TailwindCSS..',
    url: 'https://github.com/amaralTheSage/SAJIC_2024',
    stack: ['React', 'Tailwind'],
  },
  {
    title: 'API de Biblioteca',
    description: 'API de biblioteca com Node.js, Express e TypeScript.',
    url: 'https://github.com/MuriloNoguez/API-Biblioteca',
    stack: ['Node.js', 'Express', 'TypeScript'],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014]">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-12 w-full">
          <span className="block text-gray-100 text-sm rounded-full font-medium bg-[#23242a]/80 border border-[#35363c] text-center w-42">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">Projetos em destaque</h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl">
            Uma seleção de trabalhos que demonstram minha capacidade técnica e cuidado com a experiência do usuário.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full ">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir projeto ${project.title} em nova aba`}
              className="bg-[#181a20] border border-[#35363c] rounded-2xl p-8 flex flex-col gap-4 relative hover:border-purple-500/60 transition-colors items-center w-[25rem] h-[10rem] cursor-pointer no-underline"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm text-center w-[22rem] h-[4rem]">{project.description}</p>
              <div className="flex flex-wrap gap-2 ">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-[#23242a] border border-[#35363c] text-gray-200 rounded-sm px-4 text-xs font-medium w-20 h-[rem] text-center">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
