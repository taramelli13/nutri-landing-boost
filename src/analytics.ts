export const initGoogleAnalytics = () => {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-T93BEVHBL4`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-T93BEVHBL4");
  }
};
