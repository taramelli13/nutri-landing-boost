
import { Instagram, Facebook, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-bold font-montserrat mb-4">
              Nutri<span className="text-accent">Boost</span>
            </h1>
            <p className="text-gray-400 max-w-xs font-inter">
              Nutrição especializada para hipertrofia e emagrecimento com resultados comprovados.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contato@nutriboost.com.br" className="text-gray-400 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/5511987654321" className="text-gray-400 hover:text-accent transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Navegação</h3>
              <ul className="space-y-2 font-inter">
                <li>
                  <button onClick={() => scrollToSection("sobre")} className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicos")} className="text-gray-400 hover:text-white transition-colors">
                    Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("resultados")} className="text-gray-400 hover:text-white transition-colors">
                    Resultados
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("depoimentos")} className="text-gray-400 hover:text-white transition-colors">
                    Depoimentos
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Serviços</h3>
              <ul className="space-y-2 font-inter">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hipertrofia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Emagrecimento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Performance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Avaliação corporal
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Contato</h3>
              <p className="text-gray-400 mb-4 font-inter">
                Avenida Paulista, 1000<br />
                São Paulo, SP<br />
                CEP: 01310-100<br />
                Tel: (11) 98765-4321
              </p>
              <Button 
                onClick={() => scrollToSection("agendar")}
                className="bg-accent hover:bg-accent-600 text-white"
              >
                Agendar consulta
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm font-inter">
            &copy; {new Date().getFullYear()} NutriBoost. Todos os direitos reservados.<br />
            CRN 12345 - Responsável técnico: Dr. Carlos Silva
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
