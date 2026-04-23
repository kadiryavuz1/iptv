import React from "react";
import "./Item.css";

const translations = {
  tr: {
    contactButton: {
      premium: "Hemen Test Talep Edin ",
      normal: "Hemen Test Talep Edin"
    },
    popular: "Popüler"
  },
  de: {
    contactButton: {
      premium: "Jetzt Test Anfordern",
      normal: "Jetzt Test Anfordern"
    },
    popular: "Beliebt"
  },
  en: {
    contactButton: {
      premium: "Request Test Now",
      normal: "Request Test Now"
    },
    popular: "Popular"
  }
};

const Item = ({ name, features, duration, price, type, language }) => {
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  const getWhatsAppMessage = () => {
    if (currentLanguage === 'tr') {
      return encodeURIComponent(`Merhaba, ${name[currentLanguage]} paketi hakkında bilgi almak istiyorum.`);
    } else if (currentLanguage === 'de') {
      return encodeURIComponent(`Hallo, ich möchte Informationen über das ${name[currentLanguage]} Paket erhalten.`);
    } else {
      return encodeURIComponent(`Hello, I would like to get information about the ${name[currentLanguage]} package.`);
    }
  };

  const whatsappMessage = getWhatsAppMessage();
  const whatsappNumber = "447742281212";

  return (
    <div 
      className={`package-card ${type}`} 
      data-popular={duration === "12 Months"}
    >
      <h3>{name[currentLanguage]}</h3>
      <p className="price">{price}</p>
      <ul className="features-list">
        {(Array.isArray(features[currentLanguage]) ? features[currentLanguage] : [features[currentLanguage]]).map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="feature-icon">✓</span>
            <span className="feature-text">{feature}</span>
          </li>
        ))}
      </ul>
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
