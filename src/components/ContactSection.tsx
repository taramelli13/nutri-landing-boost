import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Supabase config
const supabaseUrl = "https://iderwbvrzkwkocywkyzqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZXJ3YnZyendrY295d2t5enFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDY1NDEsImV4cCI6MjA1OTI4MjU0MX0.DDr0uDoEW7xP_zpKTh5G62HUJejNNwfnVxd1sBVw1Xc";
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    goal: "emagrecimento",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("leads").insert([
      {
        nome: formState.name,
        email: formState.email,
        telefone: formState.phone,
        objetivo: formState.goal,
        mensagem: formState.message,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      console.error("Erro Supabase:", error.message);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } else {
      setSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
    }
  };

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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Nome completo</label>
              <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">E-mail</label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium text-gray-700">Telefone</label>
                <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <label htmlFor="goal" className="block font-medium text-gray-700">Objetivo principal</label>
              <select id="goal" name="goal" value={formState.goal} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300">
                <option value="emagrecimento">Emagrecimento</option>
                <option value="hipertrofia">Hipertrofia</option>
                <option value="performance">Performance</option>
                <option value="saude">Saúde geral</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Mensagem (opcional)</label>
              <Textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={4} />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Enviando..." : "Quero ser contactado"}
            </Button>
          </form>
        ) : (
          <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mensagem enviada com sucesso!</h3>
            <p className="text-gray-700 mb-6">Obrigado pelo seu interesse! Entraremos em contato em breve para agendar sua consulta.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Enviar outra mensagem
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
