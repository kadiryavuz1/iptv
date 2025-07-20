import React, { useContext } from "react";
import "./Hero.css";
import logo from "../Assets/logo.png";
import { LanguageContext } from "../../Context/LanguageContext";

const translations = {
  tr: {
    title: "BoomCast",
    subtitle: "Premium Eğlence Parmaklarınızın Ucunda",
    description: "10.000+ canlı kanal, özel spor etkinlikleri, en yeni film ve dizilerle üstün yayın deneyimi. Kristal netliğinde 4K kalite, donma yok, tüm cihazlarınızda kesintisiz yayın. Eğlence sizin kontrolünüzde!",
    buttonText: "TEST AL",
    whatsappMessage: "Merhaba, BoomCast için test almak istiyorum.",
    whatsappNumber: "447742281212"
  },
  de: {
    title: "BoomCast",
    subtitle: "Premium-Unterhaltung auf Knopfdruck",
    description: "Erleben Sie ultimatives Streaming mit über 10.000 Live-Kanälen, exklusiven Sportevents, neuesten Filmen und Serien. Kristallklare 4K-Qualität, keine Pufferung und nahtloses Streaming auf allen Ihren Geräten. Ihre Unterhaltung, Ihre Kontrolle!",
    buttonText: "TEST ANFORDERN",
    whatsappMessage: "Hallo, ich möchte gerne einen Test für BoomCast anfordern.",
    whatsappNumber: "447742281212"
  }
};

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const content = translations[language];

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-content">
          <h1>{content.title}</h1>
          <h2 className="subtitle">{content.subtitle}</h2>
          <p className="description">{content.description}</p>
          <a 
            href={`https://api.whatsapp.com/send?phone=${content.whatsappNumber}&text=${encodeURIComponent(content.whatsappMessage)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-test"
          >
            {content.buttonText}
          </a>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="logo-container">
          <img src={logo} alt="BoomCast Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
