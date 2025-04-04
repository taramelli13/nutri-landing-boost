
// Google Analytics tracking
export const track = (eventName: string, params = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

export const initGA = (id: string) => {
  if (!window.dataLayer) window.dataLayer = [];
  
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  if (typeof window.gtag === 'undefined') {
    window.gtag = gtag;
  }
  
  window.gtag('js', new Date());
  window.gtag('config', id);
};
