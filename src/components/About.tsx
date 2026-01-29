import { Award, Clock, Users, Heart, Code2, Rocket, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    icon: Award,
    value: "9+",
    label: "Projetos Concluídos",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Clock,
    value: "100%",
    label: "Entregas no Prazo",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    value: "100%",
    label: "Satisfação dos Clientes",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Heart,
    value: "24/7",
    label: "Suporte Dedicado",
    gradient: "from-teal-500 to-emerald-600"
  }
];

const steps = [
  {
    icon: Star,
    title: "Entendimento Profundo",
    description: "Escuto suas necessidades e objetivos para criar a solução ideal",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Rocket,
    title: "Design Estratégico",
    description: "Criação de layouts que unem estética e funcionalidade",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Qualidade",
    description: "Código limpo, otimizado e seguindo as melhores práticas",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Suporte Contínuo",
    description: "Acompanhamento e manutenção para garantir resultados duradouros",
    gradient: "from-teal-500 to-emerald-600"
  }
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl -rotate-3 opacity-10"></div>
            <div className="relative border-2 border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzY0NDUzMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Developer"
                className="relative rounded-3xl w-full"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full backdrop-blur-sm">
              Sobre Mim
            </div>
            
            <h2 className="text-4xl md:text-5xl text-white">
              Transformando Ideias em <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Realidade Digital</span>
            </h2>
            
            <p className="text-gray-400 text-lg">
              Sou um web designer apaixonado por criar experiências digitais que fazem a diferença. 
              Com foco em design moderno, funcionalidade e resultados, trabalho para transformar 
              a presença online dos meus clientes.
            </p>

            <p className="text-gray-400 text-lg">
              Especializado em WordPress e Elementor, também desenvolvo soluções customizadas com 
              HTML, CSS e JavaScript. Cada projeto é tratado com dedicação e atenção aos detalhes, 
              garantindo que o resultado final supere as expectativas.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
                Minha Abordagem
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity`}></div>
                      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                        <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <h4 className="text-white mb-1 text-sm">{step.title}</h4>
                        <p className="text-gray-400 text-xs">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity`}></div>
                    <div className="relative text-center p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all">
                      <Icon className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mx-auto mb-2`} size={28} />
                      <div className={`text-2xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
