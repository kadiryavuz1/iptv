import React, { useContext } from "react";
import "./productDisplay.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import logo from "../Assets/logo.png";

const translations = {
  tr: {
    title: "BoomCast Premium IPTV",
    description: "Yüksek kaliteli IPTV hizmeti, 10.000+ kanal, film ve dizi arşivi",
    price: "Başlayan Fiyatlarla:",
    stock: "Durum:",
    available: "Aktif",
    contact: "İletişime Geç",
    info: "Bilgilendirme"
  },
  de: {
    title: "BoomCast Premium IPTV",
    description: "Hochwertiger IPTV-Service, 10.000+ Kanäle, Film- und Serienarchiv",
    price: "Preise ab:",
    stock: "Status:",
    available: "Aktiv",
    contact: "Kontakt",
    info: "Information"
  }
};

const ProductDisplay = () => {
  const { language } = useContext(LanguageContext);
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img src={logo} alt="BoomCast" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{content.title}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">
            <p>
              {content.price} 25€
            </p>
          </div>
        </div>
        <div className="productdisplay-right-stock">
          <p>
            {content.stock}{" "}
            <span className="in-stock">
              {content.available}
            </span>
          </p>
        </div>
        <div className="productdisplay-right-description">
          <p>{content.description}</p>
        </div>
        <div className="productdisplay-right-buttons">
          <a
            href="https://api.whatsapp.com/send?phone=447472823411"
            target="_blank"
            rel="noopener noreferrer"
            className="add-to-cart-btn"
          >
            {content.contact}
          </a>
          <Link to="/listings" className="add-to-cart-btn">
            {content.info}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
