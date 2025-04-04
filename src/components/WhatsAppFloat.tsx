
import { MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppFloat = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="https://wa.me/5518991452285?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20suas%20consultas!" 
            className="whatsapp-float" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Fale conosco</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppFloat;
