
import { supabase } from "@/integrations/supabase/client";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  goal: string;
};

export const submitContactForm = async (formState: FormState): Promise<void> => {
  // Save to Supabase
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

  // Also send to Google Sheets as backup
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
};
