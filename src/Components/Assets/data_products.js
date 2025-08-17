import iptv_logo from "./adsenselogo.png";

const data_products = [
  {
    id: 1,
    name: {
      tr: "Premium 3 Ay",
      de: "Premium 3 Monate"
    },
    description: {
      tr: "HD/4K Yayınlar, 7/24 Destek",
      de: "HD/4K Streams, 24/7 Support"
    },
    features: {
      tr: [
        "HD/4K Kalite",
        "7/24 Destek",
        "Tüm Cihazlarla Uyumlu"
      ],
      de: [
        "HD/4K Qualität",
        "24/7 Support",
        "Mit allen Geräten kompatibel"
      ]
    },
    img: iptv_logo,
    duration: "3 Months",
    price: 40,
    type: "premium"
  },
  {
    id: 2,
    name: {
      tr: "Premium 6 Ay",
      de: "Premium 6 Monate"
    },
    description: {
      tr: "Binlerce Kanal, Akıllı TV Desteği",
      de: "Tausende Kanäle, Smart TV Unterstützung"
    },
    features: {
      tr: [
        "Binlerce Kanal",
        "Akıllı TV Desteği",
        "Premium Kalite"
      ],
      de: [
        "Tausende Kanäle",
        "Smart TV Unterstützung",
        "Premium Qualität"
      ]
    },
    img: iptv_logo,
    duration: "6 Months",
    price: 50,
    type: "premium"
  },
  {
    id: 3,
    name: {
      tr: "Premium 12 Ay",
      de: "Premium 12 Monate"
    },
    description: {
      tr: "Full HD IPTV, Film + Dizi Arşivi",
      de: "Full HD IPTV, Film + Serien Archiv"
    },
    features: {
      tr: [
        "Full HD IPTV",
        "Film + Dizi Arşivi",
        "Premium Destek"
      ],
      de: [
        "Full HD IPTV",
        "Film + Serien Archiv",
        "Premium Support"
      ]
    },
    img: iptv_logo,
    duration: "12 Months",
    price: 70,
    type: "premium"
  },
  {
    id: 4,
    name: {
      tr: "Premium 15 Ay",
      de: "Premium 15 Monate"
    },
    description: {
      tr: "Yüksek Kalite, VIP Destek",
      de: "Hohe Qualität, VIP Support"
    },
    features: {
      tr: [
        "Yüksek Kalite",
        "VIP Destek",
        "Uzun Süreli Hizmet"
      ],
      de: [
        "Hohe Qualität",
        "VIP Support",
        "Langfristiger Service"
      ]
    },
    img: iptv_logo,
    duration: "15 Months",
    price: 90,
    type: "premium"
  },
  {
    id: 5,
    name: {
      tr: "Premium 24 Ay",
      de: "Premium 24 Monate"
    },
    description: {
      tr: "2 Yıl Hizmet, Kesintisiz Yayın",
      de: "2 Jahre Service, Unterbrechungsfreies Streaming"
    },
    features: {
      tr: [
        "2 Yıl Hizmet",
        "Kesintisiz Yayın",
        "Tam Destek"
      ],
      de: [
        "2 Jahre Service",
        "Unterbrechungsfreies Streaming",
        "Voller Support"
      ]
    },
    img: iptv_logo,
    duration: "24 Months",
    price: 120,
    type: "premium"
  },
  {
    id: 6,
    name: {
      tr: "Normal 3 Ay",
      de: "Standard 3 Monate"
    },
    description: {
      tr: "HD Kanallar, Limitli Destek",
      de: "HD Kanäle, Limitierter Support"
    },
    features: {
      tr: [
        "HD Kanallar",
        "Limitli Destek",
        "Temel Hizmet"
      ],
      de: [
        "HD Kanäle",
        "Limitierter Support",
        "Basis-Service"
      ]
    },
    img: iptv_logo,
    duration: "3 Months",
    price: 25,
    type: "normal"
  },
  {
    id: 7,
    name: {
      tr: "Normal 6 Ay",
      de: "Standard 6 Monate"
    },
    description: {
      tr: "Orta Seviye Paket, Çoklu Cihaz Desteği",
      de: "Mittleres Paket, Multi-Geräte Unterstützung"
    },
    features: {
      tr: [
        "Orta Seviye Paket",
        "Çoklu Cihaz Desteği",
        "Standart Kalite"
      ],
      de: [
        "Mittleres Paket",
        "Multi-Geräte Support",
        "Standard Qualität"
      ]
    },
    img: iptv_logo,
    duration: "6 Months",
    price: 30,
    type: "normal"
  },
  {
    id: 8,
    name: {
      tr: "Normal 12 Ay",
      de: "Standard 12 Monate"
    },
    description: {
      tr: "Full HD Kanallar, Film Arşivi",
      de: "Full HD Kanäle, Film Archiv"
    },
    features: {
      tr: [
        "Full HD Kanallar",
        "Film Arşivi",
        "Standart Destek"
      ],
      de: [
        "Full HD Kanäle",
        "Film Archiv",
        "Standard Support"
      ]
    },
    img: iptv_logo,
    duration: "12 Months",
    price: 40,
    type: "normal"
  },
  {
    id: 9,
    name: {
      tr: "Normal 15 Ay",
      de: "Standard 15 Monate"
    },
    description: {
      tr: "Yüksek Kalite, Standart Destek",
      de: "Hohe Qualität, Standard Support"
    },
    features: {
      tr: [
        "Yüksek Kalite",
        "Standart Destek",
        "Uzun Süreli Hizmet"
      ],
      de: [
        "Hohe Qualität",
        "Standard Support",
        "Langfristiger Service"
      ]
    },
    img: iptv_logo,
    duration: "15 Months",
    price: 50,
    type: "normal"
  },
  {
    id: 10,
    name: {
      tr: "Normal 24 Ay",
      de: "Standard 24 Monate"
    },
    description: {
      tr: "Uzun Süreli Hizmet, Kesintisiz İzleme",
      de: "Langfristiger Service, Unterbrechungsfreies Streaming"
    },
    features: {
      tr: [
        "Uzun Süreli Hizmet",
        "Kesintisiz İzleme",
        "Temel Destek"
      ],
      de: [
        "Langfristiger Service",
        "Unterbrechungsfreies Streaming",
        "Basis-Support"
      ]
    },
    img: iptv_logo,
    duration: "24 Months",
    price: 60,
    type: "normal"
  }
];

export default data_products;
