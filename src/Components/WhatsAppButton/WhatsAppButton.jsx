import React, { useContext } from "react";
import "./WhatsAppButton.css";
import { LanguageContext } from "../../Context/LanguageContext";

const translations = {
  tr: {
    message: "Merhaba, BoomCast hakkında bilgi almak istiyorum."
  },
  de: {
    message: "Hallo, ich möchte Informationen über BoomCast erhalten."
  },
  en: {
    message: "Hello, I would like to get information about BoomCast."
  }
};

const WhatsAppButton = () => {
  const { language } = useContext(LanguageContext);
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];
  
  const whatsappNumber = "447742281212";
  const whatsappMessage = encodeURIComponent(content.message);

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="whatsapp-icon">💬</i>
    </a>
  );
};

export default WhatsAppButton;
