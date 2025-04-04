
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/utils/contactFormSubmission";

export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  goal: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  goal: "emagrecimento"
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      await submitContactForm(formState);
      
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });

      // Clear the form
      setFormState(initialFormState);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setIsSubmitting(false);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <Check className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3 font-montserrat text-gray-900">Mensagem enviada com sucesso!</h3>
        <p className="text-gray-700 font-inter mb-6">
          Obrigado pelo seu interesse! Entraremos em contato em breve para agendar sua consulta.
        </p>
        <Button 
          onClick={() => setSubmitted(false)}
          variant="outline" 
          className="border-primary text-primary hover:bg-primary-50"
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6 font-montserrat text-gray-900">Preencha os dados</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2 font-inter">Nome completo</label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="border-gray-300 bg-[#1e352c] text-white placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2 font-inter">E-mail</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="border-gray-300 bg-[#1e352c] text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 font-inter">Telefone</label>
          <Input
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            className="border-gray-300 bg-[#1e352c] text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="goal" className="block text-gray-700 font-medium mb-2 font-inter">Objetivo principal</label>
        <select 
          id="goal" 
          name="goal" 
          value={formState.goal}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-[#1e352c] text-white border border-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        >
          <option value="emagrecimento">Emagrecimento</option>
          <option value="hipertrofia">Hipertrofia</option>
          <option value="performance">Performance</option>
          <option value="saude">Saúde geral</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2 font-inter">Mensagem (opcional)</label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className="border-gray-300 bg-[#1e352c] text-white placeholder:text-gray-400"
          placeholder="Conte um pouco sobre seus objetivos e expectativas..."
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Quero ser contactado"}
      </Button>
    </form>
  );
};

export default ContactForm;
