
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, Phone, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    goal: "emagrecimento"
  });
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
      // Primeiro, salvar no Supabase
      const { error: supabaseError } = await supabase
        .from('Leads')
        .insert({
          name: formState.name,
          email: formState.email,
          telefone: formState.phone,
          objetivo: formState.goal,
          mensagem: formState.message,
          criado_em: new Date().toISOString()
        });

      if (supabaseError) {
        console.error("Erro ao salvar no Supabase:", supabaseError);
        throw new Error(supabaseError.message);
      }

      // Também enviar para o Google Sheets como backup
      await fetch("https://script.google.com/macros/s/AKfycbyH5xu8twKUwqG55x_9jBRdL7vrwTDTdJWtt9vyXh2TCVlMX4VtLNr137jSRjODWZT1YA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formState.name,
          email: formState.email,
          telefone: formState.phone,
          objetivo: formState.goal,
          mensagem: formState.message,
        }),
      });
  
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });

      // Limpar o formulário
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        goal: "emagrecimento"
      });
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
            {!submitted ? (
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
            ) : (
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
            )}
          </div>

          <div className="md:w-1/2" id="contato">
            <div className="bg-primary-600 text-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 font-montserrat">Telefone</p>
                    <p className="font-inter">+55 (18) 99145-2285</p>
                    <p className="font-inter text-primary-100">Atendimento: Seg-Sex, 8h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1 font-montserrat">E-mail</p>
                    <p className="font-inter">nutriygortaramelli@gmail.com</p>
                    <p className="font-inter text-primary-100">Respondemos em até 24h</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-primary-500 mt-8">
                  <h4 className="font-semibold mb-4 font-montserrat flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Vagas limitadas
                  </h4>
                  <p className="font-inter">
                    Para garantir um atendimento de qualidade, disponibilizamos apenas 10 vagas por mês para novos pacientes.
                  </p>
                  <div className="mt-4 p-3 bg-primary-700 rounded-lg">
                    <p className="font-inter text-primary-100 text-sm">Vagas disponíveis para este mês:</p>
                    <p className="font-montserrat text-xl font-bold">5 vagas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
