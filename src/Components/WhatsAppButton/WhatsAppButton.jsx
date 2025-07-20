import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "447742281212";
  const whatsappMessage = encodeURIComponent("Merhaba, BoomCast hakkında bilgi almak istiyorum.");

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
