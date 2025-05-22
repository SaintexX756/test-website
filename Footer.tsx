import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-navy-800 via-navy-900 to-black py-20 px-4">
      {/* Separator Line */}
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-white/20 mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Hotel Demo
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a 
                href="#" 
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter size={28} />
              </a>
              <a 
                href="#" 
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {t('navigation.rooms')}
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {t('navigation.dining')}
                </Link>
              </li>
              <li>
                <Link to="/spa" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {t('navigation.spa')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300 group">
                <MapPin size={20} className="text-gold-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-gold-400 transition-colors">
                  {t('footer.address')}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 group">
                <Phone size={20} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+35921234567" className="hover:text-gold-400 transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 group">
                <Mail size={20} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@hotelbulgaria.com" className="hover:text-gold-400 transition-colors">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Clock size={20} className="text-gold-400" />
                <span>{t('footer.concierge')}</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-6">
              {t('footer.newsletter.title')}
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.newsletter.description')}
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full bg-white/20 text-white px-5 py-3 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-gold-400 
                           placeholder-gray-400 backdrop-blur-sm
                           transition-all duration-300"
                />
              </div>
              <button 
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 
                         hover:from-gold-600 hover:to-gold-700 text-white px-5 py-3 
                         rounded-md transition-all duration-300 transform hover:scale-105 
                         hover:shadow-lg hover:shadow-gold-500/20 font-semibold"
              >
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-gold-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-gold-400 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-gold-400 transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};