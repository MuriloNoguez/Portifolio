const Header = () => {
    return (
        <header className="h-20 fixed w-full bg-transparent backdrop-blur-sm flex items-center justify-center px-2 md:px-4 z-50 shadow-lg">
            <div className="flex items-center justify-between w-full max-w-6xl">
                {/* Avatar e Nome */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-400 to-purple-400 text-white flex items-center justify-center font-semibold text-base">MS</div>
                    <span className="text-white font-medium text-base">Murilo Noguêz</span>
                </div>
                
                {/* Navegação */}
                <nav className="flex gap-5 md:gap-8">
                    <a href="#sobre" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Sobre</a>
                    <a href="#habilidades" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Habilidades</a>
                    <a href="#projetos" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Projetos</a>
                    <a href="#experiencia" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Experiência</a>
                    <a href="#contato" className="text-gray-300 hover:text-purple-400 text-sm font-normal transition-colors">Contato</a>
                </nav>
                
                {/* Contatos */}
                <div className="flex items-center gap-3 md:gap-5">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400 transition-colors" title="Github">
                        <img src="/Github.png" alt="Github" className="h-[20px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/murilo-da-silva-nogu%C3%AAz-732a022b0/" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400 transition-colors" title="Linkedin">
                        <img src="/Linkdin.png" alt="Linkedin" className="h-[20px]" />
                    </a>
                    <button className="bg-purple-400 hover:bg-indigo-400 text-white rounded-md h-10 w-32 text-sm font-medium transition-colors shadow-md">Vamos conversar</button>
                </div>
            </div>
        </header>
    );
};

export default Header;