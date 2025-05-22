import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Enhanced smooth scroll with better easing
    const scrollStep = -window.scrollY / 25;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-6 bottom-6 z-50 p-3 bg-gold-500/90 hover:bg-gold-500 
                     text-white rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-110 transition-all duration-300
                     backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};