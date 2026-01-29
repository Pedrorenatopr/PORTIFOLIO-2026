import { Mail, MessageSquare, Phone, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Fale Comigo
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Vamos Conversar Sobre <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Seu Projeto</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entre em contato e vamos transformar suas ideias em um site incrível
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2 justify-center">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
                Informações de Contato
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Mail, title: "Email", info: "pedroliradev@gmail.com", gradient: "from-cyan-500 to-blue-600" },
                  { icon: Phone, title: "Telefone / WhatsApp", info: "(61) 9 9120-7479", gradient: "from-purple-500 to-pink-600" },
                  { icon: MapPin, title: "Localização", info: "Brasília - DF, Brasil", gradient: "from-pink-500 to-rose-600" },
                  { icon: MessageSquare, title: "Horário de Atendimento", info: "Segunda a Sexta: 9h às 18h", gradient: "from-teal-500 to-emerald-600" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity`}></div>
                      <div className="relative flex items-start bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.info}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-40 blur transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8">
                <h4 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-cyan-400" size={24} />
                  Pronto para Começar?
                </h4>
                <p className="text-gray-400 mb-6">
                  Solicite um orçamento sem compromisso e descubra como posso ajudar 
                  a transformar sua presença digital.
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "Orçamento gratuito", gradient: "from-cyan-500 to-blue-600" },
                    { text: "Resposta em até 24h", gradient: "from-purple-500 to-pink-600" },
                    { text: "Consultoria personalizada", gradient: "from-pink-500 to-rose-600" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <span className={`w-6 h-6 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mr-3 text-sm shadow-lg`}>
                        ✓
                      </span>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}