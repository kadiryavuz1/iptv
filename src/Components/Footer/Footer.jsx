import React, { useContext } from "react";
import "./Footer.css";
import { LanguageContext } from "../../Context/LanguageContext";

const translations = {
  tr: {
    support: {
      title: "Destek",
      contact: "İletişime Geç",
    },
    copyright: "© 2024 BoomCast. Tüm hakları saklıdır."
  },
  de: {
    support: {
      title: "Support",
      contact: "Kontakt",
    },
    copyright: "© 2024 BoomCast. Alle Rechte vorbehalten."
  }
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  // Güvenlik kontrolü - varsayılan olarak Türkçe
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="footer-content">
          <h3>{content.support.title}</h3>
          <a 
            href="https://wa.me/447742281212" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            {content.support.contact}
          </a>
        </div>
        <div className="footer-bottom">
          <p>{content.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
