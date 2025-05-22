import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add effect to handle scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    const isCurrentPath = location.pathname === path;
    
    if (isCurrentPath) {
      // Enhanced smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        /* Add easing for smoother animation */
      });
    } else {
      navigate(path);
      // Scroll to top when navigating to new page
      window.scrollTo({ top: 0 });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    navigate('/booking');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-navy-900/95 backdrop-blur-sm shadow-lg py-4' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <Link 
            to="/" 
            onClick={() => handleNavigation('/')}
            className="text-2xl font-playfair font-bold text-white w-1/4"
          >
            Hotel Demo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-3 flex-grow">
            <button 
              onClick={() => handleNavigation('/')}
              className="nav-button"
            >
              {t('navigation.aboutHotel')}
            </button>
            <button
              onClick={() => handleNavigation('/rooms')}
              className="nav-button"
            >
              {t('navigation.rooms')}
            </button>
            <button
              onClick={() => handleNavigation('/dining')}
              className="nav-button"
            >
              {t('navigation.dining')}
            </button>
            <button
              onClick={() => handleNavigation('/spa')}
              className="nav-button"
            >
              {t('navigation.spa')}
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="nav-button"
            >
              {t('navigation.contact')}
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="nav-button"
            >
              {t('navigation.about')}
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center justify-end space-x-6 w-1/4">
            <LanguageToggle />
            <button 
              className="book-now-button"
              onClick={handleBookNow}
            >
              {t('navigation.book')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end space-x-4 flex-grow">
            <LanguageToggle />
            <button
              className="text-white hover:text-gold-400 transition-colors p-2 rounded-md hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <div className="flex flex-col">
              <button
                onClick={() => handleNavigation('/')}
                className="nav-button-mobile"
              >
                {t('navigation.aboutHotel')}
              </button>
              <button
                onClick={() => handleNavigation('/rooms')}
                className="nav-button-mobile"
              >
                {t('navigation.rooms')}
              </button>
              <button
                onClick={() => handleNavigation('/dining')}
                className="nav-button-mobile"
              >
                {t('navigation.dining')}
              </button>
              <button
                onClick={() => handleNavigation('/spa')}
                className="nav-button-mobile"
              >
                {t('navigation.spa')}
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="nav-button-mobile"
              >
                {t('navigation.contact')}
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="nav-button-mobile"
              >
                {t('navigation.about')}
              </button>
              <div className="mt-4 px-2">
                <button 
                  className="btn-primary w-full"
                  onClick={handleBookNow}
                >
                  {t('navigation.book')}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};