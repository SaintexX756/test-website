import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Array of luxury hotel images
const backgroundImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
];

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Change background image every 4 seconds with faster transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 600); // Faster fade out animation (600ms instead of 1000ms)
    }, 4000); // Shorter interval (4s instead of 6s)

    return () => clearInterval(interval);
  }, []);

  const handleCheckAvailability = () => {
    // Navigate to the booking page
    navigate('/booking');
  };

  const handleExploreRooms = () => {
    // Navigate to the rooms page
    navigate('/rooms');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Dynamic Background Images */}
      <AnimatePresence>
        <motion.div 
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Faster transition (0.8s instead of 1.5s)
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
          }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 hero-overlay z-10" />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-5xl text-center mb-6 font-playfair font-bold"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-center mb-12 max-w-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button 
            className="btn-primary"
            onClick={handleCheckAvailability}
          >
            {t('hero.checkAvailability')}
          </button>
          <button 
            className="btn-secondary"
            onClick={handleExploreRooms}
          >
            {t('hero.exploreRooms')}
          </button>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsTransitioning(false);
                }, 600); // Match the faster transition time
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};