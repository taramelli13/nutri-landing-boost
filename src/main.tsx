
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from './analytics'

// Initialize Google Analytics with the measurement ID (if you have one)
// You can replace 'G-XXXXXXXXXX' with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize analytics
function initAnalytics() {
  // Initialize Google Analytics
  if (!window.dataLayer) window.dataLayer = [];
  
  initGA(GA_MEASUREMENT_ID);
}

// Initialize analytics if needed
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
