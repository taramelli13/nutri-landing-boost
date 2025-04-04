
import { Mail, Phone, AlertCircle } from "lucide-react";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
