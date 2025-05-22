import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { DiningPage } from './pages/DiningPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { SpaPage } from './pages/SpaPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { StructuredData } from './components/StructuredData';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <StructuredData
          name="Hotel Demo"
          description="Experience world-class hospitality in the heart of Bulgaria. Luxury accommodations with premium amenities and exceptional service."
          address={{
            streetAddress: "123 Luxury Avenue",
            addressLocality: "Sofia",
            addressCountry: "Bulgaria"
          }}
          telephone="+359 2 123 4567"
          email="info@hoteldemo.com"
          priceRange="$$$"
          starRating={5}
        />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;