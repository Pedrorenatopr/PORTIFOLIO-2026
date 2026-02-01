import { Heart, Github, Linkedin, Instagram, Mail, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-2">
              <Code2 size={28} className="text-cyan-400" />
              Web Designer
            </div>
            <p className="text-gray-400 text-sm">
              Criando experiências digitais que transformam negócios e conectam pessoas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "inicio" },
                { label: "Serviços", id: "servicos" },
                { label: "Portfólio", id: "portfolio" },
                { label: "Sobre", id: "sobre" }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Sites Institucionais</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Landing Pages</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Manutenção</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Otimização</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Redesign</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full"></span>
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-4">
              <li className="hover:text-cyan-400 transition-colors">contato@seusite.com.br</li>
              <li className="hover:text-cyan-400 transition-colors">(61) 9 9120-7479</li>
              <li className="hover:text-cyan-400 transition-colors">Brasília - DF, Brasil</li>
            </ul>
            <div className="flex gap-3">
              {[
                { icon: Github, url: "https://github.com", gradient: "from-cyan-500 to-blue-600" },
                { icon: Linkedin, url: "https://linkedin.com", gradient: "from-purple-500 to-pink-600" },
                { icon: Instagram, url: "https://instagram.com", gradient: "from-pink-500 to-rose-600" },
                { icon: Mail, url: "mailto:contato@seusite.com.br", gradient: "from-teal-500 to-emerald-600" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-lg opacity-0 group-hover:opacity-50 blur transition-opacity`}></div>
                    <div className="relative w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all">
                      <Icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Web Designer.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
             
          </p>
        </div>
      </div>
    </footer>
  );
}
