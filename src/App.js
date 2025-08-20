import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Listings from "./Components/Listing/listings.jsx";
import LanguageProvider from "./Context/LanguageContext";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
            </Routes>
           
          </main>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
         <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
