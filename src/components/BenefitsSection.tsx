
import { Check } from "lucide-react";

const benefitsList = [
  {
    id: 1,
    title: "Dietas sem neuras",
    description: "Planos alimentares que não cortam tudo que você gosta, focados em aderência e resultados."
  },
  {
    id: 2,
    title: "Acompanhamento completo",
    description: "Avaliação detalhada, plano alimentar personalizado e ajustes semanais conforme sua evolução."
  },
  {
    id: 3,
    title: "Foco em resultado",
    description: "Estratégias nutricionais específicas para sua meta, seja hipertrofia, emagrecimento ou performance."
  },
  {
    id: 4,
    title: "Suporte contínuo",
    description: "Esclarecimentos de dúvidas e ajustes em tempo real para otimizar seus resultados."
  }
];

const BenefitsSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Nutrição estratégica para seus objetivos
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Metodologia baseada em ciência e personalizada para suas necessidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsList.map((benefit) => (
            <div key={benefit.id} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex">
              <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 font-inter">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
