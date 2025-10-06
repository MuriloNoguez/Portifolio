import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-4 px-2 md:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 bg-[#0e1014] border-t border-[#23242a] mt-8">
    <span>
      © 2025 Murilo da Silva Noguêz. Todos os direitos reservados.
    </span>
    <span className="mt-1 md:mt-0">
      Construído com React + Tailwind. Hospedado na Vercel.
    </span>
  </footer>
);

export default Footer;
