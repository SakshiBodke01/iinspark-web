export const GA_MEASUREMENT_ID = "G-J42WKDZESE";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

interface GAEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

