import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[1000] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setShowPopup(false)}
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold text-primary-900 mb-2 font-montserrat">
          Antes de sair...
        </h3>
        <p className="text-gray-700 font-inter mb-4">
          Que tal tirar suas dúvidas direto comigo no WhatsApp?
        </p>
        <a
          href="https://wa.me/5518991452285?text=Oi%2C%20Ygor!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-primary-700 hover:bg-primary-800 text-white">
            Falar com o Ygor
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ExitIntentPopup;