import React from "react";
import "./Item.css";

const translations = {
  tr: {
    contactButton: {
      premium: "Hemen İletişime Geç",
      normal: "İletişime Geç"
    },
    popular: "Popüler"
  },
  de: {
    contactButton: {
      premium: "Jetzt Kontaktieren",
      normal: "Kontaktieren"
    },
    popular: "Beliebt"
  }
};

const Item = ({ name, description, duration, price, type, language }) => {
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  const whatsappMessage = currentLanguage === 'tr' 
    ? encodeURIComponent(`Merhaba, ${name[currentLanguage]} paketi hakkında bilgi almak istiyorum.`)
    : encodeURIComponent(`Hallo, ich möchte Informationen über das ${name[currentLanguage]} Paket erhalten.`);
  const whatsappNumber = "447742281212";

  return (
    <div 
      className={`package-card ${type}`} 
      data-popular={duration === "12 Months"}
    >
      <h3>{name[currentLanguage]}</h3>
      <p className="price">{price}</p>
      <p className="desc">{description[currentLanguage]}</p>
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-contact ${type}`}
      >
        {content.contactButton[type]}
      </a>
    </div>
  );
};

export default Item;
