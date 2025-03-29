
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Consultoria para Hipertrofia",
    description: "Protocolo nutricional focado no ganho de massa muscular, com estratégias de periodização calórica e nutrientes específicos para otimizar seu treinamento.",
    includes: ["Avaliação corporal", "Plano alimentar detalhado", "Suplementação estratégica", "Ajustes quinzenais"],
    price: "R$ 497/mês",
    popular: false
  },
  {
    id: 2,
    title: "Programa de Emagrecimento",
    description: "Estratégia personalizada para perda de gordura mantendo a massa muscular, com protocolos que respeitam sua fome e preferências alimentares.",
    includes: ["Avaliação metabólica", "Dieta personalizada", "Monitoramento semanal", "Suporte via WhatsApp"],
    price: "R$ 547/mês",
    popular: true
  },
  {
    id: 3,
    title: "Pacote Performance Total",
    description: "Abordagem integrada para atletas e praticantes avançados que buscam o máximo desempenho, combinando estratégias de composição corporal e performance.",
    includes: ["Plano periodizado completo", "Nutrição pré/intra/pós treino", "Suplementação avançada", "Consultas quinzenais"],
    price: "R$ 697/mês",
    popular: false
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("agendar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Serviços personalizados
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Escolha o programa que melhor se adapta aos seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden border ${service.popular ? 'border-accent' : 'border-gray-200'} flex flex-col h-full`}
            >
              {service.popular && (
                <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 font-montserrat text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-4 font-inter">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 font-inter">
                      <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-2xl font-bold text-primary-600 mb-4 font-montserrat">{service.price}</p>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${service.popular ? 'bg-accent hover:bg-accent-600' : 'bg-primary hover:bg-primary-700'} text-white`}
                >
                  Quero este plano
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-inter mb-4">
            Não encontrou um plano adequado para suas necessidades?
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-primary text-primary hover:bg-primary-50"
          >
            Entre em contato para um plano personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
