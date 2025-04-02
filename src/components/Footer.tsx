import { Button } from "@/components/ui/button";
import {
  Instagram,
  Mail,
  MessageSquare,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + descrição */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo-branco.png"
              alt="Ygor Taramelli"
              className="h-10 object-contain"
            />
            <span className="text-white text-lg font-bold font-montserrat">
              Ygor Taramelli
            </span>
          </div>
          <p className="text-sm text-primary-100">
            Consultoria nutricional baseada em evidências para transformação corporal com estratégia.
          </p>

          {/* Ícones com links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/ygortaramelli.nutri" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-accent transition-colors" />
            </a>
            <a href="mailto:nutriygortaramelli@gmail.com?subject=Quero saber mais sobre as consultas" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5 hover:text-accent transition-colors" />
            </a>
            <a href="https://wa.me/5518991452285?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20suas%20consultas!" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5 hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-white font-bold mb-4">Navegação</h4>
          <ul className="space-y-2 text-primary-100 text-sm">
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Resultados</li>
            <li>Depoimentos</li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="text-white font-bold mb-4">Serviços</h4>
          <ul className="space-y-2 text-primary-100 text-sm">
            <li>Hipertrofia</li>
            <li>Emagrecimento</li>
            <li>Performance</li>
            <li>Avaliação corporal</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-bold mb-4">Contato</h4>
          <ul className="space-y-2 text-primary-100 text-sm">
            <li>Avenida Paulista, 1000</li>
            <li>São Paulo, SP</li>
            <li>CEP: 01310-100</li>
            <li>Tel: (11) 98765-4321</li>
          </ul>
          <Button className="bg-accent mt-4 hover:bg-accent-600 text-white">
            Agendar consulta
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-primary-800 pt-6 text-center text-sm text-primary-100">
        © 2025 Ygor Taramelli. Todos os direitos reservados.<br />
        CRN 12345 — Responsável técnico: Ygor Taramelli
      </div>
    </footer>
  );
};

export default Footer;
