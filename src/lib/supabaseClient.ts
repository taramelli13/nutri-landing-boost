import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iderwbvrzwkcoywkyzqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZXJ3YnZyendrY295d2t5enFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDY1NDEsImV4cCI6MjA1OTI4MjU0MX0.DDr0uDoEW7xP_zpKTh5G62HUJejNNwfnVxd1sBVw1Xc";

export const supabase = createClient(supabaseUrl, supabaseKey);
