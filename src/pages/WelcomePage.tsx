import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, UtensilsCrossed, Rocket } from "lucide-react";

const WelcomePage = () => {
  // Add noindex meta tag
  useEffect(() => {
    // Create meta tag for robots
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    // Create meta tag for googlebot
    const metaGooglebot = document.createElement("meta");
    metaGooglebot.name = "googlebot";
    metaGooglebot.content = "noindex, nofollow";
    document.head.appendChild(metaGooglebot);

    // Update page title
    const originalTitle = document.title;
    document.title = "Boas-vindas - Ygor Taramelli Nutrição";

    // Cleanup
    return () => {
      document.head.removeChild(metaRobots);
      document.head.removeChild(metaGooglebot);
      document.title = originalTitle;
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Assisti aos tutoriais e estou pronto para começar!");
    const whatsappUrl = `https://wa.me/5518991452285?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="font-inter bg-background text-foreground min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Welcome Section */}
          <section className="mb-16 text-center">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-white">
                Bem-vindo(a) ao seu acompanhamento nutricional!
              </h1>
              <div className="text-lg md:text-xl text-white/90 space-y-4 max-w-2xl mx-auto">
                <p>
                  Estou muito feliz por você ter dado esse passo importante rumo à transformação do seu corpo e da sua saúde. A partir de agora, você terá acesso a protocolos personalizados e todo o suporte necessário para alcançar seus objetivos.
                </p>
                <p>
                  Para começarmos com o pé direito, preparei esses tutoriais essenciais para você dominar as ferramentas que vamos utilizar durante o acompanhamento. Assista com atenção e, qualquer dúvida, estou à disposição!
                </p>
              </div>
            </div>
          </section>

          {/* Tutorial 1 - App de Treino */}
          <section className="mb-12">
            <Card className="bg-white shadow-lg border-2 border-primary-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-white">
                <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary-900 font-montserrat">
                  <Smartphone className="w-8 h-8 text-primary-600" />
                  Como usar o aplicativo de treino
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* YouTube Shorts Player - Vertical aspect ratio */}
                <div className="relative w-full max-w-sm mx-auto mb-6" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/eu6X-N2cCUk"
                    title="Como usar o aplicativo de treino"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-center text-gray-700 text-lg">
                  Aprenda a navegar pelo app de treinos e acompanhar sua evolução física.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Tutorial 2 - App da Dieta */}
          <section className="mb-12">
            <Card className="bg-white shadow-lg border-2 border-primary-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-white">
                <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary-900 font-montserrat">
                  <UtensilsCrossed className="w-8 h-8 text-primary-600" />
                  Como usar o aplicativo da dieta
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* YouTube Standard Player - Horizontal aspect ratio */}
                <div className="relative w-full mb-6" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/AGkDigC-vBA"
                    title="Como usar o aplicativo da dieta"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-center text-gray-700 text-lg">
                  Descubra como acessar seu plano alimentar e registrar suas refeições.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps Section */}
          <section>
            <Card className="bg-gradient-to-br from-accent-50 to-white shadow-xl border-2 border-accent-200">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent-100 rounded-full p-4">
                    <Rocket className="w-12 h-12 text-accent-600" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat text-gray-900">
                  Pronto para começar?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                  Agora que você já sabe usar as ferramentas, vamos juntos nessa jornada de transformação!
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-6 bg-accent hover:bg-accent-600 text-white shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  Falar com Ygor no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WelcomePage;
