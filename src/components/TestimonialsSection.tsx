import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const transformations = [
  {
    id: 1,
    name: "Carlos",
    monthsFollowed: 5,
    programType: "premium",
    description: "Perda de mais de 10kg com plano nutricional e treino personalizado.",
    beforeImage: "/images/antes-rafael.jpg",
    afterImage: "/images/depois-rafael.jpg"
  },
  {
    id: 2,
    name: "Felipe",
    monthsFollowed: 4,
    programType: "premium",
    description: "Pouca diferença na balanca, mas no corpo!",
    beforeImage: "/images/antes-felipe.jpeg",
    afterImage: "/images/depois-felipe.jpg"
  },
  {
    id: 3,
    name: "Elis",
    monthsFollowed: 6,
    programType: "premium",
    description: "Aumento de massa muscular e definição corporal.",
    beforeImage: "/images/antes-elis.jpg",
    afterImage: "/images/depois-elis.jpg"
  },
  {
    id: 4,
    name: "Henrick",
    monthsFollowed: 6,
    programType: "premium",
    description: "Aumento de massa muscular e definição corporal.",
    beforeImage: "/images/antes-henrick.jpg",
    afterImage: "/images/depois-henrick.jpg"
  },
  {
    id: 5,
    name: "Mayra",
    monthsFollowed: 6,
    programType: "premium",
    description: "Emagrecimento sáudavel adaptado a rotina.",
    beforeImage: "/images/antes-mayra.jpg",
    afterImage: "/images/depois-mayra.jpg"
  },
  {
    id: 6,
    name: "Maria",
    monthsFollowed: 6,
    programType: "premium",
    description: "-10kgs em 3 meses!",
    beforeImage: "/images/antes-maria.jpg",
    afterImage: "/images/depois-maria.jpg"
  }
  
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Resultados reais dos pacientes
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Veja as transformações incríveis dos meus pacientes
          </p>
        </div>

        <div className="relative">
          <Button 
            onClick={scrollLeft}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div 
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {transformations.map((transformation) => (
              <div 
                key={transformation.id} 
                className="min-w-[300px] md:min-w-[350px] bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col snap-start"
              >
                <h4 className="font-semibold text-gray-900 font-montserrat">{transformation.name} - {transformation.monthsFollowed} meses</h4>
                <div className="relative w-full aspect-[3/4] rounded overflow-hidden mb-4 flex">
                  <div className="w-1/2">
                    <img 
                      src={transformation.beforeImage} 
                      alt={`${transformation.name} antes`}
                      className="object-cover w-full h-full object-[center_bottom] border-r border-gray-300"
                    />
                    <p className="text-center text-xs text-gray-500 mt-1">Antes</p>
                  </div>
                  <div className="w-1/2">
                    <img 
                      src={transformation.afterImage} 
                      alt={`${transformation.name} depois`}
                      className="object-cover w-full h-full object-[center_bottom]"
                    />
                    <p className="text-center text-xs text-gray-500 mt-1">Depois</p>
                  </div>
                </div>
                <p className="text-gray-700 font-inter">{transformation.description}</p>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={scrollRight}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
