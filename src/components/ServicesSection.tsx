import { CheckCircle } from "lucide-react";

const ServicePlans = () => {
  return (
    <section className="bg-white py-20" id="servicos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-primary-900">
          Planos de Acompanhamento
        </h2>
        <p className="text-lg md:text-xl text-primary-800 font-inter font-medium mb-12 max-w-2xl mx-auto">
          Escolha o plano que mais combina com seus objetivos e conte comigo para alcançar sua melhor versão.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plano Nutri */}
          <div className="border border-primary-700 rounded-2xl p-6 shadow-sm text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-2 text-primary-900">
                Plano Nutri
              </h3>
              <p className="text-gray-700 mb-4">
                Nutrição personalizada baseada em ciência, pensada para a sua rotina, preferências e objetivos.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Alimentação personalizada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Feedbacks quinzenais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Estratégias flexíveis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Suporte via WhatsApp
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/5518991452285?text=Ol%C3%A1%2C%20Ygor!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Nutri.&utm_source=landingpage&utm_medium=botao&utm_campaign=plano-nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-primary-700 hover:bg-primary-800 text-white w-full py-3 px-6 rounded-md font-medium transition-colors"
            >
              Quero esse plano
            </a>
          </div>

          {/* Plano Premium */}
          <div className="border-2 border-primary-700 rounded-2xl p-6 shadow-md text-left relative flex flex-col justify-between">
            <div>
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                MAIS POPULAR
              </span>
              <h3 className="text-2xl font-bold font-montserrat mb-2 text-primary-900 mt-4">
                Plano Premium
              </h3>
              <p className="text-gray-700 mb-4">
                Nutrição + treino individualizado com acompanhamento completo para acelerar seus resultados.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Tudo do Plano Nutri
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Treino com progressão no app
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Materiais educativos sobre treino
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" /> Evolução orientada e contínua
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/5518991452285?text=Ol%C3%A1%2C%20Ygor!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Premium.&utm_source=landingpage&utm_medium=botao&utm_campaign=plano-premium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-primary-700 hover:bg-primary-800 text-white w-full py-3 px-6 rounded-md font-medium transition-colors"
            >
              Quero esse plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
