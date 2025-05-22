import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Clock, Phone } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: 'La Terrasse',
    type: ['Fine Dining Restaurant', 'Ресторант за Изискана Кухня'],
    description: 'Experience exquisite Mediterranean cuisine with panoramic city views from our rooftop restaurant. Our master chefs create unforgettable dishes using the finest local and imported ingredients.',
    descriptionBg: 'Насладете се на изискана средиземноморска кухня с панорамна гледка към града от нашия покривен ресторант. Нашите майстор-готвачи създават незабравими ястия, използвайки най-качествените местни и вносни съставки.',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    hours: ['18:00 - 23:00', '18:00 - 23:00'],
    phone: '+359 2 123 4567',
    cuisine: ['Mediterranean', 'Средиземноморска'],
    priceRange: '€€€€',
  },
  {
    id: 2,
    name: 'The Oriental Garden',
    type: ['Asian Fusion Restaurant', 'Азиатски Фюжън Ресторант'],
    description: 'A journey through Asian flavors in an elegant setting. Featuring sushi, dim sum, and contemporary Asian fusion dishes prepared by our specialized chefs.',
    descriptionBg: 'Пътешествие през азиатските вкусове в елегантна обстановка. Предлагаме суши, дим сум и съвременни азиатски фюжън ястия, приготвени от нашите специализирани готвачи.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    hours: ['12:00 - 22:30', '12:00 - 22:30'],
    phone: '+359 2 123 4568',
    cuisine: ['Asian Fusion', 'Азиатски Фюжън'],
    priceRange: '€€€',
  },
  {
    id: 3,
    name: 'Lobby Bar & Lounge',
    type: ['Cocktail Bar & Light Dining', 'Коктейл Бар и Леки Ястия'],
    description: 'An sophisticated space for creative cocktails, fine wines, and light gourmet bites. Perfect for casual meetings or evening relaxation.',
    descriptionBg: 'Изискано пространство за креативни коктейли, качествени вина и леки гурме хапки. Перфектно за неформални срещи или вечерна релаксация.',
    image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    hours: ['10:00 - 01:00', '10:00 - 01:00'],
    phone: '+359 2 123 4569',
    cuisine: ['International', 'Интернационална'],
    priceRange: '€€',
  },
  {
    id: 4,
    name: 'The Wine Cellar',
    type: ['Wine Bar & Tapas', 'Винен Бар и Тапас'],
    description: 'An intimate wine cellar featuring an extensive collection of local and international wines, paired with artisanal cheeses and gourmet tapas.',
    descriptionBg: 'Уютна винарна с богата колекция от местни и международни вина, съчетани с артизанални сирена и гурме тапас.',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    hours: ['17:00 - 00:00', '17:00 - 00:00'],
    phone: '+359 2 123 4570',
    cuisine: ['European', 'Европейска'],
    priceRange: '€€€',
  },
];

export const DiningPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

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
              {currentLanguage === 'bg' ? 'Ресторанти и Барове' : 'Restaurants & Bars'}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {currentLanguage === 'bg' 
                ? 'Отправете се на кулинарно пътешествие през нашите изключителни заведения'
                : 'Embark on a culinary journey through our exceptional dining venues'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {restaurants.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-navy-800 rounded-lg overflow-hidden shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-2xl font-playfair font-bold text-white mb-1">
                            {venue.name}
                          </h2>
                          <p className="text-gold-400">
                            {currentLanguage === 'bg' ? venue.type[1] : venue.type[0]}
                          </p>
                        </div>
                        <span className="text-gold-400 font-semibold">
                          {venue.priceRange}
                        </span>
                      </div>
                      <div className="flex text-gold-400 mb-4">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6">
                        {currentLanguage === 'bg' ? venue.descriptionBg : venue.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-300">
                          <Clock size={18} className="text-gold-400 mr-2" />
                          <span>
                            {currentLanguage === 'bg' ? 'Работно време: ' : 'Opening Hours: '}
                            {currentLanguage === 'bg' ? venue.hours[1] : venue.hours[0]}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Phone size={18} className="text-gold-400 mr-2" />
                          <span>
                            {currentLanguage === 'bg' ? 'Резервации: ' : 'Reservations: '}
                            {venue.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button className="btn-primary w-full">
                        {currentLanguage === 'bg' ? 'Направи Резервация' : 'Make a Reservation'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};