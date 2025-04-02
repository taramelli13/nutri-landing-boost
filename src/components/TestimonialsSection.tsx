import TransformationCard from "./ui/TransformationCard";

const TestimonialsSection = () => {
  const transformations = [
    {
      name: "Carlos",
      monthsFollowed: 5,
      description: "Perda de mais de 10kg com plano nutricional e treino personalizado.",
      beforeImage: "/images/antes-rafael.jpg",
      afterImage: "/images/depois-rafael.jpg",
      programType: "premium" as const
    },
    {
      name: "Felipe",
      monthsFollowed: 4,
      description: "Pouca diferença na balança, mas no corpo!",
      beforeImage: "/images/antes-felipe.jpeg",
      afterImage: "/images/depois-felipe.jpg",
      programType: "premium" as const
    },
    {
      name: "Elis",
      monthsFollowed: 6,
      description: "Aumento de massa muscular e definição corporal.",
      beforeImage: "/images/antes-elis.jpg",
      afterImage: "/images/depois-elis.jpg",
      programType: "premium" as const
    },
    {
      name: "Henrick",
      monthsFollowed: 6,
      description: "Aumento de massa muscular e definição corporal.",
      beforeImage: "/images/antes-henrick.jpg",
      afterImage: "/images/depois-henrick.jpg",
      programType: "premium" as const
    },
    {
      name: "Mayra",
      monthsFollowed: 6,
      description: "Emagrecimento saudável adaptado à rotina.",
      beforeImage: "/images/antes-mayra.jpg",
      afterImage: "/images/depois-mayra.jpg",
      programType: "premium" as const
    },
    {
      name: "Maria",
      monthsFollowed: 6,
      description: "-10kgs em 3 meses!",
      beforeImage: "/images/antes-maria.jpg",
      afterImage: "/images/depois-maria.jpg",
      programType: "premium" as const
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-center text-gray-900">
          Resultados reais dos meus pacientes
        </h2>
        <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto text-center mb-12">
          Confira algumas das transformações conquistadas com acompanhamento nutricional e plano de treino personalizados.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t, idx) => (
            <TransformationCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
