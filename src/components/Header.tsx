import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            &lt;Web Designer /&gt;
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                Portfólio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full overflow-hidden group"
              >
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 bg-gray-900/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Portfólio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full"
              >
                Contato
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
