import React, { useContext } from "react";
import "./listings.css";
import data_products from "../Assets/data_products.js";
import Item from "../Item/Item.jsx";
import { LanguageContext } from "../../Context/LanguageContext";

const translations = {
  tr: {
    premiumTitle: "Premium Paketler",
    normalTitle: "Normal Paketler"
  },
  de: {
    premiumTitle: "Premium Pakete",
    normalTitle: "Standard Pakete"
  }
};

const Listings = () => {
  const { language } = useContext(LanguageContext);
  const currentLanguage = translations[language] ? language : "tr";
  const content = translations[currentLanguage];

  const premiumPackages = data_products.filter(product => product.type === "premium");
  const normalPackages = data_products.filter(product => product.type === "normal");

  return (
    <div className="listings-container">
      <div className="listings-section">
        <h2 className="section-title">{content.premiumTitle}</h2>
        <div className="listings-grid">
          {premiumPackages.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              features={product.features}
              duration={product.duration}
              price={product.price}
              type={product.type}
              language={currentLanguage}
            />
          ))}
        </div>
      </div>

      <div className="listings-section">
        <h2 className="section-title normal-title">{content.normalTitle}</h2>
        <div className="listings-grid">
          {normalPackages.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              features={product.features}
              duration={product.duration}
              price={product.price}
              type={product.type}
              language={currentLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
