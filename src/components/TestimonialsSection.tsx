import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const transformations = [
  {
    id: 1,
    name: "Carlos",
    monthsFollowed: 5,
    programType: "premium",
    description: "Perda de mais de 30kg com plano nutricional e treino personalizado.",
    beforeImage: "/images/carlos-before.jpg",
    afterImage: "/images/carlos-after.jpg"
  },
  {
    id: 2,
    name: "Fernanda",
    monthsFollowed: 4,
    programType: "standard",
    description: "Transformação incrível com foco em emagrecimento saudável.",
    beforeImage: "/images/fernanda-before.jpg",
    afterImage: "/images/fernanda-after.jpg"
  },
  {
    id: 3,
    name: "Lucas",
    monthsFollowed: 6,
    programType: "premium",
    description: "Aumento de massa muscular e definição corporal.",
    beforeImage: "/images/lucas-before.jpg",
    afterImage: "/images/lucas-after.jpg"
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
                <div className="flex space-x-4 mb-4">
                  <img 
                    src={transformation.beforeImage} 
                    alt={`${transformation.name} antes`}
                    className="object-cover aspect-[3/4] w-full"
                    style={{ objectPosition: "top center" }}
                  />
                  <img 
                    src={transformation.afterImage} 
                    alt={`${transformation.name} depois`}
                    className="object-cover aspect-[3/4] w-full"
                    style={{ objectPosition: "top center" }}
                  />
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
