
const AboutSection = () => {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                alt="Dr. Carlos Silva - Nutricionista Esportivo" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-gray-900">
              Dr. Carlos Silva
            </h2>
            <h3 className="text-xl text-primary-600 mb-6 font-medium font-montserrat">
              Nutricionista Especialista em Nutrição Esportiva
            </h3>
            <div className="text-gray-700 font-inter space-y-4">
              <p>
                Com mais de 8 anos de experiência, sou especializado em nutrição para hipertrofia e emagrecimento, ajudando centenas de pessoas a alcançarem seus objetivos de forma saudável e sustentável.
              </p>
              <p>
                Minha abordagem combina as mais recentes evidências científicas com um olhar humanizado para as necessidades individuais de cada pessoa. Acredito que nutrição eficaz deve ser personalizada, prática e adaptada ao seu estilo de vida.
              </p>
              <p>
                • Formação: Graduação em Nutrição (USP), Especialização em Nutrição Esportiva (UNIFESP)<br />
                • Certificações: ISAK Nível 2, Nutrição Funcional Aplicada ao Esporte<br />
                • Experiência: +500 atendimentos, trabalho com atletas amadores e profissionais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
