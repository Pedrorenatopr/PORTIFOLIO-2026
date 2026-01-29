import { ExternalLink, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import optimerImage from "figma:asset/e0219705239cb051e665d240595ddbc7623cb88b.png";
import smartConsultoriaImage from "figma:asset/2c4e216ea43053fecb8f714a0e947564cb2a86a2.png";
import smartLandingPageImage from "figma:asset/47728bf673798b26d50648fe5bb83a152c7d8bab.png";
import conamaImage from "figma:asset/8eefc33bb5ce2aaf96b0a99249779de65459a00d.png";
import professoraAntonietaImage from "figma:asset/32b3fef763951765eb7cb5d212cb6e86bbe06409.png";
import growthCredImage from "figma:asset/7867afad2a7ccbad103eb3ac545c8ffc0906c484.png";

const projects = [
  {
    title: "Optimer",
    url: "https://optimer.com.br/",
    category: "Site Institucional",
    description: "Site corporativo desenvolvido com foco em apresentação profissional de serviços e produtos.",
    tags: ["WordPress", "Elementor", "Design Responsivo"],
    gradient: "from-cyan-500 to-blue-600",
    image: optimerImage
  },
  {
    title: "Smart Consultoria BSB",
    url: "https://www.smartconsultoriabsb.com.br/",
    category: "Site Institucional",
    description: "Portal institucional para empresa de consultoria com design moderno e profissional.",
    tags: ["WordPress", "Landing Page", "SEO"],
    gradient: "from-purple-500 to-pink-600",
    image: smartConsultoriaImage
  },
  {
    title: "Smart Consultoria - Landing Page",
    url: "https://www.smartconsultoriabsb.com.br/smart.html",
    category: "Landing Page",
    description: "Landing page focada em conversão para serviços específicos da consultoria.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-pink-500 to-rose-600",
    image: smartLandingPageImage
  },
  {
    title: "Conama Construtora",
    url: "https://conamaconstrutora.com.br/",
    category: "Site Institucional",
    description: "Site para construtora com galeria de projetos e informações de empreendimentos.",
    tags: ["WordPress", "Galeria", "Responsivo"],
    gradient: "from-cyan-500 to-teal-600",
    image: conamaImage
  },
  {
    title: "Professora Antonieta BSB",
    url: "https://professoraantonietabsb.com.br/",
    category: "Site Educacional",
    description: "Site educacional com design clean e foco em conteúdo didático.",
    tags: ["WordPress", "Educação", "UI/UX"],
    gradient: "from-purple-500 to-indigo-600",
    image: professoraAntonietaImage
  },
  {
    title: "Growth Cred",
    url: "https://www.growthcred.com.br/",
    category: "Site Institucional",
    description: "Plataforma institucional para empresa de crédito com foco em credibilidade e conversão.",
    tags: ["WordPress", "Elementor", "Performance"],
    gradient: "from-blue-500 to-cyan-600",
    image: growthCredImage
  }
];

const categories = ["Todos", "Site Institucional", "Landing Page", "E-commerce / Serviços", "Site Educacional", "Site Saúde", "Site Pessoal"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Meu Trabalho
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Projetos <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Desenvolvidos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos sites que já desenvolvi para clientes de diversos segmentos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "text-white"
                  : "bg-gray-900/50 border border-cyan-500/20 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400"
              }`}
            >
              {selectedCategory === category && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                  <div className="absolute inset-0 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
                </>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        {/* Overlay on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4`}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative bg-gradient-to-r ${project.gradient} text-white px-6 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg`}
                          >
                            Visitar Site
                            <ExternalLink size={16} />
                          </a>
                        </div>
                    </>
                  ) : (
                    <>
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <Globe className="text-cyan-400/50 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" size={64} />
                        
                        {/* Overlay on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4`}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative bg-gradient-to-r ${project.gradient} text-white px-6 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg`}
                          >
                            Visitar Site
                            <ExternalLink size={16} />
                          </a>
                        </div>
                    </>
                  )}
                </div>
                
                <div className="p-6">
                  <div className={`inline-block bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full text-sm mb-3 border border-cyan-500/20`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-800/50 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                  >
                    Ver projeto completo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Esses são apenas alguns dos projetos que desenvolvi. Cada um com suas particularidades e desafios únicos.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full overflow-hidden group"
          >
            <span className="relative z-10">Vamos Criar Seu Projeto?</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 shadow-[0_0_30px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
}