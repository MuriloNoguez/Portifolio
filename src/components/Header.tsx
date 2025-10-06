const Header = () => {
    return (
        <header className="h-16 md:h-20 fixed w-full bg-transparent backdrop-blur-sm flex items-center justify-center px-2 md:px-4 z-50 shadow-lg">
            <div className="flex items-center justify-between w-full max-w-6xl min-w-0">
                {/* Avatar e Nome */}
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-gradient-to-br from-indigo-400 to-purple-400 text-white flex items-center justify-center font-semibold text-sm md:text-base">MS</div>
                    <span className="text-white font-medium text-sm md:text-base max-w-[110px] md:max-w-none truncate">Murilo Noguêz</span>
                </div>
                
                {/* Navegação (visível só em md+) */}
                <nav className="hidden md:flex gap-5 md:gap-8">
                    <a href="#sobre" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Sobre</a>
                    <a href="#habilidades" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Habilidades</a>
                    <a href="#projetos" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Projetos</a>
                    <a href="#experiencia" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Experiência</a>
                    <a href="#contato" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Contato</a>
                </nav>
                
                {/* Contatos */}
                <div className="flex items-center gap-2 md:gap-5 flex-shrink-0">
                    <a href="https://github.com/MuriloNoguez" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400 transition-colors" title="Github">
                        <img src="/Github.png" alt="Github" className="h-4 md:h-[20px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/murilo-da-silva-nogu%C3%AAz-732a022b0/" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400 transition-colors" title="Linkedin">
                        <img src="/Linkdin.png" alt="Linkedin" className="h-4 md:h-[20px]" />
                    </a>
                    <a href="#contato" aria-label="Ir para contato" className="bg-purple-400 hover:bg-indigo-400 text-white rounded-md h-8 md:h-10 w-24 md:w-32 text-xs md:text-sm font-medium transition-colors shadow-md flex items-center justify-center">Vamos conversar</a>
                </div>
            </div>
        </header>
    );
};

export default Header;