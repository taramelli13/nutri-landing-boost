
import { useRef } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rodrigo Campos",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Em 4 meses, perdi 12kg de gordura e ganhei 3kg de massa muscular. O mais incrível é que nunca me senti com fome ou privado de comer o que gosto. O Carlos criou um plano que se encaixou perfeitamente na minha rotina agitada.",
    achievement: "Perda de 12kg em 4 meses"
  },
  {
    id: 2,
    name: "Amanda Oliveira",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Depois de várias tentativas frustradas com outras dietas, o protocolo personalizado do Dr. Carlos foi o que realmente funcionou para mim. Emagreci 8kg em 3 meses e me sinto com muito mais energia para os treinos de musculação.",
    achievement: "Aumento de 15% na massa muscular"
  },
  {
    id: 3,
    name: "Felipe Martins",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "Como atleta amador, sempre tive dificuldade em alinhar alimentação e treino. O Carlos não só melhorou minha composição corporal, como também minha performance nos treinos aumentou significativamente. Recomendo demais!",
    achievement: "Melhora na performance esportiva"
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
            Histórias de transformação
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Veja os resultados reais alcançados pelos meus pacientes
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
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[300px] md:min-w-[350px] bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col snap-start"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 font-montserrat">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-inter">{testimonial.achievement}</p>
                  </div>
                </div>
                <div className="mb-4 flex-grow">
                  <MessageSquare className="h-5 w-5 text-gray-400 mb-2" />
                  <p className="text-gray-700 italic font-inter">"{testimonial.text}"</p>
                </div>
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

        <div className="mt-8 md:mt-16 bg-primary-50 p-8 rounded-lg border border-primary-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 font-montserrat text-gray-900">Resultados comprovados</h3>
            <p className="text-gray-700 font-inter mb-6">Mais de 200 pacientes alcançaram suas metas com o atendimento individualizado</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 font-montserrat">93%</p>
                <p className="text-sm text-gray-700 font-inter">Aumento de performance</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 font-montserrat">+8kg</p>
                <p className="text-sm text-gray-700 font-inter">Média de ganho muscular</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 font-montserrat">-12kg</p>
                <p className="text-sm text-gray-700 font-inter">Média de perda de gordura</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 font-montserrat">+99%</p>
                <p className="text-sm text-gray-700 font-inter">Melhora da saúde e disposição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
