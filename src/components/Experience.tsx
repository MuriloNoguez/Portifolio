import React from 'react';

interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Desenvolvedor',
    period: 'Mar 2024 — Presente',
    company: 'Senatec',
    bullets: [
      'Desenvolvimento e manutenção de interfaces responsivas com React e TailwindCSS',
      'Colaboração com design e backend para integrações e entregas mais rápidas',
      'Foco em acessibilidade, otimização de performance e experiência mobile',
    ],
  },
  {
    title: 'Assistente de TI',
    period: 'Ago 2025 — Presente',
    company: 'UP Imóveis',
    bullets: [
      'Gestão e manutenção de chatbots e automações internas (integração com WhatsApp)',
      'Automação de tarefas repetitivas e integração com APIs externas',
      'Monitoramento, documentação dos processos e treinamento de usuários',
      'Suporte técnico focado em aumentar a eficiência operacional',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="py-10 flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-[#0e1014]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center gap-4 mb-8 w-full">
          <span className="block text-gray-100 text-sm rounded-full font-medium bg-[#23242a]/80 border border-[#35363c] text-center px-5 py-1">
            Carreira
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
            Experiência
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:p-7">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className="bg-[#181a20] border border-[#35363c] rounded-2xl w-full overflow-hidden"
            >
              {/* wrapper interno com padding garantido */}
              <div
                className="
                  box-border
                  p-4 md:p-6
                  transition-all duration-300
                  hover:scale-[1.02] hover:border-[#56575d] hover:bg-[#1d1f25]
                "
                // classe para debug (ver abaixo no DevTools/console)
                data-testid="experience-card-inner"
              >
                <div className="flex flex-row justify-between items-start mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white break-words">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {exp.company}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>

                <ul className="text-gray-300 text-base leading-relaxed list-disc list-outside pl-5 space-y-1 break-words">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
