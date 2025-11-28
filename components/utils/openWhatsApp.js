export const openWhatsApp = (context) => {
  if (typeof window === "undefined") return;

  const phone = "919599516159"; // WhatsApp number for Shivalix Forex

  const baseMessage =
    "Hi Shivalix Forex, I would like to know more about your forex services.";

  const message = context
    ? `Hi Shivalix Forex, I'm interested in ${context} from your website.`
    : baseMessage;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


