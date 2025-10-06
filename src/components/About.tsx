import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-purple-400 font-medium text-lg tracking-wide">
              Quem sou
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Construindo produtos com{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                propósito
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Com anos de experiência em desenvolvimento web, atuo de ponta a ponta para 
              entregar soluções rápidas, seguras e fáceis de manter.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Minha especialidade é transformar ideias em aplicações reais, utilizando um stack moderno com 
              foco em DX e manutenibilidade. Trabalho próximo de times de produto para iterar rápido sem 
              perder qualidade.
            </p>

            {/* Stats or Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <p className="text-gray-400">Anos de experiência</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <p className="text-gray-400">Projetos entregues</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <p className="text-gray-400">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;