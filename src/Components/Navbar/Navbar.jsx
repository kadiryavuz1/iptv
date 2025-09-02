import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

const translations = {
  tr: {
    home: "Ana Sayfa",
    packages: "Paketler"
  },
  de: {
    home: "Startseite",
    packages: "Pakete"
  },
  en: {
    home: "Home",
    packages: "Packages"
  }
};

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // Güvenlik kontrolü - varsayılan olarak Türkçe
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="BoomCast" />
          <span className="brand-name">BoomCast</span>
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/">{content.home}</Link>
        <Link to="/listings">{content.packages}</Link>
      </div>

      <div className="nav-actions">
        <div className="language-buttons">
          <button 
            className={`language-btn ${currentLanguage === 'tr' ? 'active' : ''}`}
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
          <button 
            className={`language-btn ${currentLanguage === 'de' ? 'active' : ''}`}
            onClick={() => setLanguage('de')}
          >
            DE
          </button>
          <button 
            className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
