import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { RoomModal } from './RoomModal';
import { RoomGallery } from './RoomGallery';
import { useTranslation } from 'react-i18next';

const rooms = [
  {
    id: 1,
    name: 'Presidential Suite',
    nameBg: 'Президентски Суит',
    price: '$599',
    priceBg: '1099 лв.',
    description: 'Luxurious suite with panoramic city views and private terrace. Experience unparalleled luxury with a spacious living area, private dining room, and premium amenities.',
    descriptionBg: 'Луксозен апартамент с панорамна гледка към града и частна тераса. Изживейте несравним лукс с просторна всекидневна, частна трапезария и премиум удобства.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Presidential Suite', bg: 'Президентски Суит' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Living Room', bg: 'Всекидневна на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Bathroom', bg: 'Баня на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Private Terrace', bg: 'Частна тераса' },
        width: 1950,
        height: 1300
      }
    ]
  },
  {
    id: 2,
    name: 'Executive Suite',
    nameBg: 'Екзекютив Суит',
    price: '$399',
    priceBg: '729 лв.',
    description: 'Spacious suite with separate living area and city skyline views. Perfect for business travelers or those seeking extra comfort with a dedicated workspace and lounge area.',
    descriptionBg: 'Просторен апартамент с отделна всекидневна и изглед към градския хоризонт. Перфектен за бизнес пътници или търсещи допълнителен комфорт с работно място и кът за отдих.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Executive Suite', bg: 'Екзекютив Суит' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1566152446836-dd0792e4deae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Workspace', bg: 'Работно място' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Bathroom', bg: 'Баня на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Lounge Area', bg: 'Кът за отдих' },
        width: 1950,
        height: 1300
      }
    ]
  },
  {
    id: 3,
    name: 'Deluxe Room',
    nameBg: 'Делукс Стая',
    price: '$299',
    priceBg: '549 лв.',
    description: 'Elegant room with modern amenities and comfortable workspace. Featuring contemporary design, premium bedding, and all the essentials for a pleasant stay.',
    descriptionBg: 'Елегантна стая със съвременни удобства и комфортно работно място. Със съвременен дизайн, луксозно спално бельо и всички необходими удобства за приятен престой.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Deluxe Room', bg: 'Делукс Стая' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Room Bathroom', bg: 'Баня' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Room Detail', bg: 'Детайл от стаята' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Workspace', bg: 'Работно място' },
        width: 1950,
        height: 1300
      }
    ]
  },
];

export const FeaturedRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section id="rooms" className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            {currentLanguage === 'bg' ? 'Луксозно Настаняване' : 'Luxury Accommodations'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {currentLanguage === 'bg' 
              ? 'Изживейте несравним комфорт в нашите внимателно проектирани стаи и апартаменти'
              : 'Experience unparalleled comfort in our meticulously designed rooms and suites'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative overflow-hidden">
                <RoomGallery images={room.images} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-playfair font-bold text-white">
                    {currentLanguage === 'bg' ? room.nameBg : room.name}
                  </h3>
                  <span className="text-gold-400 text-xl font-semibold">
                    {currentLanguage === 'bg' ? room.priceBg : room.price}/
                    {currentLanguage === 'bg' ? 'нощ' : 'night'}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {currentLanguage === 'bg' ? room.descriptionBg : room.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <button 
                    className="btn-primary"
                    onClick={() => setSelectedRoom(room)}
                  >
                    {currentLanguage === 'bg' ? 'Виж Детайли' : 'View Details'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <RoomModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={{
          name: currentLanguage === 'bg' && selectedRoom ? selectedRoom.nameBg : selectedRoom?.name || '',
          price: currentLanguage === 'bg' && selectedRoom ? selectedRoom.priceBg : selectedRoom?.price || '',
          description: currentLanguage === 'bg' && selectedRoom ? selectedRoom.descriptionBg : selectedRoom?.description || '',
          image: selectedRoom?.images[0].src || '',
        }}
      />
    </section>
  );
};