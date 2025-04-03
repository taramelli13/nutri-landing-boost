import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-primary-900/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo-branco.png"
            alt="Logo Ygor Taramelli"
            className="h-12 object-contain"
          />
          <span className="text-white text-xl md:text-2xl font-bold font-montserrat">
            Ygor Taramelli
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["sobre", "resultados", "servicos", "depoimentos", "contato"].map((item) => (
            <a
              key={item}
              href={"#" + item}
              className="text-white hover:text-accent-400 font-medium transition-colors font-inter"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Button 
            onClick={() => scrollToSection("agendar")}
            className="bg-accent hover:bg-accent-600 text-white"
          >
            Agendar Consulta
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-800 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {["sobre", "resultados", "servicos", "depoimentos", "contato"].map((item) => (
              <a
                key={item}
                href={"#" + item}
                className="text-white hover:text-accent-400 py-2 font-medium transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection("agendar")}
              className="bg-accent hover:bg-accent-600 text-white w-full"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
