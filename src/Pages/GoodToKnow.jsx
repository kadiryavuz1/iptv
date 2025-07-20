import React, { useContext } from "react";
import "./CSS/GoodToKnow.css";
import { LanguageContext } from "../Context/LanguageContext";
import { Helmet } from "react-helmet-async";

const translations = {
  en: {
    title: "Important Information",
    subtitle: "Essential details about our Adsense accounts",
    cards: [
      {
        title: "Account Features",
        icon: "✓",
        content:
          "Minimum 7-day aged accounts, fully verified and ready to use. Supports campaigns with sites, blogs, Tumblr, or domains. $2 spending limit removed with $15 initial spend.",
      },
      {
        title: "Verification Status",
        icon: "🔒",
        content:
          "Corporate Advertiser Verified (RDV) accounts. All accounts are pre-approved and ready for advertising campaigns with no restrictions on industry type.",
      },

      {
        title: "Usage Guidelines",
        icon: "📋",
        content:
          "Accounts are delivered fully verified. Campaign management and advertising performance are buyer's responsibility. Suitable for all sectors.",
      },
    ],
    disclaimersTitle: "Important Disclaimers",
    disclaimers: [
      "No refunds if ads aren't published by you or Google",
      "Account delivery includes all verification processes",
      "Campaign management is buyer's responsibility",

      "Suitable for all business sectors - no restrictions",
      "Accounts come with removed spending limitations",
    ],
  },
  tr: {
    title: "Önemli Bilgiler",
    subtitle: "Adsense hesapları hakkında önemli detaylar",
    cards: [
      {
        title: "Hesap Özellikleri",
        icon: "💰",
        content:
          "Minimum 7 Günlük Hesap (Kullanıma hazır ve doğrulanmış). Sites, Blogs, Tumblr veya Domain ile kampanya oluşturma imkânı. 15 TL Harcama Yapılmış," +
          " 8000 TL ve 16000 TL Harca kazan promosyonlu hesaplar.",
      },

      {
        title: "Askı Durumu",
        icon: "📭",
        content:
          "Satin alımınızdan sonrakı 24 saat içinde gerçekleşen " +
          "Şüpheli Ödeme" +
          " ve " +
          "Gelecekteki ödemelerle ilgili endişe " +
          "askıları için anında destek ve askıdan dondürme şansı sunuyoruz.",
      },
      {
        title: "Güvenlilir",
        icon: "🛡️",
        content:
          "Hesap oluşturumunun her aşamasını  organik bır şekilde herhangi bır otomasyon kullanmadan tamamen manuel yapıyoruz.Hesaplar ilk kez kendileri için oluşturulmuş sanal kartlar ve proxylerle oluşturulmaktadır.Bu sayede gelecekte yaşayacağınız güvenlık ve google politika sorunlarının önüne geçmiş oluyoruz.",
      },
      {
        title: "Doğrulama Durumu",
        icon: "🔒",
        content:
          "Kurumsal Reklam Veren Doğrulamalı (RDV). Tüm hesaplar önceden onaylanmış ve reklam kampanyaları için hazırdır, sektör kısıtlaması yoktur.",
      },

      {
        title: "Kullanım Kılavuzu",
        icon: "📋",
        content:
          "Hesaplar tam doğrulanmış olarak teslim edilir. Kampanya yönetimi ve reklam performansı alıcının sorumluluğundadır. Tüm sektörler için uygundur.",
      },
    ],
    disclaimersTitle: "Önemli Uyarılar",
    disclaimers: [
      "Reklamlar sizin veya Google tarafından yayınlanmazsa iade yapılmaz",
      "Hesap teslimi tüm doğrulama süreçlerini içerir",
      "Kampanya yönetimi alıcı sorumluluğundadır",

      "Tüm iş sektörleri için uygundur - kısıtlama yoktur",
      "Hesaplar harcama limitleri kaldırılmış olarak gelir",
    ],
  },
};

const GoodToKnow = () => {
  const { language } = useContext(LanguageContext);
  const content = translations[language];

  return (
    <>
      {" "}
      <Helmet>
        <title>Onaylı,RDV li, Google Ads,Adsense,Reklam Hesapları</title>
        <meta
          name="description"
          content="Onaylı ve RDV’li Google reklam hesapları satın alın. Google Ads Hesabı Satın Al.2$ Harcama Sınırı Kaldırılmış ve 15 TL Harcama Yapılmış.Rdvli hesaplar."
        />
        <meta keywords="Google,Ads,Adwords,Hesap,Alış,Satışı,Google Ads (Adwords) Hesap Alış - Satışı, " />
        <link rel="canonical" href="/goodtoknow" />
      </Helmet>
      <div className="goodtoknow-container">
        <div className="goodtoknow-header">
          <h1>{content.title}</h1>
          <p className="goodtoknow-subtitle">{content.subtitle}</p>
          <div className="header-decoration"></div>
        </div>

        <div className="goodtoknow-content">
          <div className="info-grid">
            {content.cards.map((card, index) => (
              <div className="info-card" key={index}>
                <div className="info-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>

          <div className="additional-info">
            <h2>{content.disclaimersTitle}</h2>
            <ul>
              {content.disclaimers.map((disclaimer, index) => (
                <li key={index}>{disclaimer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodToKnow;
