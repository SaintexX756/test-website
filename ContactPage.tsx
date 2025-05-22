import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const contactInfo = {
    address: {
      en: '123 Luxury Avenue, City Center, Sofia, Bulgaria',
      bg: 'бул. Лъкшъри 123, Център, София, България'
    },
    phone: '+359 2 123 4567',
    email: 'info@hotelbulgaria.com',
    hours: {
      en: '24/7 Concierge Service',
      bg: '24/7 Консиерж Услуги'
    }
  };

  const departments = [
    {
      name: { en: 'Reservations', bg: 'Резервации' },
      email: 'reservations@hotelbulgaria.com',
      phone: '+359 2 123 4568'
    },
    {
      name: { en: 'Events & Weddings', bg: 'Събития и Сватби' },
      email: 'events@hotelbulgaria.com',
      phone: '+359 2 123 4569'
    },
    {
      name: { en: 'Spa & Wellness', bg: 'СПА и Уелнес' },
      email: 'spa@hotelbulgaria.com',
      phone: '+359 2 123 4570'
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              {currentLanguage === 'bg' ? 'Свържете се с нас' : 'Contact Us'}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {currentLanguage === 'bg' 
                ? 'Нашият екип е на ваше разположение денонощно, за да отговори на всички ваши въпроси и да направи престоя ви незабравим'
                : 'Our team is available 24/7 to answer all your questions and make your stay unforgettable'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy-800 p-8 rounded-lg shadow-xl"
            >
              <h2 className="text-2xl font-playfair font-bold text-white mb-6">
                {currentLanguage === 'bg' ? 'Изпратете ни съобщение' : 'Send us a message'}
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    {currentLanguage === 'bg' ? 'Име' : 'Name'}
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder={currentLanguage === 'bg' ? 'Вашето име' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    {currentLanguage === 'bg' ? 'Имейл' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder={currentLanguage === 'bg' ? 'Вашият имейл' : 'Your email'}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    {currentLanguage === 'bg' ? 'Съобщение' : 'Message'}
                  </label>
                  <textarea
                    className="input-field h-32"
                    placeholder={currentLanguage === 'bg' ? 'Вашето съобщение' : 'Your message'}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  {currentLanguage === 'bg' ? 'Изпрати' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Contact Info */}
              <div className="bg-navy-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-6">
                  {currentLanguage === 'bg' ? 'Информация за контакт' : 'Contact Information'}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-gold-400 w-6 h-6 mt-1" />
                    <span className="text-gray-300">
                      {currentLanguage === 'bg' ? contactInfo.address.bg : contactInfo.address.en}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-gold-400 w-6 h-6" />
                    <span className="text-gray-300">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-gold-400 w-6 h-6" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-gold-400 w-6 h-6" />
                    <span className="text-gray-300">
                      {currentLanguage === 'bg' ? contactInfo.hours.bg : contactInfo.hours.en}
                    </span>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-navy-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-playfair font-bold text-white mb-6">
                  {currentLanguage === 'bg' ? 'Отдели' : 'Departments'}
                </h2>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                      <h3 className="text-white font-semibold mb-2">
                        {currentLanguage === 'bg' ? dept.name.bg : dept.name.en}
                      </h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Mail className="text-gold-400 w-4 h-4" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="text-gold-400 w-4 h-4" />
                          <span>{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};