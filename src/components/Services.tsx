import { Globe, Zap, Wrench, Palette, TrendingUp, Shield, Smartphone, Search } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Desenvolvimento de sites corporativos profissionais que transmitem credibilidade e fortalecem a presença digital da sua marca.",
    features: ["Design responsivo", "SEO otimizado", "Painel administrativo"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em resultados. Ideal para lançamentos, campanhas e captação de leads.",
    features: ["Foco em conversão", "Integração com ferramentas", "A/B testing"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Wrench,
    title: "Manutenção de Sites",
    description: "Suporte técnico completo para manter seu site sempre atualizado, seguro e funcionando perfeitamente.",
    features: ["Atualizações regulares", "Backup automático", "Suporte técnico"],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: TrendingUp,
    title: "Otimização e Performance",
    description: "Melhoria de velocidade, SEO e experiência do usuário. Sites mais rápidos convertem mais.",
    features: ["Otimização de imagens", "Cache avançado", "Core Web Vitals"],
    gradient: "from-cyan-500 to-teal-600"
  },
  {
    icon: Palette,
    title: "Redesign de Sites",
    description: "Modernização completa do seu site com design atual, melhor usabilidade e tecnologias atualizadas.",
    features: ["Design moderno", "UX aprimorada", "Migração segura"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Sites que funcionam perfeitamente em todos os dispositivos: desktop, tablet e smartphone.",
    features: ["Mobile-first", "Touch-friendly", "Cross-browser"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Search,
    title: "SEO e Marketing Digital",
    description: "Otimização para mecanismos de busca e estratégias para aumentar sua visibilidade online.",
    features: ["SEO on-page", "Meta tags otimizadas", "Google Analytics"],
    gradient: "from-teal-500 to-emerald-600"
  },
  {
    icon: Shield,
    title: "Segurança e SSL",
    description: "Implementação de certificados SSL, proteção contra malware e backups regulares para máxima segurança.",
    features: ["Certificado SSL", "Firewall", "Monitoramento"],
    gradient: "from-rose-500 to-orange-600"
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            O Que Faço
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Serviços Completos de <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Web Design</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas para sua presença digital, desde a criação até a manutenção contínua
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl text-white mb-4">
              Precisa de um serviço <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">personalizado</span>?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Cada projeto é único. Vamos conversar sobre suas necessidades específicas e criar uma solução sob medida para o seu negócio.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full overflow-hidden group/btn"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(6,182,212,0.5)] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
