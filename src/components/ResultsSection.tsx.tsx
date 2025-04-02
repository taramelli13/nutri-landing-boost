import TransformationCard from "./TransformationCard";

const ResultsSection = () => {
  const transformations = [
    {
      name: "Carlos",
      monthsFollowed: 5,
      description: "Perda de mais de 30kg em 5 meses...",
      beforeImage: "/caminho/para/imagem-antes.png",
      afterImage: "/caminho/para/imagem-depois.png",
      programType: "premium" as const,
    },
    // ... mais transformações
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Transformações reais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t, index) => (
            <TransformationCard key={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
