import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, Phone, AlertCircle } from "lucide-react";
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

  // ... o resto do componente permanece igual (formulário + apresentação)

  return (
    // tudo igual, sem mudar o HTML ou os campos
    // pode manter o restante do seu layout atual
  );
};

export default ContactSection;
