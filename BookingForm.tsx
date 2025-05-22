import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Users, Bed } from 'lucide-react';

export const BookingForm = () => {
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
    <div className="w-full max-w-6xl mx-auto -mt-20 px-4 relative z-30 booking-form-section">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl hover:bg-white/98">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            className="btn-primary w-full sm:w-auto transform transition-all duration-300 hover:scale-105"
            onClick={handleCheckAvailability}
          >
            {t('hero.checkAvailability')}
          </button>
        </div>
      </div>
    </div>
  );
};