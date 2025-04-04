
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const ContactSection = () => {
  return (
    <section id="agendar" className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
            Quer saber como posso te ajudar?
          </h2>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Deixe suas informações e eu entro em contato com você!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <ContactForm />
          </div>

          <div className="md:w-1/2" id="contato">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
