import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-10 flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="block text-gray-100 text-sm rounded-full font-medium bg-[#23242a]/80 border border-[#35363c] text-center w-42">
            Sobre mim
          </span>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
            Atualmente sou estudante de Análise e Desenvolvimento de Sistemas (ADS) no Senac RS, cursando o 4º semestre. Tenho grande interesse por tecnologia, desenvolvimento web e inovação.
          </p>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            Busco constantemente aprender novas ferramentas, linguagens e boas práticas para me tornar um profissional completo. Gosto de desafios, de trabalhar em equipe e de transformar ideias em soluções digitais que impactam positivamente a vida das pessoas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;