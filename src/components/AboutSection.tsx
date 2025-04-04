const AboutSection = () => {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/peito.jpg" 
                alt="Ygor Taramelli - Nutricionista Esportivo" 
                className="w-full h-[480px] object-cover object-top"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-gray-900">
              Ygor Taramelli 
            </h2>
            <h3 className="text-xl text-primary-600 mb-6 font-medium font-montserrat">
              Nutricionista Especialista em Nutrição Esportiva
            </h3>
            <div className="text-gray-700 font-inter space-y-4">
              <p>
                Com mais de 3 anos de experiência, sou especializado em nutrição para hipertrofia e emagrecimento, ajudando centenas de pessoas a alcançarem seus objetivos de forma saudável e sustentável.
              </p>
              <p>
                Minha abordagem combina as mais recentes evidências científicas com um olhar humanizado para as necessidades individuais de cada pessoa. Acredito que nutrição eficaz deve ser personalizada, prática e adaptada ao seu estilo de vida.
              </p>
              <p>
                • Formação: Graduação em Nutrição (Unitoledo), Especialização em Nutrição Esportiva <br />
                • Certificações: ISAK Nível 1, Nutrição Funcional Aplicada ao Esporte<br />
                • Experiência: +200 atendimentos realizados, focados em planejamentos individualizados, desde atletas profissionais ou amadores de fisiculturismo, até pessoas que apenas buscam melhoras no físico e na saúde
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
