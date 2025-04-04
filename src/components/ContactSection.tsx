
import { Check, Mail, Phone, AlertCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="agendar" className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Quer saber como posso te ajudar?
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Deixe suas informações e eu entro em contato com você!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">
                Quer ajuda personalizada?
              </h3>
              <p className="text-gray-700 mb-6 font-inter">
                Preencha o formulário e te respondo com orientações feitas para você!
              </p>
              <a
                href="https://forms.gle/HEf6V4EiH18WXbeD9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors"
              >
                Quero preencher o formulário
              </a>
            </div>
          </div>

          <div className="md:w-1/2" id="contato">
            <div className="bg-primary-600 text-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Informações de contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 font-montserrat">Telefone</p>
                    <p className="font-inter">+55 (18) 99145-2285</p>
                    <p className="font-inter text-primary-100">Atendimento: Seg-Sex, 8h-18h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 font-montserrat">E-mail</p>
                    <p className="font-inter">nutriygortaramelli@gmail.com</p>
                    <p className="font-inter text-primary-100">Respondemos em até 24h</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-500 mt-8">
                  <h4 className="font-semibold mb-4 font-montserrat flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Vagas limitadas
                  </h4>
                  <p className="font-inter">
                    Para garantir um atendimento de qualidade, disponibilizamos apenas 10 vagas por mês para novos pacientes.
                  </p>
                  <div className="mt-4 p-3 bg-primary-700 rounded-lg">
                    <p className="font-inter text-primary-100 text-sm">Vagas disponíveis para este mês:</p>
                    <p className="font-montserrat text-xl font-bold">5 vagas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
