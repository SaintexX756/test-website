import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Users, Bed } from 'lucide-react';

export const BookingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [roomType, setRoomType] = useState('deluxe');

  const handleCheckAvailability = () => {
    // Navigate to rooms page with query parameters
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn.toISOString());
    if (checkOut) params.append('checkOut', checkOut.toISOString());
    params.append('adults', guests.adults.toString());
    params.append('children', guests.children.toString());
    params.append('roomType', roomType);
    
    navigate(`/rooms?${params.toString()}`);
  };

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
              {t('booking.title', 'Check Availability')}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('booking.subtitle', 'Find your perfect room and make a reservation for your stay')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl hover:bg-white/98 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('booking.checkIn')}
                </label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-gold-500 transition-colors" />
                  <DatePicker
                    selected={checkIn}
                    onChange={date => setCheckIn(date)}
                    className="input-field pl-12 w-full transition-all duration-300 focus:ring-gold-400"
                    placeholderText={t('booking.checkIn')}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('booking.checkOut')}
                </label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-gold-500 transition-colors" />
                  <DatePicker
                    selected={checkOut}
                    onChange={date => setCheckOut(date)}
                    className="input-field pl-12 w-full transition-all duration-300 focus:ring-gold-400"
                    placeholderText={t('booking.checkOut')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('booking.guests')}
                </label>
                <div className="relative group">
                  <Users className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-gold-500 transition-colors" />
                  <select 
                    className="input-field pl-12 w-full appearance-none transition-all duration-300 focus:ring-gold-400"
                    value={`${guests.adults},${guests.children}`}
                    onChange={(e) => {
                      const [adults, children] = e.target.value.split(',').map(Number);
                      setGuests({ adults, children });
                    }}
                  >
                    <option value="1,0">1 {t('booking.adults')}</option>
                    <option value="2,0">2 {t('booking.adults')}</option>
                    <option value="2,1">2 {t('booking.adults')}, 1 {t('booking.children')}</option>
                    <option value="2,2">2 {t('booking.adults')}, 2 {t('booking.children')}</option>
                    <option value="3,0">3 {t('booking.adults')}</option>
                    <option value="4,0">4 {t('booking.adults')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('booking.roomType')}
                </label>
                <div className="relative group">
                  <Bed className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-gold-500 transition-colors" />
                  <select 
                    className="input-field pl-12 w-full appearance-none transition-all duration-300 focus:ring-gold-400"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="deluxe">{t('booking.rooms.deluxe')}</option>
                    <option value="executive">{t('booking.rooms.executive')}</option>
                    <option value="presidential">{t('booking.rooms.presidential')}</option>
                    <option value="oceanview">{t('booking.rooms.oceanview', 'Ocean View Suite')}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                className="btn-primary w-full sm:w-auto transform transition-all duration-300 hover:scale-105 text-lg py-4 px-12"
                onClick={handleCheckAvailability}
              >
                {t('booking.search', 'Search Available Rooms')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-navy-800/50 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-playfair font-bold text-white mb-6">
              {t('booking.whyBook', 'Why Book Directly With Us')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-gold-400 text-xl font-bold mb-2">
                  {t('booking.benefits.bestPrice.title', 'Best Price Guarantee')}
                </div>
                <p className="text-gray-300">
                  {t('booking.benefits.bestPrice.description', 'We guarantee the lowest price when you book directly with us')}
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-gold-400 text-xl font-bold mb-2">
                  {t('booking.benefits.flexibility.title', 'Flexible Cancellation')}
                </div>
                <p className="text-gray-300">
                  {t('booking.benefits.flexibility.description', 'More flexible cancellation policies when booking direct')}
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-gold-400 text-xl font-bold mb-2">
                  {t('booking.benefits.perks.title', 'Exclusive Perks')}
                </div>
                <p className="text-gray-300">
                  {t('booking.benefits.perks.description', 'Special amenities and upgrades for direct bookings')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};