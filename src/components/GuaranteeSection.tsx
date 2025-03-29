
import { CircleCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-primary-50 rounded-2xl overflow-hidden shadow-sm">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat text-gray-900">
              Garantia de satisfação
            </h2>
            <div className="flex items-start mb-6">
              <CircleCheck className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700 font-inter">
                <strong>Primeira consulta com garantia total:</strong> Se você não ficar satisfeito com o atendimento inicial, não paga nada.
              </p>
            </div>
            <div className="flex items-start mb-6">
              <CircleCheck className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700 font-inter">
                <strong>Suporte contínuo:</strong> Tenha acesso a canais exclusivos para tirar dúvidas e receber orientações durante todo o processo.
              </p>
            </div>
            <div className="flex items-start">
              <CircleCheck className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700 font-inter">
                <strong>Resultados comprovados:</strong> Mais de 90% dos pacientes alcançam ou superam suas metas nos primeiros 3 meses de acompanhamento.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-primary-100 to-primary-200 p-8 md:p-12">
            <h3 className="text-xl font-bold mb-4 text-primary-700 font-montserrat">
              O que nossos pacientes dizem:
            </h3>
            <blockquote className="text-gray-800 font-inter italic mb-6">
              "A abordagem do Dr. Carlos vai muito além de apenas contar calorias. É um processo educativo que me fez entender meu corpo e construir hábitos sustentáveis. Os resultados foram muito além das minhas expectativas."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Depoimento de paciente" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-primary-700 font-montserrat">Juliana Mendes</p>
                <p className="text-sm text-primary-600">Paciente há 6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
