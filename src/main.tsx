export const initGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = "G-T93BEVHBL4";

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
  
  // @ts-ignore
  window.gtag = gtag;
};
