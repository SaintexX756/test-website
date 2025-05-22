import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { School as Pool, Utensils, Space as Spa, Dumbbell, Building2, Coffee, ChevronRight } from 'lucide-react';

const amenityIcons = {
  pool: Pool,
  dining: Utensils,
  spa: Spa,
  fitness: Dumbbell,
  events: Building2,
  lounge: Coffee,
};

export const Amenities = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const amenities = [
    {
      icon: 'pool',
      translationKey: 'pool',
      path: '/spa'
    },
    {
      icon: 'dining',
      translationKey: 'dining',
      path: '/dining'
    },
    {
      icon: 'spa',
      translationKey: 'spa',
      path: '/spa'
    },
    {
      icon: 'fitness',
      translationKey: 'fitness',
      path: '/spa'
    },
    {
      icon: 'events',
      translationKey: 'events',
      path: '/contact'
    },
    {
      icon: 'lounge',
      translationKey: 'lounge',
      path: '/dining'
    },
  ];

  const handleLearnMore = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy-800 to-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {t('amenities.title')}
          </h2>
          <p className="section-subtitle">
            {t('amenities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenityIcons[amenity.icon as keyof typeof amenityIcons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="amenity-card"
              >
                <Icon className="w-14 h-14 text-gold-400 mb-5" />
                <h3 className="text-xl font-playfair font-bold text-white mb-3">
                  {t(`amenities.${amenity.translationKey}.title`)}
                </h3>
                <p className="text-gray-300 text-center mb-2">
                  {t(`amenities.${amenity.translationKey}.description`)}
                </p>
                <button 
                  className="btn-learn-more"
                  onClick={() => handleLearnMore(amenity.path)}
                >
                  {t('learnMore', 'Learn More')} <ChevronRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};