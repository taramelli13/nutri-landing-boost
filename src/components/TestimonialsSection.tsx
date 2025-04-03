import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TransformationCard from "./ui/TransformationCard";

const transformations = [
  {
    name: "Carlos",
    monthsFollowed: 5,
    description: "Perda de mais de 10kg com plano nutricional e treino personalizado.",
    image: "/images/ev-rafael.jpg",
  },
  {
    name: "Felipe",
    monthsFollowed: 4,
    description: "Pouca diferença na balança, mas no corpo!",
    image: "/images/ev-felipe.jpg",
  },
  {
    name: "Elis",
    monthsFollowed: 6,
    description: "Aumento de massa muscular e definição corporal.",
    image: "/images/ev-elis.jpg",
  },
  {
    name: "Henrick",
    monthsFollowed: 6,
    description: "Ganho de massa e definição com plano personalizado.",
    image: "/images/ev-henrick.jpg",
  },
  {
    name: "Mayra",
    monthsFollowed: 6,
    description: "Emagrecimento saudável adaptado à rotina.",
    image: "/images/ev-mayra.jpg",
  },
  {
    name: "Maria",
    monthsFollowed: 3,
    description: "Redução de medidas e melhora na composição corporal.",
    image: "/images/ev-maria.jpg",
  },
  {
    name: "Rodrigo",
    monthsFollowed: 4,
    description: "Definição muscular com treino e dieta consistentes.",
    image: "/images/ev-rodrigo.jpg",
  },
  {
    name: "Lucas",
    monthsFollowed: 5,
    description: "Transformação completa com acompanhamento intensivo.",
    image: "/images/ev-lucas.jpg",
  },
  {
    name: "Murata",
    monthsFollowed: 3,
    description: "Resultados rápidos com plano estratégico e disciplina.",
    image: "/images/ev-murata.jpg",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => containerRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => containerRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <section id="depoimentos" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Resultados reais</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Veja algumas transformações dos pacientes após acompanhamento nutricional e treino.
          </p>
        </div>

        <div className="relative">
          <Button 
            onClick={scrollLeft}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 text-white hover:bg-green-700 shadow hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-4 scroll-smooth"
          >
            {transformations.map((transformation) => (
              <div
                key={transformation.name}
                className="flex-shrink-0 snap-start w-[300px]"
              >
                <TransformationCard {...transformation} />
              </div>
            ))}
          </div>

          <Button 
            onClick={scrollRight}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 text-white hover:bg-green-700 shadow hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
