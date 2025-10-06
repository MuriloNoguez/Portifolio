import React from 'react';

const Contact: React.FC = () => {
  return (
  <section id="contato" className="py-20 flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gradient-to-r from-purple-600/90 via-purple-500/90 to-teal-500/90 rounded-3xl p-8 md:p-12 text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                />
              </svg>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos construir algo incrível?
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Me envie uma mensagem e retornarei o mais breve possível.
          </p>

          {/* Botões de contato */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:murilodsnoguez@gmail.com"
              className="bg-white/20 hover:bg-white/30 text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              murilodsnoguez@gmail.com
            </a>
            
            <a
              href="https://github.com/MuriloNoguez"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/murilo-da-silva-nogu%C3%AAz-732a022b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;