import { createRoot } from 'react-dom/client'
import { createClient } from '@supabase/supabase-js'
import App from './App.tsx'
import './index.css'

// Configuração do Supabase com suas credenciais
const supabaseUrl = 'https://iderwbvrzwkcoywkyzqa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZXJ3YnZyendrY295d2t5enFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDY1NDEsImV4cCI6MjA1OTI4MjU0MX0.DDr0uDoEW7xP_zpKTh5G62HUJejNNwfnVxd1sBVw1Xc'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Inicializar Google Analytics
const initGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = "G-T93BEVHBL4"

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  gtag("js", new Date())
  gtag("config", GA_MEASUREMENT_ID)

  // @ts-ignore
  window.gtag = gtag
}

initGoogleAnalytics()

createRoot(document.getElementById("root")!).render(<App />)
