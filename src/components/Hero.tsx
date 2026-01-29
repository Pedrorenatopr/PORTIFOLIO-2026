import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles size={16} className="animate-pulse" />
              Web Designer & Desenvolvedor
            </div>
            
            <h1 className="text-5xl md:text-6xl text-white leading-tight">
              Transformo suas ideias em{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                experiências digitais
              </span>
            </h1>
            
            <p className="text-xl text-gray-400">
              Criação de sites institucionais e landing pages de alta performance. 
              Especializado em WordPress, Elementor e desenvolvimento customizado com tecnologias modernas.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full overflow-hidden group flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Portfólio
                  <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Fale Comigo
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
                  <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    9+
                  </div>
                  <div className="text-gray-400 text-sm">Projetos Concluídos</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
                  <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-gray-400 text-sm">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl rotate-3 opacity-10"></div>
            <div className="relative border-2 border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ0MTY1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology"
                className="relative rounded-3xl w-full"
              />
            </div>
            {/* Floating Code Icon */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-purple-600 p-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-bounce">
              <Code2 className="text-white" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
