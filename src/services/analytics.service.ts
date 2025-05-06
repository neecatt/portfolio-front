// Google Analytics Configuration
export const initializeAnalytics = () => {
  // Initialize dataLayer array
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-J6ER13STHV';
  document.head.appendChild(script);

  // Initialize gtag
  gtag('js', new Date());
  gtag('config', 'G-J6ER13STHV');

  // Add gtag to window object
  (window as any).gtag = gtag;
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}