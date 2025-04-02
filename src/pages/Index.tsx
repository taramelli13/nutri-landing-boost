import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="font-inter bg-background text-foreground">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
