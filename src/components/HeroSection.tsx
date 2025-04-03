import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900 leading-tight">
            Transforme seu corpo com estratégia nutricional baseada em ciência
          </h1>
          <p className="text-xl mb-8 text-gray-700 font-inter">
            Protocolos personalizados para quem busca emagrecimento, hipertrofia e performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("agendar")}
              className="text-lg px-6 py-3 bg-accent hover:bg-accent-600 text-white"
              size="lg"
            >
              Quero começar agora
            </Button>
            <Button
              onClick={() => scrollToSection("servicos")}
              className="text-lg px-6 py-3 border border-primary-800 text-primary-900 bg-white hover:bg-primary-100 transition-all"
              size="lg"
            >
              Conhecer serviços
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Nutricionista em consulta" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
