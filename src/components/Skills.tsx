const skills = [
  { name: "WordPress", level: 95, category: "CMS", color: "from-cyan-500 to-blue-600" },
  { name: "Elementor", level: 95, category: "Page Builder", color: "from-purple-500 to-pink-600" },
  { name: "Figma", level: 90, category: "Design", color: "from-pink-500 to-rose-600" },
  { name: "HTML5", level: 95, category: "Frontend", color: "from-cyan-500 to-teal-600" },
  { name: "CSS3", level: 95, category: "Frontend", color: "from-purple-500 to-indigo-600" },
  { name: "JavaScript", level: 85, category: "Frontend", color: "from-blue-500 to-cyan-600" },
  { name: "Responsive Design", level: 95, category: "Design", color: "from-teal-500 to-emerald-600" },
  { name: "SEO", level: 85, category: "Marketing", color: "from-rose-500 to-orange-600" },
  { name: "UI/UX Design", level: 85, category: "Design", color: "from-cyan-500 to-purple-600" },
  { name: "Performance Optimization", level: 80, category: "Técnico", color: "from-purple-500 to-pink-600" },
];

const tools = [
  { name: "WordPress", icon: "🔷" },
  { name: "Elementor", icon: "⚡" },
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "🎯" },
  { name: "Photoshop", icon: "🖼️" },
  { name: "VS Code", icon: "💻" },
  { name: "Git", icon: "🔀" },
  { name: "Google Analytics", icon: "📊" },
  { name: "PageSpeed Insights", icon: "⚡" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "Contact Form 7", icon: "📧" },
  { name: "Yoast SEO", icon: "🔍" }
];

export function Skills() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            Habilidades
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Tecnologias e <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Ferramentas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Domínio das principais tecnologias e ferramentas para entregar projetos de alta qualidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
              Principais Competências
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-500 text-sm ml-2">({skill.category})</span>
                    </div>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="relative w-full bg-gray-800/50 border border-gray-700/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
                    <div
                      className={`relative bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: '0 0 20px rgba(6,182,212,0.5)'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
              Ferramentas e Plataformas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <div className="text-gray-300 text-sm">{tool.name}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                <h4 className="text-xl text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Diferenciais
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm shadow-lg shadow-cyan-500/30">
                      ✓
                    </span>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Código limpo e otimizado seguindo as melhores práticas</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm shadow-lg shadow-purple-500/30">
                      ✓
                    </span>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Design responsivo e mobile-first em todos os projetos</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm shadow-lg shadow-pink-500/30">
                      ✓
                    </span>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Otimização para SEO e performance desde o início</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm shadow-lg shadow-cyan-500/30">
                      ✓
                    </span>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Suporte e documentação completa dos projetos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
