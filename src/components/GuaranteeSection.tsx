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
              O que meus pacientes dizem:
            </h3>
            <blockquote className="text-gray-800 font-inter italic mb-6">
              "Fazia muito tempo que eu estava querendo emagrecer, mas sempre procrastinei porque pra mim emagrecer era me privar de coisas que eu gosto e passar fome. O Ygor me mostrou que isso não era necessário, com ele tenho um planejamento prazeroso comendo só o que gosto, e desde que começamos já emagreci 5kg e ganhei bastante massa muscular"
            </blockquote>
            <div className="flex items-center">
              <img 
                src="/images/rafa.jpg" 
                alt="Depoimento de Rafaela Lopes" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-primary-700 font-montserrat">Rafaela Lopes</p>
                <p className="text-sm text-primary-600">Paciente há 5 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
