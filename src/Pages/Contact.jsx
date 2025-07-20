import React, { useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/Contact.css";
import { LanguageContext } from "../Context/LanguageContext";
import { Helmet } from "react-helmet-async";

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our support team",

    responseTime: {
      title: "Response Time",
      content: "Within 24 hours",
    },
    whatsapp: {
      title: "Whatsapp",
      content: "Available 9AM-5PM EST",
    },
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
    },
  },
  tr: {
    title: "İletişim",
    subtitle: "Destek ekibimizle iletişime geçin",

    responseTime: {
      title: "Yanıt Süresi",
      content: "24 saat içinde",
    },
    whatsapp: {
      title: "Whatsapp",
      content: "09:00-17:00 EST arası",
    },
    form: {
      name: "İsim",
      email: "E-posta",
      subject: "Konu",
      message: "Mesaj",
      submit: "Mesaj Gönder",
    },
  },
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const content = translations[language];

  useEffect(() => {
    // Remove the init since we'll use the key directly
    console.log("ENV Variables:", {
      service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      key: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const form = e.target;
      const result = await emailjs.sendForm(
        "service_qgv3664", // Try hardcoding temporarily to test
        "template_phxbwx5", // Try hardcoding temporarily to test
        form,
        "xTtf-NB8tKUtTFFbs" // Try hardcoding temporarily to test
      );

      console.log("Email result:", result);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      alert(
        language === "en"
          ? "Message sent successfully!"
          : "Mesaj başarıyla gönderildi!"
      );
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error:
          language === "en"
            ? "Failed to send message. Please try again."
            : "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
      });
      alert(status.error);
    }
  };
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send/?phone=447472823411&text&type=phone_number&app_absent=0
    )}`;
    window.open(url, "_blank");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formKey =
      name === "from_name" ? "name" : name === "to_name" ? "email" : name;

    setFormData({
      ...formData,
      [formKey]: value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Onaylı,RDV li, Google Ads,Adsense,Reklam Hesapları</title>
        <meta
          name="description"
          content="Onaylı ve RDV’li Google reklam hesapları satın alın. Whatsapp veya Mail Yoluyla İletişime Geçin!"
        />
        <meta keywords="Google,Ads,Adwords,Hesap,Alış,Satışı,Google Ads (Adwords) Hesap Alış - Satışı, " />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="contact-container">
        <div className="contact-header">
          <h1>{content.title}</h1>
          <p className="contact-subtitle">{content.subtitle}</p>
          <div className="header-decoration"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>{content.responseTime.title}</h3>
              <p>{content.responseTime.content}</p>
            </div>
            <div
              className="info-card"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <div className="info-icon">💬</div>
              <h3>{content.whatsapp.title}</h3>
              <p>{content.whatsapp.content}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{content.form.name}</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{content.form.email}</label>
              <input
                type="email"
                id="email"
                name="to_name"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{content.form.subject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{content.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting
                ? language === "en"
                  ? "Sending..."
                  : "Gönderiliyor..."
                : content.form.submit}
              <span className="btn-icon">→</span>
            </button>

            {status.error && (
              <div className="error-message">{status.error}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
