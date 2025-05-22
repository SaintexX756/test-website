import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Gallery as PhotoSwipeGallery } from 'react-photoswipe-gallery';
import { ChevronRight } from 'lucide-react';
import 'photoswipe/dist/photoswipe.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'Hotel Exterior', bg: 'Екстериор на хотела' },
    path: '/about'
  },
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'Luxury Suite', bg: 'Луксозен апартамент' },
    path: '/rooms'
  },
  {
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'Fine Dining', bg: 'Изискана кухня' },
    path: '/dining'
  },
  {
    src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'Spa & Wellness', bg: 'СПА и Уелнес' },
    path: '/spa'
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'Infinity Pool', bg: 'Инфинити басейн' },
    path: '/spa'
  },
  {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    width: 1950,
    height: 1300,
    title: { en: 'City View', bg: 'Изглед към града' },
    path: '/rooms'
  },
];

export const Gallery = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const handleLearnMore = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {currentLanguage === 'bg' ? 'Изживейте Лукса' : 'Experience Luxury'}
          </h2>
          <p className="section-subtitle">
            {currentLanguage === 'bg' 
              ? 'Разгледайте визуално нашите първокласни съоръжения'
              : 'Take a visual journey through our premium facilities'}
          </p>
        </motion.div>

        <PhotoSwipeGallery>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={currentLanguage === 'bg' ? image.title.bg : image.title.en}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3">
                  <span className="text-white text-lg font-playfair">
                    {currentLanguage === 'bg' ? image.title.bg : image.title.en}
                  </span>
                  <button 
                    className="btn-learn-more text-sm"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening the PhotoSwipe gallery
                      handleLearnMore(image.path);
                    }}
                  >
                    {t('learnMore', 'Learn More')} <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoSwipeGallery>
      </div>
    </section>
  );
};